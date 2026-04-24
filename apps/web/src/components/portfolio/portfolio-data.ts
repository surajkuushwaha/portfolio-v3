// @ts-nocheck
// Single source of truth for static portfolio content.

export const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "auto",
  "accent": "#00d76a",
  "font": "plex",
  "density": "compact",
  "fxMode": "off",
  "fxSize": 520,
  "fxIntensity": 0.08,
  "fxTrail": 0.24
}/*EDITMODE-END*/;

export const ACCENTS = ['#00d76a','#0070f3','#f97316','#a78bfa','#f43f5e','#ffffff'];

export const NAV_ITEMS: Array<[string, string]> = [
  ['about','about'],
  ['skills','skills'],
  ['experience','experience'],
  ['projects','projects'],
  ['now','now'],
  ['contact','contact'],
];

export const SECTION_IDS = ['about','skills','experience','projects','now','writing','education','contact'];

export const DATA = {
  name: "Suraj Kushwaha",
  handle: "surajkuushwaha",
  city: "Ahmedabad",
  initials: "SK",
  role: "SDE II",
  tagline: "Backend Architect · Agentic AI Systems at Scale",
  email: "work@surajkuushwaha.com",
  links: {
    github:   "https://github.com/surajkuushwaha",
    linkedin: "https://www.linkedin.com/in/surajkuushwaha/",
    x:        "https://x.com/surajkuushwaha",
    site:     "https://www.surajkuushwaha.com",
  },
  stats: [
    { v:"50", u:"M+", l:"Weekly requests handled",
      cap:"At CultureX: roughly 80 requests every second across production brand workflows.",
      hero:true, ic:"pulse" },
    { v:"200", u:"+", l:"Enterprise brands served",
      cap:"At CultureX: scaled a Day-0 MVP into a multi-tenant SaaS used by 200+ brands.",
      ic:"brands" },
    { v:"0", u:"", l:"Production downtime",
      cap:"At CultureX: 30+ enterprise database migrations completed without customer impact.",
      ic:"shield" },
    { v:"4", u:"yrs", l:"Shipping in production",
      cap:"Day-0 engineer at an IIM Ahmedabad-funded SaaS — from first commit to scale.",
      ic:"calendar" },
    { v:"₹", u:"", l:"Revenue-critical systems",
      cap:"Built billing, reporting, onboarding, and automation paths used by customers daily.",
      ic:"trend" },
  ],
  about: [
    "SDE II at an <a href='https://www.iima.ac.in/' target='_blank' rel='noreferrer'>IIM Ahmedabad</a>-funded B2B SaaS startup. Joined at Day 0, scaled it from a single MVP to 200+ brands processing 50M+ weekly requests. 30+ enterprise database migrations. Zero downtime.",
    "Now building Agentic AI workflows with <a href='https://www.langchain.com/langgraph' target='_blank' rel='noreferrer'>LangGraph</a>. My goal: bridge the gap between <code>50M</code> and <code>1B</code> requests.",
  ],
  now: [
    "Designing deterministic tool-calling for No-Touch Negotiation agents.",
    "Writing a Go service (Clipscript) that converts short-form video URLs to transcripts.",
    "Studying distributed tracing across multi-tenant event pipelines.",
  ],
  skills: [
    { cat:"Backend",       ic:"server",  human:"The code that powers every request",
      years:"4y", items:["Node.js","Express","TypeScript","Go","Core Java","Zod"], star:["TypeScript","Node.js"] },
    { cat:"Cloud & Infra", ic:"cloud",   human:"Keeping things online, fast, everywhere",
      years:"4y", items:["AWS","Lambda","SNS","SQS","EventBridge","Docker","CI/CD","Linux"], star:["AWS"] },
    { cat:"AI / ML",       ic:"spark",   human:"Building agents that think before they act",
      years:"1y", items:["LangGraph","Agentic AI","LLM Orchestration","Tool-Calling"], star:["LangGraph"] },
    { cat:"Databases",     ic:"db",      human:"Storing data safely across 200+ tenants",
      years:"4y", items:["MySQL","PostgreSQL","MongoDB","Sequelize"] },
    { cat:"Observability", ic:"gauge",   human:"Knowing what broke before customers do",
      years:"3y", items:["Prometheus","Grafana","Loki","Winston","PostHog"] },
    { cat:"Frontend",      ic:"browser", human:"When a feature needs a UI, I ship one",
      years:"2y", items:["React","Next.js","TailwindCSS"] },
  ],
  jobs: [
    {
      co: "CultureX Entertainment",
      url: "https://www.culturex.ai",
      when: "Jul 2022 — Present",
      roles: [
        { title:"SDE II",  span:"Dec 2024 — Present", note:"current" },
        { title:"SDE I",   span:"Jul 2022 — Dec 2024", note:"2.5 yrs" },
      ],
      bullets: [
        "Joined at <b>Day 0</b> and grew with the company — from single MVP to <b>200+ enterprise brands</b> processing <b>50M+ weekly requests</b> on AWS (EC2, Lambda, SQS, SNS, EventBridge).",
        "Architected the Campaign Report engine tracking and generating reports for <b>50,000+ posts/day</b> with real-time delivery for 200+ brands.",
        "Led <b>zero-downtime migration</b> of 30+ enterprise database environments into a unified, multi-tenant SaaS architecture.",
        "Reduced client onboarding from days to minutes via automated domain provisioning and UI whitelabeling.",
        "Built event-driven automation using EventBridge, SNS/SQS, and Lambda for real-time brand monitoring and cron workflows.",
        "Shifted the codebase from JavaScript to strict TypeScript with Zod validation, eliminating runtime crashes.",
        "Built Agentic AI workflows for No-Touch Negotiation using LangGraph with deterministic tool-calling and LLM orchestration.",
        "Implemented full observability with Prometheus, Grafana, and Loki for monitoring and alerting.",
      ],
    },
  ],
  projects: [
    {
      name: "Clipscript",
      when: "Apr 2026 — Present",
      url: "https://github.com/surajkuushwaha/clipscript",
      desc: "HTTP API that converts Instagram Reels and YouTube Shorts URLs into text transcripts. A Go Fiber service validates links, extracts audio with yt-dlp, streams it to Whisper (go-whisper in Docker or OpenAI), and returns transcripts with optional proxy pooling.",
      stack: ["Go","Fiber","Docker","yt-dlp","Whisper"],
      status: "active",
    },
    {
      name: "Open Read",
      when: "Jan 2025 — Feb 2025",
      url: "https://github.com/surajkuushwaha/open-read",
      desc: "A Chrome extension that lets you read articles and blogs across the web without signing up or logging in. Built for the open, frictionless web.",
      stack: ["TypeScript","Plasmo","React"],
      status: "shipped",
    },
  ],
  education: [
    { school: "Government Engineering College, Modasa", deg: "B.Tech, Computer Engineering · GTU", when: "2019 — 2022" },
    { school: "Ranchhodlal Chhotalal Technical Institute", deg: "Diploma, Computer Engineering · GTU", when: "2016 — 2019" },
  ],
};

export type PortfolioData = typeof DATA;
