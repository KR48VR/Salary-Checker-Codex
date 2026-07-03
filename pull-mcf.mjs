#!/usr/bin/env node

import { writeFileSync } from "node:fs";

const API_URL = "https://api.mycareersfuture.gov.sg/v2/jobs";
const DEFAULT_KEYWORDS = [
  "data scientist",
  "data analyst",
  "software engineer",
  "product manager",
  "business analyst"
];

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  printHelp();
  process.exit(0);
}

const keywords = args.keywords.length ? args.keywords : DEFAULT_KEYWORDS;
const pages = clamp(Number(args.pages || 3), 1, 25);
const limit = clamp(Number(args.limit || 20), 1, 100);
const sessionId = "fairoffer-" + Date.now();
const rowsById = new Map();

for (const keyword of keywords) {
  for (let page = 0; page < pages; page += 1) {
    const payload = await fetchPage({ keyword, page, limit, sessionId });
    const results = Array.isArray(payload.results) ? payload.results : [];

    for (const job of results) {
      const row = normalizeJob(job);
      if (row) rowsById.set(job.uuid || row.url || row.source, row);
    }

    console.error(
      `${keyword}: page ${page + 1}/${pages}, ${results.length} listings, ${rowsById.size} usable salary rows`
    );

    if (!results.length || rowsById.size >= args.maxRows) break;
    await sleep(args.delay);
  }
}

const rows = Array.from(rowsById.values())
  .sort((a, b) => String(b.posted).localeCompare(String(a.posted)) || a.title.localeCompare(b.title))
  .slice(0, args.maxRows);

const csv = toCsv(rows);

if (args.out) {
  writeFileSync(args.out, csv);
  console.error(`Wrote ${rows.length} rows to ${args.out}`);
} else {
  process.stdout.write(csv + "\n");
}

function parseArgs(argv) {
  const parsed = {
    delay: 350,
    help: false,
    keywords: [],
    limit: 20,
    maxRows: 500,
    out: "",
    pages: 3
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--out") parsed.out = argv[++i] || "";
    else if (arg.startsWith("--out=")) parsed.out = arg.slice("--out=".length);
    else if (arg === "--pages") parsed.pages = Number(argv[++i]);
    else if (arg.startsWith("--pages=")) parsed.pages = Number(arg.slice("--pages=".length));
    else if (arg === "--limit") parsed.limit = Number(argv[++i]);
    else if (arg.startsWith("--limit=")) parsed.limit = Number(arg.slice("--limit=".length));
    else if (arg === "--delay") parsed.delay = Number(argv[++i]);
    else if (arg.startsWith("--delay=")) parsed.delay = Number(arg.slice("--delay=".length));
    else if (arg === "--max-rows") parsed.maxRows = Number(argv[++i]);
    else if (arg.startsWith("--max-rows=")) parsed.maxRows = Number(arg.slice("--max-rows=".length));
    else parsed.keywords.push(arg);
  }

  parsed.delay = clamp(Number(parsed.delay || 350), 0, 5000);
  parsed.maxRows = clamp(Number(parsed.maxRows || 500), 1, 5000);
  return parsed;
}

async function fetchPage({ keyword, page, limit, sessionId }) {
  const url = new URL(API_URL);
  url.searchParams.set("search", keyword);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("page", String(page));
  url.searchParams.set("salary", "0");
  url.searchParams.set("sessionId", sessionId);

  const response = await fetch(url, {
    headers: {
      "accept": "application/json",
      "mcf-client": "jobseeker",
      "user-agent": "FairOfferSG/1.0 salary benchmark CSV importer"
    }
  });

  if (!response.ok) {
    throw new Error(`MyCareersFuture returned ${response.status} for ${url}`);
  }

  return response.json();
}

function normalizeJob(job) {
  const salary = job.salary || {};
  const salaryType = salary.type && salary.type.salaryType;
  const min = Number(salary.minimum);
  const max = Number(salary.maximum);

  if (!min || !max || salaryType !== "Monthly") return null;
  if (job.metadata && job.metadata.isHideSalary) return null;

  const company = (job.hiringCompany && job.hiringCompany.name)
    || (job.postedCompany && job.postedCompany.name)
    || "MyCareersFuture employer";

  const categories = Array.isArray(job.categories) ? job.categories.map((item) => item.category).filter(Boolean) : [];
  const positionLevels = Array.isArray(job.positionLevels) ? job.positionLevels.map((item) => item.position).filter(Boolean) : [];
  const skills = Array.isArray(job.skills) ? job.skills.map((item) => item.skill).filter(Boolean) : [];
  const district = job.address && Array.isArray(job.address.districts) && job.address.districts[0];
  const posted = job.metadata && (job.metadata.newPostingDate || job.metadata.originalPostingDate);
  const jobPostId = job.metadata && job.metadata.jobPostId;
  const url = job.metadata && job.metadata.jobDetailsUrl;

  return {
    title: cleanText(job.title),
    company: cleanText(company),
    industry: categories.length ? categories.join(" / ") : "Uncategorised",
    seniority: seniorityFromMcf(positionLevels, job.minimumYearsExperience),
    min,
    max,
    skills: skills.slice(0, 12).join(";"),
    description: cleanText(stripHtml(job.description)).slice(0, 1200),
    location: district ? district.location : "Singapore",
    source: jobPostId ? `MyCareersFuture ${jobPostId}` : "MyCareersFuture",
    posted: posted || new Date().toISOString().slice(0, 10),
    url: url || ""
  };
}

function seniorityFromMcf(positionLevels, years) {
  const text = positionLevels.join(" ").toLowerCase();
  const numericYears = Number(years || 0);

  if (text.includes("intern")) return "Intern";
  if (text.includes("fresh") || text.includes("entry")) return "Entry";
  if (text.includes("junior") || text.includes("associate")) return "Junior";
  if (text.includes("senior")) return "Senior";
  if (text.includes("manager")) return "Manager";
  if (text.includes("director") || text.includes("head")) return "Director";
  if (numericYears < 1) return "Entry";
  if (numericYears < 3) return "Junior";
  if (numericYears < 6) return "Mid";
  if (numericYears < 9) return "Senior";
  return "Lead";
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function toCsv(rows) {
  const headers = [
    "title",
    "company",
    "industry",
    "seniority",
    "min",
    "max",
    "skills",
    "description",
    "location",
    "source",
    "posted",
    "url"
  ];

  return [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))
  ].join("\n");
}

function csvCell(value) {
  const text = String(value ?? "");
  if (!/[",\n\r]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clamp(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

function printHelp() {
  console.log(`
Pull public MyCareersFuture listings into FairOffer SG CSV.

Usage:
  node pull-mcf.mjs "data scientist" "software engineer" --pages 5 --out mcf.csv

Options:
  --out <file>       Write CSV to a file instead of stdout
  --pages <n>        Pages per keyword, default 3
  --limit <n>        Listings per page, default 20
  --max-rows <n>     Maximum unique rows, default 500
  --delay <ms>       Pause between requests, default 350

Notes:
  Only public listings with disclosed monthly salary bands are exported.
  Import the generated CSV in FairOffer SG's Data tab.
`.trim());
}
