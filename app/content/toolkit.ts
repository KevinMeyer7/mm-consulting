
export const toolkit = [
  // Project / Time Mgmt
  { tag: 'Project Mgmt', name: 'ClickUp AI', icon: 'clickup.svg', desc: 'Auto-draft tasks, docs & OKRs.' },
  { tag: 'Project Mgmt', name: 'Motion', icon: 'motion.svg', desc: 'AI schedules every task in your calendar.' },
  { tag: 'Project Mgmt', name: 'Asana Intelligence', icon: 'asana.svg', desc: 'Turns goals into timed sub-tasks.' },

  // CRM / Sales
  { tag: 'CRM / Sales', name: 'Apollo.io', icon: 'apollo.svg', desc: '50M contacts + AI email writer.' },
  { tag: 'CRM / Sales', name: 'Pipedrive AI', icon: 'pipedrive.svg', desc: 'Predict deal close-probability.' },
  { tag: 'CRM / Sales', name: 'HubSpot AI', icon: 'hubspot.svg', desc: 'ChatSpot & Content Assistant.' },

  // Comms
  { tag: 'Comms', name: 'Otter.ai', icon: 'otter.svg', desc: 'Live meeting notes & action items.' },
  { tag: 'Comms', name: 'Slack AI', icon: 'slack.svg', desc: 'Thread summaries & digests.' },
  { tag: 'Comms', name: 'Grammarly GO', icon: 'grammarly.svg', desc: 'Context-aware writing help.' },

  // Decks / Content
  { tag: 'Decks', name: 'Gamma.app', icon: 'gamma.svg', desc: 'Narrative decks w/ live charts.' },
  { tag: 'Decks', name: 'Tome', icon: 'tome.svg', desc: 'Storytelling decks, AI images.' },
  { tag: 'Decks', name: 'Beautiful.ai', icon: 'beautiful.svg', desc: 'Auto-layout designer templates.' },

  // Efficiency / Co-Pilot
  { tag: 'Efficiency', name: 'Microsoft Copilot', icon: 'copilot.svg', desc: 'AI in Word, Excel, PPT & Teams.' },
  { tag: 'Efficiency', name: 'Google Duet AI', icon: 'duet.svg', desc: 'Generative help in Workspace.' },
  { tag: 'Efficiency', name: 'Rewind AI', icon: 'rewind.svg', desc: 'Search everything you\'ve seen.' },
];

export const groupedToolkit = toolkit.reduce((acc, tool) => {
  if (!acc[tool.tag]) {
    acc[tool.tag] = [];
  }
  acc[tool.tag].push(tool);
  return acc;
}, {} as Record<string, typeof toolkit>);
