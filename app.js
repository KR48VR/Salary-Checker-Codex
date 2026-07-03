(function () {
  "use strict";

  const seniorityOrder = ["Intern", "Entry", "Junior", "Mid", "Senior", "Lead", "Manager", "Director"];
  const industries = ["All industries", "Technology", "Finance", "Healthcare", "Consulting", "Public Sector", "Commerce", "Manufacturing", "Media"];
  const seniorities = ["Any level", ...seniorityOrder];

  const archetypes = [
    {
      title: "Data Scientist",
      family: "Data",
      industry: "Technology",
      seniority: "Entry",
      min: 4300,
      max: 6500,
      skills: ["python", "sql", "machine learning", "statistics", "experimentation"],
      description: "Analyse product data, build predictive models, run experiments, create dashboards, partner with engineering and product teams."
    },
    {
      title: "Machine Learning Engineer",
      family: "AI",
      industry: "Technology",
      seniority: "Mid",
      min: 6800,
      max: 10500,
      skills: ["python", "pytorch", "mlops", "cloud", "model deployment"],
      description: "Build production machine learning services, manage model pipelines, improve inference performance, and ship AI features."
    },
    {
      title: "AI Engineer",
      family: "AI",
      industry: "Technology",
      seniority: "Junior",
      min: 5200,
      max: 8200,
      skills: ["python", "llm", "rag", "prompt engineering", "api integration"],
      description: "Develop generative AI workflows, evaluate language models, integrate APIs, and automate knowledge retrieval for business users."
    },
    {
      title: "Data Analyst",
      family: "Data",
      industry: "Finance",
      seniority: "Junior",
      min: 4200,
      max: 6800,
      skills: ["sql", "tableau", "python", "excel", "stakeholder management"],
      description: "Transform business data, build dashboards, investigate metric changes, and explain trends to commercial and finance leaders."
    },
    {
      title: "Business Analyst",
      family: "Strategy",
      industry: "Consulting",
      seniority: "Entry",
      min: 3800,
      max: 5600,
      skills: ["requirements", "process mapping", "excel", "presentation", "uat"],
      description: "Gather requirements, map workflows, support UAT, build business cases, and coordinate implementation across stakeholders."
    },
    {
      title: "Software Engineer",
      family: "Engineering",
      industry: "Technology",
      seniority: "Junior",
      min: 4800,
      max: 7800,
      skills: ["javascript", "typescript", "react", "node", "api"],
      description: "Build web applications, write APIs, review code, test releases, and collaborate with product designers."
    },
    {
      title: "Backend Engineer",
      family: "Engineering",
      industry: "Technology",
      seniority: "Mid",
      min: 6500,
      max: 10500,
      skills: ["java", "golang", "microservices", "sql", "cloud"],
      description: "Design backend services, scale APIs, operate cloud infrastructure, improve reliability, and support production systems."
    },
    {
      title: "Cybersecurity Analyst",
      family: "Security",
      industry: "Finance",
      seniority: "Junior",
      min: 4700,
      max: 7600,
      skills: ["soc", "siem", "incident response", "risk", "network security"],
      description: "Monitor security events, investigate alerts, maintain controls, document incidents, and support audits."
    },
    {
      title: "Product Manager",
      family: "Product",
      industry: "Technology",
      seniority: "Mid",
      min: 7000,
      max: 11500,
      skills: ["roadmap", "experimentation", "analytics", "stakeholders", "strategy"],
      description: "Own product outcomes, prioritise roadmap, work with engineering and design, run experiments, and define success metrics."
    },
    {
      title: "UX Designer",
      family: "Design",
      industry: "Commerce",
      seniority: "Mid",
      min: 5200,
      max: 8200,
      skills: ["figma", "research", "prototyping", "design systems", "usability"],
      description: "Research user needs, create prototypes, run usability tests, maintain design systems, and partner with product teams."
    },
    {
      title: "Digital Marketing Specialist",
      family: "Marketing",
      industry: "Commerce",
      seniority: "Junior",
      min: 3600,
      max: 5900,
      skills: ["seo", "paid social", "crm", "analytics", "copywriting"],
      description: "Run acquisition campaigns, optimise SEO and paid social, report channel performance, and coordinate campaign assets."
    },
    {
      title: "Finance Analyst",
      family: "Finance",
      industry: "Finance",
      seniority: "Junior",
      min: 4200,
      max: 6700,
      skills: ["financial modelling", "excel", "forecasting", "variance analysis", "reporting"],
      description: "Prepare forecasts, analyse variance, build financial models, support month-end reporting, and brief business leaders."
    },
    {
      title: "HR Business Partner",
      family: "People",
      industry: "Healthcare",
      seniority: "Mid",
      min: 5200,
      max: 8300,
      skills: ["employee relations", "talent", "compensation", "change management", "policy"],
      description: "Advise managers on people matters, support talent reviews, manage employee relations, and execute HR initiatives."
    },
    {
      title: "Operations Executive",
      family: "Operations",
      industry: "Manufacturing",
      seniority: "Entry",
      min: 3200,
      max: 4800,
      skills: ["process improvement", "vendor management", "inventory", "excel", "coordination"],
      description: "Coordinate daily operations, track vendors, improve processes, manage inventory, and report operational metrics."
    },
    {
      title: "Project Manager",
      family: "Delivery",
      industry: "Public Sector",
      seniority: "Mid",
      min: 6000,
      max: 9500,
      skills: ["agile", "budget", "vendor management", "risk", "delivery"],
      description: "Manage delivery plans, coordinate vendors, track budget and risks, run governance meetings, and report project progress."
    },
    {
      title: "Clinical Data Manager",
      family: "Data",
      industry: "Healthcare",
      seniority: "Mid",
      min: 5600,
      max: 8800,
      skills: ["clinical data", "sql", "quality checks", "regulatory", "statistics"],
      description: "Manage clinical datasets, perform quality checks, support regulatory submissions, and coordinate with medical teams."
    },
    {
      title: "Content Strategist",
      family: "Media",
      industry: "Media",
      seniority: "Junior",
      min: 3600,
      max: 5700,
      skills: ["content planning", "analytics", "copywriting", "social", "research"],
      description: "Plan content calendars, analyse audience performance, write editorial copy, and coordinate social distribution."
    },
    {
      title: "Cloud Solutions Architect",
      family: "Engineering",
      industry: "Technology",
      seniority: "Senior",
      min: 9000,
      max: 14500,
      skills: ["aws", "azure", "architecture", "security", "stakeholders"],
      description: "Design cloud architecture, advise enterprise customers, review security, estimate costs, and guide implementation teams."
    }
  ];

  const companyProfiles = [
    { company: "Nexora Labs", industry: "Technology", multiplier: 1.08, location: "One-North" },
    { company: "Merlion Digital Bank", industry: "Finance", multiplier: 1.12, location: "Marina Bay" },
    { company: "CareGrid Health", industry: "Healthcare", multiplier: 0.96, location: "Novena" },
    { company: "HarbourWorks", industry: "Manufacturing", multiplier: 0.92, location: "Jurong" },
    { company: "CivicTech SG", industry: "Public Sector", multiplier: 0.98, location: "City Hall" },
    { company: "Orchard Commerce", industry: "Commerce", multiplier: 0.95, location: "Somerset" },
    { company: "Atlas Advisory", industry: "Consulting", multiplier: 1.04, location: "Raffles Place" },
    { company: "Kopi Cloud", industry: "Technology", multiplier: 1.16, location: "Tanjong Pagar" },
    { company: "Pulse Media Group", industry: "Media", multiplier: 0.9, location: "Paya Lebar" }
  ];

  const examples = [
    {
      label: "Fresh grad data role",
      title: "Data Scientist",
      industry: "Technology",
      seniority: "Entry",
      years: 0.5,
      offer: 3500,
      description: "Python SQL machine learning dashboards generative AI data science product analytics stakeholder communication"
    },
    {
      label: "AI engineer offer",
      title: "AI Engineer",
      industry: "Technology",
      seniority: "Junior",
      years: 1.5,
      offer: 5600,
      description: "Build RAG applications, integrate LLM APIs, evaluate prompts, deploy Python services, work with business users"
    },
    {
      label: "Product manager",
      title: "Product Manager",
      industry: "Technology",
      seniority: "Mid",
      years: 5,
      offer: 8400,
      description: "Own roadmap, define product strategy, analyse funnel metrics, lead cross functional delivery and experiments"
    },
    {
      label: "Cyber analyst",
      title: "Cybersecurity Analyst",
      industry: "Finance",
      seniority: "Junior",
      years: 2,
      offer: 5200,
      description: "Monitor SIEM alerts, incident response, network security, risk controls, audit evidence"
    }
  ];

  const stopwords = new Set([
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "in", "into", "is", "it", "of", "on", "or", "our", "the", "to", "with", "you", "your", "we", "will", "work", "role", "team", "teams", "engineer", "engineering"
  ]);

  const synonymGroups = [
    ["ai", "artificial", "intelligence", "llm", "generative", "genai"],
    ["ml", "machine", "learning", "model", "models"],
    ["analytics", "analysis", "analyse", "analyze", "dashboard", "reporting"],
    ["software", "developer", "programming", "coding", "backend", "frontend", "fullstack"],
    ["inspection", "inspector", "inspect", "quality", "qa", "assurance", "control", "checks"],
    ["cloud", "aws", "azure", "gcp"],
    ["security", "cyber", "soc", "siem"],
    ["product", "roadmap", "experimentation"],
    ["finance", "financial", "forecasting"],
    ["marketing", "campaign", "seo", "social"]
  ];

  const state = {
    data: buildSeedData(),
    lastResult: null,
    liveRequestId: 0,
    pulseWindow: 90
  };

  const bundledDatasetPath = "./mcf-listings.csv";
  const liveApiEndpoint = String(window.FAIROFFER_API_ENDPOINT || "").trim();

  const els = {
    tabs: Array.from(document.querySelectorAll("[data-tab]")),
    views: Array.from(document.querySelectorAll(".view")),
    form: document.getElementById("salaryForm"),
    jobTitle: document.getElementById("jobTitle"),
    industry: document.getElementById("industry"),
    seniority: document.getElementById("seniority"),
    years: document.getElementById("years"),
    company: document.getElementById("company"),
    description: document.getElementById("description"),
    offer: document.getElementById("offer"),
    bonus: document.getElementById("bonus"),
    equity: document.getElementById("equity"),
    allowance: document.getElementById("allowance"),
    resetForm: document.getElementById("resetForm"),
    exampleChips: document.getElementById("exampleChips"),
    resultEmpty: document.getElementById("resultEmpty"),
    resultContent: document.getElementById("resultContent"),
    verdictTitle: document.getElementById("verdictTitle"),
    verdictSubtitle: document.getElementById("verdictSubtitle"),
    verdictPill: document.getElementById("verdictPill"),
    medianMetric: document.getElementById("medianMetric"),
    medianNote: document.getElementById("medianNote"),
    percentileMetric: document.getElementById("percentileMetric"),
    percentileNote: document.getElementById("percentileNote"),
    askMetric: document.getElementById("askMetric"),
    annualMetric: document.getElementById("annualMetric"),
    annualNote: document.getElementById("annualNote"),
    confidenceBadge: document.getElementById("confidenceBadge"),
    dataModeMetric: document.getElementById("dataModeMetric"),
    dataModeNote: document.getElementById("dataModeNote"),
    freshnessMetric: document.getElementById("freshnessMetric"),
    freshnessNote: document.getElementById("freshnessNote"),
    offerMarker: document.getElementById("offerMarker"),
    p10Label: document.getElementById("p10Label"),
    p25Label: document.getElementById("p25Label"),
    p50Label: document.getElementById("p50Label"),
    p75Label: document.getElementById("p75Label"),
    p90Label: document.getElementById("p90Label"),
    riskList: document.getElementById("riskList"),
    scenarioTable: document.getElementById("scenarioTable"),
    matchList: document.getElementById("matchList"),
    liveStatus: document.getElementById("liveStatus"),
    evidenceSummary: document.getElementById("evidenceSummary"),
    negotiationDraft: document.getElementById("negotiationDraft"),
    copyDraft: document.getElementById("copyDraft"),
    downloadReport: document.getElementById("downloadReport"),
    datasetCount: document.getElementById("datasetCount"),
    industryChart: document.getElementById("industryChart"),
    seniorityChart: document.getElementById("seniorityChart"),
    roleChart: document.getElementById("roleChart"),
    hotIndustryFilter: document.getElementById("hotIndustryFilter"),
    hotSeniorityFilter: document.getElementById("hotSeniorityFilter"),
    hotOfferList: document.getElementById("hotOfferList"),
    companyGrid: document.getElementById("companyGrid"),
    companySearch: document.getElementById("companySearch"),
    csvInput: document.getElementById("csvInput"),
    appendCsv: document.getElementById("appendCsv"),
    replaceCsv: document.getElementById("replaceCsv"),
    csvFile: document.getElementById("csvFile"),
    importStatus: document.getElementById("importStatus"),
    downloadDataset: document.getElementById("downloadDataset"),
    dataHealth: document.getElementById("dataHealth")
  };

  init();

  function init() {
    fillSelect(els.industry, industries);
    fillSelect(els.seniority, seniorities);
    fillSelect(els.hotIndustryFilter, industries);
    fillSelect(els.hotSeniorityFilter, seniorities);
    els.industry.value = "Technology";
    els.seniority.value = "Entry";
    renderExamples();
    bindEvents();
    updateDatasetViews();
    runBenchmark();
    loadBundledDataset();
  }

  function bindEvents() {
    els.tabs.forEach((button) => {
      button.addEventListener("click", () => activateTab(button.dataset.tab));
    });

    document.querySelectorAll("[data-tab-link]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        activateTab(link.dataset.tabLink);
      });
    });

    els.form.addEventListener("submit", (event) => {
      event.preventDefault();
      runBenchmark();
    });

    els.resetForm.addEventListener("click", () => {
      els.form.reset();
      els.jobTitle.value = "Data Scientist";
      els.industry.value = "Technology";
      els.seniority.value = "Entry";
      els.years.value = "1";
      els.offer.value = "3500";
      els.description.value = "Build models, analyse product data, write Python and SQL, work with stakeholders, deploy machine learning features, experiment with generative AI workflows.";
      runBenchmark();
    });

    document.querySelectorAll("[data-window]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-window]").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        state.pulseWindow = Number(button.dataset.window);
        renderPulse();
      });
    });

    els.hotIndustryFilter.addEventListener("change", renderHotOffers);
    els.hotSeniorityFilter.addEventListener("change", renderHotOffers);
    els.companySearch.addEventListener("input", renderCompanies);
    els.appendCsv.addEventListener("click", () => importCsv("append"));
    els.replaceCsv.addEventListener("click", () => importCsv("replace"));
    els.csvFile.addEventListener("change", handleFile);
    els.downloadDataset.addEventListener("click", () => downloadText("fairoffer-active-dataset.csv", toCsv(state.data)));
    els.downloadReport.addEventListener("click", downloadReport);
    els.copyDraft.addEventListener("click", copyDraft);
  }

  async function loadBundledDataset() {
    try {
      const response = await fetch(bundledDatasetPath, { cache: "no-store" });
      if (!response.ok) return;

      const text = await response.text();
      const rows = parseCsv(text).map(normalizeImportedRow).filter(Boolean);
      if (!rows.length) return;

      state.data = rows;
      els.importStatus.textContent = "Loaded " + rows.length + " MyCareersFuture rows from bundled CSV.";
      updateDatasetViews();
      runBenchmark();
    } catch (error) {
      // Opening index.html directly may block local file fetches; manual CSV import still works.
    }
  }

  function activateTab(tabName) {
    els.tabs.forEach((button) => button.classList.toggle("is-active", button.dataset.tab === tabName));
    els.views.forEach((view) => view.classList.toggle("is-active", view.id === tabName));
    history.replaceState(null, "", "#" + tabName);
  }

  function buildSeedData() {
    const rows = [];
    archetypes.forEach((role, roleIndex) => {
      const relevantCompanies = companyProfiles
        .filter((profile) => profile.industry === role.industry || profile.industry === "Technology" || role.industry === "Technology")
        .slice(0, 5);

      relevantCompanies.forEach((profile, profileIndex) => {
        const levelShift = profileIndex % 3 === 0 ? 0 : profileIndex % 3 === 1 ? 0.06 : -0.04;
        const level = shiftSeniority(role.seniority, profileIndex % 4 === 3 ? 1 : 0);
        const multiplier = profile.multiplier + levelShift + seniorityPremium(level);
        const min = roundHundred(role.min * multiplier);
        const max = roundHundred(role.max * multiplier);
        const postedDaysAgo = 8 + ((roleIndex * 11 + profileIndex * 7) % 150);
        rows.push({
          id: "seed-" + roleIndex + "-" + profileIndex,
          title: profileIndex % 4 === 3 ? level + " " + role.title : role.title,
          family: role.family,
          company: profile.company,
          industry: profile.industry === "Technology" ? role.industry : profile.industry,
          seniority: level,
          min,
          max,
          skills: role.skills,
          description: role.description,
          location: profile.location,
          source: "Seed benchmark",
          posted: daysAgo(postedDaysAgo)
        });
      });
    });
    return rows;
  }

  function fillSelect(select, values) {
    select.innerHTML = "";
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.append(option);
    });
  }

  function renderExamples() {
    els.exampleChips.innerHTML = "";
    examples.forEach((example) => {
      const button = document.createElement("button");
      button.className = "chip";
      button.type = "button";
      button.textContent = example.label;
      button.addEventListener("click", () => {
        els.jobTitle.value = example.title;
        els.industry.value = example.industry;
        els.seniority.value = example.seniority;
        els.years.value = String(example.years);
        els.offer.value = String(example.offer);
        els.description.value = example.description;
        runBenchmark();
      });
      els.exampleChips.append(button);
    });
  }

  async function runBenchmark() {
    const input = getInput();
    const requestId = ++state.liveRequestId;
    if (els.liveStatus) {
      els.liveStatus.textContent = liveApiEndpoint ? "Searching live MyCareersFuture listings..." : "Using local MyCareersFuture snapshot.";
    }

    const liveResult = await fetchLiveRows(input);
    if (requestId !== state.liveRequestId) return;

    const candidates = liveResult.rows.length ? mergeListings(liveResult.rows, state.data) : state.data;
    const ranked = rankListings(input, candidates);
    const usableMatches = ranked.filter((item) => item.score >= 24).slice(0, 24);
    const stats = buildStats(usableMatches, input);
    state.lastResult = { input, ranked: usableMatches, stats, liveResult };
    renderResult(state.lastResult);
  }

  function getInput() {
    return {
      title: els.jobTitle.value.trim(),
      industry: els.industry.value,
      seniority: els.seniority.value,
      years: Number(els.years.value || 0),
      company: els.company.value.trim(),
      description: els.description.value.trim(),
      offer: Number(els.offer.value || 0),
      bonus: Number(els.bonus.value || 0),
      equity: Number(els.equity.value || 0),
      allowance: Number(els.allowance.value || 0)
    };
  }

  async function fetchLiveRows(input) {
    if (!liveApiEndpoint || !input.title) {
      return { rows: [], mode: "snapshot" };
    }

    try {
      const url = new URL(liveApiEndpoint, window.location.href);
      url.searchParams.set("role", input.title);
      url.searchParams.set("limit", "100");
      url.searchParams.set("pages", "3");

      const response = await fetch(url.toString(), { cache: "no-store" });
      if (!response.ok) throw new Error("Live search returned " + response.status);

      const payload = await response.json();
      const rows = (payload.results || []).map(normalizeImportedRow).filter(Boolean);
      return { rows, mode: "live", total: payload.total || 0 };
    } catch (error) {
      return { rows: [], mode: "fallback", error: error.message };
    }
  }

  function mergeListings(primary, secondary) {
    const seen = new Set();
    return primary.concat(secondary).filter((row) => {
      const key = row.url || row.source || [row.title, row.company, row.posted].join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function rankListings(input, rows = state.data) {
    const titleTokens = expandTokens(tokenize(input.title));
    const descTokens = expandTokens(tokenize(input.description));
    const companyTokens = expandTokens(tokenize(input.company));
    const seniorityGuess = seniorityFromYears(input.years);

    return rows
      .map((listing) => {
        const listingTitleTokens = expandTokens(tokenize(listing.title + " " + listing.family));
        const listingBodyTokens = expandTokens(tokenize(listing.description + " " + listing.skills.join(" ")));
        const companyScore = companyTokens.length ? overlap(companyTokens, tokenize(listing.company)) : 0.6;
        const titleScore = overlap(titleTokens, listingTitleTokens);
        const descScore = overlap(descTokens, listingBodyTokens);
        const industryScore = input.industry === "All industries" || input.industry === listing.industry ? 1 : 0.35;
        const seniorityScore = input.seniority === "Any level" ? seniorityCloseness(seniorityGuess, listing.seniority) : seniorityCloseness(input.seniority, listing.seniority);
        const freshnessScore = freshness(listing.posted);
        const score = Math.round(100 * (
          titleScore * 0.34 +
          descScore * 0.3 +
          seniorityScore * 0.16 +
          industryScore * 0.1 +
          companyScore * 0.05 +
          freshnessScore * 0.05
        ));
        return { ...listing, score };
      })
      .sort((a, b) => b.score - a.score || midpoint(b) - midpoint(a));
  }

  function buildStats(matches, input) {
    if (!matches.length) {
      return {
        p10: null,
        p25: null,
        p50: null,
        p75: null,
        p90: null,
        offerPercentile: null,
        confidence: 0,
        totalAnnual: annualValue(input.offer, input.bonus, input.equity, input.allowance),
        verdict: {
          title: "Not enough matching evidence",
          subtitle: "The current dataset has no close salary rows for this role. Treat the result as low coverage, not as a market benchmark.",
          label: "Low coverage",
          tone: "watch"
        },
        points: [],
        noData: true
      };
    }

    const points = matches.flatMap((item) => [item.min, midpoint(item), item.max]).sort((a, b) => a - b);
    const p10 = percentile(points, 10);
    const p25 = percentile(points, 25);
    const p50 = percentile(points, 50);
    const p75 = percentile(points, 75);
    const p90 = percentile(points, 90);
    const offerPercentile = input.offer ? percentileRank(points, input.offer) : null;
    const confidence = confidenceScore(matches);
    const totalAnnual = annualValue(input.offer, input.bonus, input.equity, input.allowance);
    const verdict = classify(input.offer, p25, p50, p75, offerPercentile);
    return { p10, p25, p50, p75, p90, offerPercentile, confidence, totalAnnual, verdict, points };
  }

  function renderResult(result) {
    const { input, ranked, stats } = result;
    els.resultEmpty.hidden = true;
    els.resultContent.hidden = false;

    els.verdictTitle.textContent = stats.verdict.title;
    els.verdictSubtitle.textContent = stats.verdict.subtitle;
    els.verdictPill.textContent = stats.verdict.label;
    els.verdictPill.className = "verdict-pill " + stats.verdict.tone;

    els.medianMetric.textContent = stats.noData ? "No match" : money(stats.p50);
    els.percentileMetric.textContent = stats.noData ? "-" : stats.offerPercentile === null ? "No offer" : Math.round(stats.offerPercentile) + "th";
    els.percentileNote.textContent = ranked.length + " matched roles";
    els.askMetric.textContent = stats.noData ? "-" : money(stats.p50) + "-" + money(stats.p75);
    els.annualMetric.textContent = input.offer ? money(stats.totalAnnual) : "-";
    els.annualNote.textContent = input.offer ? "Includes " + input.bonus + " month bonus" : "Add an offer to calculate";
    els.confidenceBadge.textContent = stats.confidence + "% confidence";

    els.p10Label.textContent = stats.noData ? "P10 -" : "P10 " + money(stats.p10);
    els.p25Label.textContent = stats.noData ? "P25 -" : "P25 " + money(stats.p25);
    els.p50Label.textContent = stats.noData ? "P50 -" : "P50 " + money(stats.p50);
    els.p75Label.textContent = stats.noData ? "P75 -" : "P75 " + money(stats.p75);
    els.p90Label.textContent = stats.noData ? "P90 -" : "P90 " + money(stats.p90);
    renderMarker(input.offer, stats);
    renderInsightStrip(result);
    renderRisk(result);
    renderScenarios(result);
    renderMatches(ranked, stats);
    els.negotiationDraft.value = buildNegotiationDraft(result);
    els.evidenceSummary.textContent = ranked.length + " similar roles, sorted by fit score. Seed rows can be replaced with imported MyCareersFuture or internal compensation data.";
    renderLiveStatus(result);
  }

  function renderInsightStrip(result) {
    const { ranked, liveResult } = result;
    const importedRows = state.data.filter((row) => row.source !== "Seed benchmark").length;
    const freshness = freshnessBreakdown(ranked);
    const liveRows = liveResult && liveResult.rows ? liveResult.rows.length : 0;
    els.dataModeMetric.textContent = liveRows ? "Live + snapshot" : importedRows ? "Imported + seed" : "Seed data";
    els.dataModeNote.textContent = liveRows
      ? liveRows + " live MCF rows were blended with the local snapshot."
      : importedRows
        ? importedRows + " imported rows are included in the benchmark."
        : "Replace or append CSV rows before citing this publicly.";
    els.freshnessMetric.textContent = freshness.recent + " recent / " + freshness.historical + " older";
    els.freshnessNote.textContent = freshness.recent
      ? "Recent evidence is weighted alongside older benchmarks."
      : "No recent evidence in this match set; treat the result as directional.";
  }

  function renderLiveStatus(result) {
    if (!els.liveStatus) return;
    const liveResult = result.liveResult || { rows: [], mode: "snapshot" };
    if (liveResult.rows && liveResult.rows.length) {
      els.liveStatus.textContent = "Live MyCareersFuture search added " + liveResult.rows.length + " role-specific rows.";
    } else if (liveResult.mode === "fallback") {
      els.liveStatus.textContent = "Live search unavailable; using local MyCareersFuture snapshot.";
    } else {
      els.liveStatus.textContent = "Using local MyCareersFuture snapshot.";
    }
  }

  function renderMarker(offer, stats) {
    if (!offer || stats.noData) {
      els.offerMarker.hidden = true;
      return;
    }
    els.offerMarker.hidden = false;
    const lower = stats.p10 || offer * 0.7;
    const upper = stats.p90 || offer * 1.3;
    const position = clamp(((offer - lower) / Math.max(upper - lower, 1)) * 100, 0, 100);
    els.offerMarker.style.setProperty("--marker-left", position + "%");
  }

  function renderRisk(result) {
    const { input, stats, ranked } = result;
    const items = [];
    if (stats.noData) {
      els.riskList.innerHTML = `
        <article class="risk-item watch">
          <strong>Coverage gap</strong>
          <span>No close evidence rows were found. Use a broader title, choose a more specific industry, or wait for the broader scheduled dataset refresh.</span>
        </article>
      `;
      return;
    }

    if (input.offer) {
      const gapToMedian = input.offer - stats.p50;
      const gapToP25 = input.offer - stats.p25;
      items.push({
        tone: gapToMedian >= 0 ? "good" : gapToP25 >= 0 ? "watch" : "low",
        title: gapToMedian >= 0 ? "Base salary clears median" : "Base salary trails median",
        body: gapToMedian >= 0
          ? "The monthly base is " + money(Math.abs(gapToMedian)) + " above the matched P50."
          : "The monthly base is " + money(Math.abs(gapToMedian)) + " below the matched P50."
      });
      items.push({
        tone: gapToP25 >= 0 ? "good" : "low",
        title: gapToP25 >= 0 ? "Offer is not below P25" : "Offer sits below the low-end benchmark",
        body: gapToP25 >= 0
          ? "That reduces lowball risk, though total compensation still matters."
          : "It is " + money(Math.abs(gapToP25)) + " below P25, so ask for the salary band rationale."
      });
    } else {
      items.push({
        tone: "watch",
        title: "No offer entered",
        body: "Use the median and P75 as a target range, then add bonus and equity details when available."
      });
    }

    items.push({
      tone: stats.confidence >= 75 ? "good" : stats.confidence >= 55 ? "watch" : "low",
      title: "Match confidence is " + stats.confidence + "%",
      body: "Top roles share " + commonSkills(ranked).slice(0, 5).join(", ") + ". Add a fuller JD or import more listings to sharpen the range."
    });

    items.push({
      tone: ranked.length >= 18 ? "good" : "watch",
      title: ranked.length + " evidence rows in the comparison",
      body: ranked.length >= 18
        ? "Coverage is healthy enough for a directional benchmark."
        : "Treat this as a first-pass signal and import more current listings for higher confidence."
    });

    items.push({
      tone: "watch",
      title: "Posted salary bands are not guaranteed offers",
      body: "Treat listed ranges as evidence, not a promise. Final offers can land 10-20% lower depending on level, approval bands, and total compensation mix."
    });

    els.riskList.innerHTML = items.map((item) => `
      <div class="risk-item">
        <span class="risk-dot ${item.tone}"></span>
        <div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.body)}</p></div>
      </div>
    `).join("");
  }

  function renderScenarios(result) {
    const { input, stats } = result;
    if (stats.noData) {
      els.scenarioTable.innerHTML = `
        <div class="scenario-row">
          <div><strong>No counter range yet</strong><span>Need closer evidence rows before calculating a suggested ask.</span></div>
          <b>-</b>
        </div>
      `;
      return;
    }

    const rows = [
      { label: "Current offer", monthly: input.offer || stats.p50, note: input.offer ? "As entered" : "No offer entered" },
      { label: "Market median", monthly: stats.p50, note: "Matched P50 base" },
      { label: "Solid counter", monthly: stats.p75, note: "Matched P75 base" },
      { label: "Stretch ask", monthly: Math.max(stats.p75, stats.p90 * 0.96), note: "Near top quartile" }
    ];
    els.scenarioTable.innerHTML = rows.map((row) => {
      const annual = annualValue(row.monthly, input.bonus, input.equity, input.allowance);
      return `
        <div class="scenario-row">
          <div><strong>${escapeHtml(row.label)}</strong><span>${escapeHtml(row.note)} - ${money(row.monthly)}/mo</span></div>
          <b>${money(annual)}</b>
        </div>
      `;
    }).join("");
  }

  function renderMatches(matches) {
    const template = document.getElementById("matchTemplate");
    els.matchList.innerHTML = "";
    if (!matches.length) {
      els.matchList.innerHTML = `
        <article class="match-card">
          <div>
            <h4>No close evidence rows</h4>
            <p>The loaded dataset does not yet contain roles close enough to this title and description.</p>
            <div class="tag-row"><span class="tag benchmark">Low coverage</span></div>
          </div>
          <div class="match-pay">
            <strong>-</strong>
            <span>0% fit</span>
            <small>Refresh the broad MCF dataset for better coverage.</small>
          </div>
        </article>
      `;
      return;
    }

    matches.slice(0, 9).forEach((match) => {
      const node = template.content.cloneNode(true);
      node.querySelector("h4").textContent = match.title;
      node.querySelector("p").textContent = match.company + " - " + match.industry + " - " + match.location;
      const tagRow = node.querySelector(".tag-row");
      [match.seniority, match.family, ...match.skills.slice(0, 4)].forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.className = "tag";
        tagEl.textContent = tag;
        tagRow.append(tagEl);
      });
      const statusEl = document.createElement("span");
      statusEl.className = "tag " + listingStatus(match).tone;
      statusEl.textContent = listingStatus(match).label;
      tagRow.append(statusEl);
      node.querySelector(".match-pay strong").textContent = money(match.min) + "-" + money(match.max);
      node.querySelector(".match-pay span").textContent = match.score + "% fit";
      node.querySelector(".match-pay small").textContent = match.source + " - posted " + match.posted + " - " + ageDays(match.posted) + "d old";
      els.matchList.append(node);
    });
  }

  function buildNegotiationDraft(result) {
    const { input, stats, ranked } = result;
    if (stats.noData) {
      return [
        "Hi " + (input.company || "the team") + ",",
        "",
        "Thank you again for the offer and for the conversations so far. I am excited about the scope of " + (input.title || "the role") + " and the chance to contribute.",
        "",
        "I am still gathering role-specific salary evidence for this scope. Before I anchor on a number, would you be open to sharing the approved salary band and how the offer was calibrated against the role requirements?",
        "",
        "That would help me compare the package fairly across base salary, bonus, benefits, flexibility, and growth expectations."
      ].join("\n");
    }

    const targetLow = roundHundred(stats.p50);
    const targetHigh = roundHundred(stats.p75);
    const role = input.title || "the role";
    const company = input.company || "the team";
    const offerLine = input.offer ? "The current monthly base offer is " + money(input.offer) + "." : "I would like to align on the monthly base range before moving forward.";
    const skills = commonSkills(ranked).slice(0, 4).join(", ");
    return [
      "Hi " + company + ",",
      "",
      "Thank you again for the offer and for the conversations so far. I am excited about the scope of " + role + " and the chance to contribute.",
      "",
      offerLine + " I benchmarked similar Singapore roles against responsibilities such as " + skills + ". The matched market range suggests a monthly base around " + money(targetLow) + " to " + money(targetHigh) + ", with the median at " + money(stats.p50) + ".",
      "",
      "Would you be open to revising the monthly base to " + money(targetHigh) + ", or sharing the salary band constraints so we can find a package that better reflects the role scope and market data?",
      "",
      "I appreciate your consideration and am happy to discuss the full package, including bonus, benefits, flexibility, and growth expectations."
    ].join("\n");
  }

  function copyDraft() {
    const text = els.negotiationDraft.value;
    navigator.clipboard.writeText(text).then(() => {
      els.copyDraft.textContent = "Copied";
      setTimeout(() => {
        els.copyDraft.textContent = "Copy";
      }, 1500);
    }).catch(() => {
      els.copyDraft.textContent = "Select text";
      setTimeout(() => {
        els.copyDraft.textContent = "Copy";
      }, 1500);
    });
  }

  function downloadReport() {
    if (!state.lastResult) return;
    const report = {
      generatedAt: new Date().toISOString(),
      input: state.lastResult.input,
      stats: state.lastResult.stats,
      topMatches: state.lastResult.ranked.slice(0, 12)
    };
    downloadText("fairoffer-report.json", JSON.stringify(report, null, 2));
  }

  function updateDatasetViews() {
    els.datasetCount.textContent = state.data.length + " fallback rows";
    renderPulse();
    renderHotOffers();
    renderCompanies();
    renderDataHealth();
  }

  function renderPulse() {
    const recent = state.data.filter((row) => ageDays(row.posted) <= state.pulseWindow);
    const data = recent.length ? recent : state.data;
    const industryGroups = groupBy(data, "industry")
      .map(([industry, rows]) => ({ industry, median: median(rows.map(midpoint)), count: rows.length }))
      .sort((a, b) => b.median - a.median);
    const maxMedian = Math.max(...industryGroups.map((row) => row.median), 1);
    els.industryChart.innerHTML = industryGroups.map((row) => `
      <div class="bar-row">
        <span>${escapeHtml(row.industry)}</span>
        <div class="bar-track"><div class="bar-fill" style="width: ${Math.max(8, row.median / maxMedian * 100)}%"></div></div>
        <span>${money(row.median)} P50</span>
      </div>
    `).join("");

    const seniorityGroups = groupBy(data, "seniority")
      .map(([level, rows]) => ({ level, median: median(rows.map(midpoint)), count: rows.length }))
      .sort((a, b) => seniorityOrder.indexOf(a.level) - seniorityOrder.indexOf(b.level));
    els.seniorityChart.innerHTML = seniorityGroups.map((row) => `
      <div class="ladder-item">
        <div><strong>${escapeHtml(row.level)}</strong><span>${row.count} listings</span></div>
        <strong>${money(row.median)}</strong>
      </div>
    `).join("");

    const roleGroups = groupBy(data, "family")
      .map(([family, rows]) => ({ family, count: rows.length }))
      .sort((a, b) => b.count - a.count);
    els.roleChart.innerHTML = roleGroups.map((row) => {
      const size = clamp(12 + row.count * 1.4, 13, 24);
      return `<span style="font-size:${size}px">${escapeHtml(row.family)} ${row.count}</span>`;
    }).join("");
  }

  function renderHotOffers() {
    const industry = els.hotIndustryFilter.value || "All industries";
    const seniority = els.hotSeniorityFilter.value || "Any level";
    const filtered = state.data.filter((row) => {
      const industryOk = industry === "All industries" || row.industry === industry;
      const seniorityOk = seniority === "Any level" || row.seniority === seniority;
      return industryOk && seniorityOk;
    });

    const ranked = filtered
      .map((row) => {
        const baseline = peerBaseline(row);
        const premium = baseline ? ((midpoint(row) - baseline) / baseline) * 100 : 0;
        return { ...row, baseline, premium };
      })
      .filter((row) => row.premium > 4)
      .sort((a, b) => b.premium - a.premium || midpoint(b) - midpoint(a))
      .slice(0, 24);

    if (!ranked.length) {
      els.hotOfferList.innerHTML = `
        <article class="analysis-card">
          <h3>No above-market rows found</h3>
          <p class="muted-copy">Try a broader filter or import more salary listings.</p>
        </article>
      `;
      return;
    }

    els.hotOfferList.innerHTML = ranked.map((row) => {
      const status = listingStatus(row);
      return `
        <article class="hot-card">
          <div>
            <div class="hot-card-title">
              <h3>${escapeHtml(row.title)}</h3>
              <span class="premium-pill">+${Math.round(row.premium)}%</span>
            </div>
            <p>${escapeHtml(row.company)} - ${escapeHtml(row.industry)} - ${escapeHtml(row.location)}</p>
            <div class="tag-row">
              <span class="tag">${escapeHtml(row.seniority)}</span>
              <span class="tag">${escapeHtml(row.family)}</span>
              <span class="tag ${status.tone}">${escapeHtml(status.label)}</span>
            </div>
          </div>
          <div class="hot-pay">
            <strong>${money(row.min)}-${money(row.max)}</strong>
            <span>Peer median ${money(row.baseline)}</span>
            <small>${escapeHtml(row.source)} - ${ageDays(row.posted)}d old</small>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderCompanies() {
    const query = els.companySearch.value.trim().toLowerCase();
    const groups = groupBy(state.data, "company")
      .map(([company, rows]) => {
        const titles = Array.from(new Set(rows.map((row) => row.title.replace(/^(Senior|Lead|Junior|Entry)\s+/, "")))).slice(0, 4);
        return {
          company,
          rows,
          count: rows.length,
          median: median(rows.map(midpoint)),
          range: [Math.min(...rows.map((row) => row.min)), Math.max(...rows.map((row) => row.max))],
          industries: Array.from(new Set(rows.map((row) => row.industry))).slice(0, 3),
          titles
        };
      })
      .filter((group) => !query || group.company.toLowerCase().includes(query))
      .sort((a, b) => b.count - a.count || b.median - a.median);

    els.companyGrid.innerHTML = groups.map((group) => `
      <article class="company-card">
        <div>
          <h3>${escapeHtml(group.company)}</h3>
          <p>${escapeHtml(group.industries.join(", "))}</p>
        </div>
        <div class="company-stats">
          <div><span>Listings</span><strong>${group.count}</strong></div>
          <div><span>Median</span><strong>${money(group.median)}</strong></div>
        </div>
        <p>${escapeHtml(group.titles.join(" - "))}</p>
        <div class="tag-row">
          <span class="tag">${money(group.range[0])}-${money(group.range[1])}</span>
          <span class="tag">Monthly base</span>
        </div>
      </article>
    `).join("");
  }

  function renderDataHealth() {
    const groups = groupBy(state.data, "industry");
    const seniorityGroups = groupBy(state.data, "seniority");
    const missing = state.data.filter((row) => !row.title || !row.company || !row.min || !row.max).length;
    const freshness = freshnessBreakdown(state.data);
    const minPosted = state.data.map((row) => ageDays(row.posted)).sort((a, b) => a - b)[0] || 0;
    const maxPosted = state.data.map((row) => ageDays(row.posted)).sort((a, b) => b - a)[0] || 0;
    const health = [
      ["Rows loaded", state.data.length],
      ["Industries covered", groups.length],
      ["Seniority levels", seniorityGroups.length],
      ["Recent rows", freshness.recent],
      ["Older rows", freshness.historical],
      ["Missing critical fields", missing],
      ["Posting age spread", minPosted + "-" + maxPosted + " days"]
    ];
    els.dataHealth.innerHTML = health.map(([label, value]) => `
      <div class="health-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>
    `).join("");
  }

  function importCsv(mode) {
    const text = els.csvInput.value.trim();
    if (!text) {
      els.importStatus.textContent = "Paste CSV rows first, or upload a file.";
      return;
    }
    try {
      const rows = parseCsv(text).map(normalizeImportedRow).filter(Boolean);
      if (!rows.length) throw new Error("No valid rows found.");
      state.data = mode === "replace" ? rows : [...state.data, ...rows];
      els.importStatus.textContent = (mode === "replace" ? "Replaced" : "Appended") + " " + rows.length + " rows.";
      updateDatasetViews();
      runBenchmark();
    } catch (error) {
      els.importStatus.textContent = "Import failed: " + error.message;
    }
  }

  function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      els.csvInput.value = String(reader.result || "");
      els.importStatus.textContent = "Loaded " + file.name + ". Choose append or replace.";
    };
    reader.readAsText(file);
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let quoted = false;
    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const next = text[i + 1];
      if (char === '"' && quoted && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        row.push(field.trim());
        field = "";
      } else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") i += 1;
        row.push(field.trim());
        if (row.some(Boolean)) rows.push(row);
        row = [];
        field = "";
      } else {
        field += char;
      }
    }
    row.push(field.trim());
    if (row.some(Boolean)) rows.push(row);
    if (rows.length < 2) throw new Error("CSV needs a header and at least one row.");
    const headers = rows[0].map((header) => header.toLowerCase().trim());
    return rows.slice(1).map((cells) => {
      const record = {};
      headers.forEach((header, index) => {
        record[header] = cells[index] || "";
      });
      return record;
    });
  }

  function normalizeImportedRow(row, index) {
    const title = row.title || row.job_title || row.role;
    const company = row.company || row.employer || "Imported employer";
    const min = Number(row.min || row.salary_min || row.minimum || row.from);
    const max = Number(row.max || row.salary_max || row.maximum || row.to);
    if (!title || !min || !max) return null;
    return {
      id: "import-" + Date.now() + "-" + index,
      title,
      family: row.family || inferFamily(title),
      company,
      industry: row.industry || "Technology",
      seniority: normalizeSeniority(row.seniority || row.level || "Mid"),
      min,
      max,
      skills: String(row.skills || "").split(/[|;]/).map((skill) => skill.trim()).filter(Boolean),
      description: row.description || row.jd || row.summary || title,
      location: row.location || "Singapore",
      source: row.source || "Imported CSV",
      posted: row.posted || todayIso(),
      url: row.url || ""
    };
  }

  function toCsv(rows) {
    const headers = ["title", "company", "industry", "seniority", "min", "max", "skills", "description", "location", "source", "posted", "url"];
    return [headers.join(",")]
      .concat(rows.map((row) => headers.map((header) => csvCell(Array.isArray(row[header]) ? row[header].join(";") : row[header])).join(",")))
      .join("\n");
  }

  function tokenize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s+.-]/g, " ")
      .split(/\s+/)
      .map((item) => item.trim())
      .filter((item) => item.length > 1 && !stopwords.has(item));
  }

  function expandTokens(tokens) {
    const set = new Set(tokens);
    tokens.forEach((token) => {
      synonymGroups.forEach((group) => {
        if (group.includes(token)) group.forEach((item) => set.add(item));
      });
    });
    return Array.from(set);
  }

  function overlap(a, b) {
    if (!a.length || !b.length) return 0;
    const bSet = new Set(b);
    const hits = a.filter((item) => bSet.has(item)).length;
    return clamp(hits / Math.sqrt(a.length * b.length), 0, 1);
  }

  function seniorityCloseness(a, b) {
    const ai = seniorityOrder.indexOf(normalizeSeniority(a));
    const bi = seniorityOrder.indexOf(normalizeSeniority(b));
    if (ai < 0 || bi < 0) return 0.6;
    return clamp(1 - Math.abs(ai - bi) * 0.2, 0.2, 1);
  }

  function seniorityFromYears(years) {
    if (years < 0.5) return "Entry";
    if (years < 2) return "Junior";
    if (years < 5) return "Mid";
    if (years < 8) return "Senior";
    if (years < 12) return "Lead";
    return "Manager";
  }

  function normalizeSeniority(value) {
    const text = String(value || "").toLowerCase();
    if (text.includes("intern")) return "Intern";
    if (text.includes("entry") || text.includes("graduate") || text.includes("fresh")) return "Entry";
    if (text.includes("junior") || text.includes("associate")) return "Junior";
    if (text.includes("senior")) return "Senior";
    if (text.includes("lead") || text.includes("principal")) return "Lead";
    if (text.includes("manager")) return "Manager";
    if (text.includes("director") || text.includes("head")) return "Director";
    return seniorityOrder.includes(value) ? value : "Mid";
  }

  function shiftSeniority(level, shift) {
    const index = seniorityOrder.indexOf(level);
    if (index < 0) return level;
    return seniorityOrder[clamp(index + shift, 0, seniorityOrder.length - 1)];
  }

  function seniorityPremium(level) {
    const index = seniorityOrder.indexOf(level);
    if (index < 0) return 0;
    return (index - 2) * 0.035;
  }

  function inferFamily(title) {
    const text = title.toLowerCase();
    if (text.includes("data")) return "Data";
    if (text.includes("ai") || text.includes("machine")) return "AI";
    if (text.includes("software") || text.includes("engineer")) return "Engineering";
    if (text.includes("product")) return "Product";
    if (text.includes("marketing")) return "Marketing";
    if (text.includes("finance")) return "Finance";
    if (text.includes("security") || text.includes("cyber")) return "Security";
    return "General";
  }

  function commonSkills(matches) {
    const counts = new Map();
    matches.forEach((match) => {
      match.skills.forEach((skill) => counts.set(skill, (counts.get(skill) || 0) + 1));
    });
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).map(([skill]) => skill);
  }

  function peerBaseline(row) {
    const sameFamilyLevel = state.data.filter((peer) => peer.id !== row.id && peer.family === row.family && peer.seniority === row.seniority);
    const sameFamily = state.data.filter((peer) => peer.id !== row.id && peer.family === row.family);
    const sameIndustry = state.data.filter((peer) => peer.id !== row.id && peer.industry === row.industry);
    const peers = sameFamilyLevel.length >= 3 ? sameFamilyLevel : sameFamily.length >= 3 ? sameFamily : sameIndustry;
    return peers.length ? median(peers.map(midpoint)) : midpoint(row);
  }

  function listingStatus(row) {
    const days = ageDays(row.posted);
    if (days <= 45) return { label: "Recent", tone: "recent" };
    if (days <= 120) return { label: "Benchmark", tone: "benchmark" };
    return { label: "Older", tone: "historical" };
  }

  function freshnessBreakdown(rows) {
    return rows.reduce((counts, row) => {
      if (ageDays(row.posted) <= 45) counts.recent += 1;
      else counts.historical += 1;
      return counts;
    }, { recent: 0, historical: 0 });
  }

  function classify(offer, p25, p50, p75, rank) {
    if (!offer) {
      return {
        title: "Market map ready",
        subtitle: "Use the median and upper quartile to anchor your expected range before you share a number.",
        label: "No offer entered",
        tone: "watch"
      };
    }
    if (offer < p25) {
      return {
        title: "Likely lowball",
        subtitle: "The offer is below the matched P25 salary point. Ask for the salary band rationale and counter with evidence.",
        label: Math.round(rank) + "th percentile",
        tone: "low"
      };
    }
    if (offer < p50) {
      return {
        title: "Below market",
        subtitle: "The offer clears the low-end range but is still below median for similar Singapore roles.",
        label: Math.round(rank) + "th percentile",
        tone: "watch"
      };
    }
    if (offer < p75) {
      return {
        title: "Fair, with room to negotiate",
        subtitle: "The base is around market, but P75 gives you a credible counter if your fit is strong.",
        label: Math.round(rank) + "th percentile",
        tone: "good"
      };
    }
    return {
      title: "Strong offer",
      subtitle: "The monthly base is in the upper quartile of similar roles. Compare bonus, equity, flexibility, and growth path next.",
      label: Math.round(rank) + "th percentile",
      tone: "good"
    };
  }

  function confidenceScore(matches) {
    if (!matches.length) return 0;
    const avgTop = matches.slice(0, 8).reduce((sum, item) => sum + item.score, 0) / Math.min(matches.length, 8);
    const countFactor = clamp(matches.length / 24, 0.25, 1);
    return Math.round(clamp(avgTop * 0.72 + countFactor * 28, 25, 96));
  }

  function freshness(dateText) {
    const days = ageDays(dateText);
    if (days <= 30) return 1;
    if (days <= 90) return 0.82;
    if (days <= 180) return 0.64;
    return 0.45;
  }

  function ageDays(dateText) {
    const date = new Date(dateText);
    if (Number.isNaN(date.getTime())) return 999;
    return Math.max(0, Math.round((Date.now() - date.getTime()) / 86400000));
  }

  function percentile(values, p) {
    if (!values.length) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    const index = (p / 100) * (sorted.length - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    if (lower === upper) return sorted[lower];
    return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower);
  }

  function percentileRank(values, value) {
    if (!values.length) return 0;
    const below = values.filter((item) => item <= value).length;
    return clamp((below / values.length) * 100, 0, 100);
  }

  function median(values) {
    return percentile(values, 50);
  }

  function midpoint(row) {
    return (Number(row.min) + Number(row.max)) / 2;
  }

  function annualValue(monthly, bonusMonths, equity, allowance) {
    return Math.round((monthly * (12 + bonusMonths)) + Number(equity || 0) + (Number(allowance || 0) * 12));
  }

  function groupBy(rows, key) {
    const groups = new Map();
    rows.forEach((row) => {
      const value = row[key] || "Unknown";
      if (!groups.has(value)) groups.set(value, []);
      groups.get(value).push(row);
    });
    return Array.from(groups.entries());
  }

  function money(value) {
    return "$" + Math.round(Number(value || 0)).toLocaleString("en-SG");
  }

  function roundHundred(value) {
    return Math.round(Number(value || 0) / 100) * 100;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function daysAgo(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().slice(0, 10);
  }

  function todayIso() {
    return new Date().toISOString().slice(0, 10);
  }

  function csvCell(value) {
    const text = String(value ?? "");
    if (/[",\n]/.test(text)) return '"' + text.replace(/"/g, '""') + '"';
    return text;
  }

  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}());
