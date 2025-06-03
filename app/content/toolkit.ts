// -----------------------------------------------------------------------------
// toolkit.ts – curated stack we teach in the programme
// -----------------------------------------------------------------------------
export type Tool = {
  tag: string; // vertical bucket
  name: string; // product name
  icon: string; // file in /public/icons
  desc: string; // ≤ 70-char value one-liner
};

export const toolkit: Tool[] = [
  // ─────────── Project / Time Management ───────────
  {
    tag: "Project Mgmt",
    name: "ClickUp AI",
    icon: "clickup.svg",
    desc: "Auto-draft tasks, docs & OKRs.",
  },
  {
    tag: "Project Mgmt",
    name: "Motion",
    icon: "motion.svg",
    desc: "AI schedules every task for you.",
  },

  // ─────────── CRM / Sales ───────────
  {
    tag: "CRM / Sales",
    name: "Apollo.io",
    icon: "apollo.png",
    desc: "50 M contacts + AI outreach.",
  },
  {
    tag: "CRM / Sales",
    name: "HubSpot ChatSpot",
    icon: "hubspot.png",
    desc: "Command the CRM with plain English.",
  },

  // ─────────── Communications ───────────
  {
    tag: "Comms",
    name: "Otter.ai",
    icon: "otter.png",
    desc: "Live notes & action items from calls.",
  },
  {
    tag: "Comms",
    name: "Slack AI",
    icon: "slack.svg",
    desc: "Instant thread summaries & digests.",
  },

  // ─────────── Decks / Content Creation ───────────
  {
    tag: "Decks",
    name: "Gamma.app",
    icon: "gamma.png",
    desc: "Narrative decks, charts auto-built.",
  },
  {
    tag: "Decks",
    name: "Tome",
    icon: "tome.png",
    desc: "Story-first slides with AI visuals.",
  },

  // ─────────── Efficiency / Co-Pilot ───────────
  {
    tag: "Efficiency",
    name: "Microsoft Copilot",
    icon: "copilot.png",
    desc: "AI across Word, Excel & Teams.",
  },
  {
    tag: "Efficiency",
    name: "Google Gemini",
    icon: "gemini.svg",
    desc: "Contextual help in Gmail & Docs.",
  },
];

export const groupedToolkit: Record<string, Tool[]> = toolkit.reduce(
  (acc, tool) => {
    (acc[tool.tag] ??= []).push(tool);
    return acc;
  },
  {} as Record<string, Tool[]>
);
