import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gurmeet Padda — Agile Project Manager",
  author: "Gurmeet Padda",
  description:
    "Agile Project Manager | Delivery Operations | Global Client Management | AI Orchestration",
  lang: "en",
  siteLogo: "/gurmeet.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/gurry/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gurmeet Padda",
    specialty: "Agile Project Manager",
    summary:
      "Client-facing Agile Project Manager with nine years of experience at Accenture across global digital marketing projects, product launches, transitions, and service operations.",
    email: "gurmeetpadda@hotmail.co.uk",
  },
  experience: [
    {
      company: "Accenture",
      position: "Agile Project Manager",
      startDate: "Jan 2022",
      endDate: "Jan 2026",
      summary: [
        "Owned global digital marketing projects end to end, from planning through delivery, using Adobe Workfront as the primary project management tool.",
        "Aligned priorities with clients, managed change, and assigned work across Agile teams to meet schedule and budget commitments.",
        "Reviewed SLA reports by reporting interval and coordinated corrective action when delivery was at risk.",
        "Prepared weekly business review decks using KPI trends, bug reports, and root cause analyses.",
        "Managed internal and external audits and updated standard operating procedures and learning logs based on audit findings.",
      ],
    },
    {
      company: "Accenture",
      position: "Operations",
      startDate: "Jan 2019",
      endDate: "Dec 2021",
      summary: [
        "Managed attendance, leave, and team schedules for 20-24 people using CareBay and People Connect.",
        "Tracked performance by quartile, coached staff in the lowest quartile, and monitored performance improvement plans.",
        "Improved CSAT by 10% and reduced wait times through performance tracking and accountability measures.",
        "Used the Google LOVE and quality frameworks for assessments and NSAT audits, with Metrics Tracker, Hawk Tracker, and FMEA.",
      ],
    },
    {
      company: "Accenture",
      position: "Operations (Transitions)",
      startDate: "Jan 2017",
      endDate: "Dec 2018",
      summary: [
        "Coordinated product launches and operational transitions across Engineering, Operations, and Quality.",
        "Aligned requirements, streamlined workflows, and supported user adoption.",
        "Gathered and analyzed user feedback to guide product enhancements and improve customer satisfaction.",
      ],
    },
    {
      company: "Dell International",
      position: "Technical Support",
      startDate: "Mar 2009",
      endDate: "Oct 2010",
      summary:
        "Provided technical support to US customers and identified opportunities to upsell Dell products.",
    },
  ],
  projects: [
    {
      name: "BillBuddy AI Case Study",
      summary:
        "Designed a six-agent investigation into a subscription cancellation spike, validating customer evidence and recommending a pause-flow repair before a price cut.",
      linkPreview: "/billbuddy/index.html",
      image: "/raja.png",
    },
    {
      name: "n8n AI Agent and Workflow Automation",
      summary:
        "Built AI agents and automated workflows with n8n, using agentic frameworks to break business questions into tasks for evidence gathering, analysis, and decision briefs.",
      image: "/raja.png",
    },
    {
      name: "Global Digital Marketing Delivery",
      summary:
        "Managed global digital marketing projects in Adobe Workfront, coordinating Agile delivery, SLAs, audits, client reviews, and operational improvements.",
      image: "/raja.png",
    },
  ],
  about: {
    description: `
      I am Gurmeet Padda, a client-facing Agile Project Manager with nine years at Accenture across digital marketing delivery, product launches, transitions, and service operations. I align stakeholders, prioritize deliverables, manage change, and keep teams focused on scope, timing, budget, and service levels.

      My core strengths include Adobe Workfront, Jira, Agile frameworks, stakeholder and change management, Excel, Power BI, SQL, Python, cloud technologies, user research, and competitive analysis. I am also developing practical AI experience by building n8n agents and automated workflows.
    `,
    image: "/gurmeet.png",
  },
};

// #5755ff
