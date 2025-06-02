// -----------------------------------------------------------------------------
// toolkit.ts – central catalogue of AI tools showcased in the courses
// -----------------------------------------------------------------------------

export type Tool = {
  tag: string; // high‑level capability bucket (used for grouping)
  name: string; // marketing name of the product or feature
  icon: string; // filename in /public/icons, e.g. "clickup.svg"
  desc: string; // ✨ one‑liner focused on business value, <70 chars
};

export const toolkit: Tool[] = [
  // ─────────── Project / Time Management ───────────
  {
    tag: "Project Mgmt",
    name: "ClickUp AI",
    icon: "clickup.svg",
    desc: "Auto‑draft tasks, docs & OKRs.",
  },
  // ─────────── CRM / Sales ───────────
  {
    tag: "CRM / Sales",
    name: "Apollo.io",
    icon: "apollo.svg",
    desc: "50M contacts + AI email writer.",
  },
  {
    tag: "CRM / Sales",
    name: "Pipedrive AI",
    icon: "pipedrive.svg",
    desc: "Predict deal close‑probability.",
  },
  {
    tag: "CRM / Sales",
    name: "HubSpot AI",
    icon: "hubspot.svg",
    desc: "ChatSpot & Content Assistant.",
  },
  {
    tag: "CRM / Sales",
    name: "Salesforce Einstein",
    icon: "salesforce.svg",
    desc: "Predictive scoring & GPT actions.",
  },
  {
    tag: "CRM / Sales",
    name: "Gong Engage AI",
    icon: "gong.svg",
    desc: "Call summaries & deal‑risk alerts.",
  },

  // ─────────── Communications ───────────
  {
    tag: "Comms",
    name: "Otter.ai",
    icon: "otter.svg",
    desc: "Live meeting notes & action items.",
  },
  {
    tag: "Comms",
    name: "Slack AI",
    icon: "slack.svg",
    desc: "Thread summaries & digests.",
  },
  {
    tag: "Comms",
    name: "Grammarly GO",
    icon: "grammarly.svg",
    desc: "Context‑aware writing help.",
  },
  {
    tag: "Comms",
    name: "Zoom AI Companion",
    icon: "zoom.svg",
    desc: "Meeting recaps & next steps.",
  },
  {
    tag: "Comms",
    name: "Loom AI",
    icon: "loom.svg",
    desc: "Instant video transcriptions & highlights.",
  },

  // ─────────── Decks / Content Creation ───────────
  {
    tag: "Decks",
    name: "Gamma.app",
    icon: "gamma.svg",
    desc: "Narrative decks w/ live charts.",
  },
  {
    tag: "Decks",
    name: "Tome",
    icon: "tome.svg",
    desc: "Storytelling decks, AI images.",
  },
  {
    tag: "Decks",
    name: "Beautiful.ai",
    icon: "beautiful.svg",
    desc: "Auto‑layout designer templates.",
  },
  {
    tag: "Decks",
    name: "Pitch AI",
    icon: "pitch.svg",
    desc: "Realtime feedback & smart outlines.",
  },
  {
    tag: "Decks",
    name: "Canva Magic",
    icon: "canva.svg",
    desc: "One‑click slide generation.",
  },

  // ─────────── Efficiency / Co‑Pilot ───────────
  {
    tag: "Efficiency",
    name: "Microsoft Copilot",
    icon: "copilot.svg",
    desc: "AI in Word, Excel, PPT & Teams.",
  },
  {
    tag: "Efficiency",
    name: "Google Gemini Workspace",
    icon: "gemini.svg",
    desc: "Contextual help across Gmail & Docs.",
  },
  {
    tag: "Efficiency",
    name: "Rewind AI",
    icon: "rewind.svg",
    desc: "Search everything you’ve seen.",
  },
  {
    tag: "Efficiency",
    name: "Superhuman AI",
    icon: "superhuman.svg",
    desc: "Email triage & auto‑draft replies.",
  },
];

export const groupedToolkit: Record<string, Tool[]> = toolkit.reduce(
  (acc, tool) => {
    (acc[tool.tag] ??= []).push(tool);
    return acc;
  },
  {} as Record<string, Tool[]>
);
