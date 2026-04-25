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
      role: "SDE II",
      when: "Jul 2022 — Present",
      intro: "Joined as the very first engineer at a venture-backed B2B SaaS startup. No senior above me, no playbook — just a vision and an MVP. Four years later, I lead the engineering work for a platform serving 200+ enterprise brands.",
      journey: [
        {
          chapter: "01",
          title: "The Builder",
          span: "Jul 2022 — Dec 2024",
          tenure: "first 2.5 years",
          status: "shipped",
          arc: "From MVP to production-grade SaaS",
          shipped: [
            "Took the single-tenant MVP and rebuilt it into a multi-tenant platform that onboarded the first 100+ brands.",
            "Migrated 30+ enterprise database environments with <b>zero downtime</b> — every customer kept their data, nobody noticed.",
            "Shifted the entire codebase from loose JavaScript to strict TypeScript + Zod, killing the runtime-crash bug class.",
            "Built the Campaign Report engine — tracks <b>50,000+ posts/day</b> with real-time delivery to every brand on the platform.",
          ],
          learned: [
            "Reliability is a feature you sell, not a luxury you afford.",
            "How to refactor a moving train — you don't get a maintenance window when the customer is paying.",
            "Types aren't bureaucracy; they're the contract between you and your future self at 2am.",
          ],
        },
        {
          chapter: "02",
          title: "The Architect",
          span: "Dec 2024 — Present",
          tenure: "current",
          status: "leading",
          arc: "From writing code to defining how the team builds",
          note: "Title-wise I'm SDE II, but startups don't print formal lead titles. I'm not the one deciding what we build — that's product. I'm the one figuring out how. When management hands the team something complex, they look to me to break it down, align everyone on the approach, and clear the path so the team can execute.",
          shipped: [
            "Architected the platform's move to event-driven on AWS (EventBridge + SNS/SQS + Lambda) — now handles <b>50M+ weekly requests</b>.",
            "Led the rollout of Agentic AI workflows for <b>No-Touch Negotiation</b> using LangGraph with deterministic tool-calling and LLM orchestration.",
            "When management drops a complex initiative on the team, I break it down into shippable pieces and align everyone on the approach.",
            "Reduced client onboarding from days to minutes via automated domain provisioning and UI whitelabeling.",
            "Set up full observability — Prometheus, Grafana, Loki — so the team sees production before customers do.",
            "Take on the hardest pieces myself when the team is stretched — then turn them into patterns the rest of us can reuse.",
          ],
          learned: [
            "Leading the 'how' is different from leading the 'what' — my job is to make the path clear, not to choose the destination.",
            "Breaking down a complex problem for the team is itself the work. If only I can build it, I haven't designed it well enough.",
            "Trust is earned PR by PR. The title doesn't matter when the team already knows who to ask.",
            "AI agents are powerful, but determinism is what enterprises actually pay for.",
          ],
        },
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
