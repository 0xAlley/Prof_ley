import { ExploringItem, ChronicleEntry, NowStatus } from './types.ts';

export const PERSONAL_INFO = {
  name: 'Ley',
  handle: '@0xAlley_',
  bio: `Exploring what's interesting & sharing what's worth it. Ex-Laravel, now just tinkering.`,
  tagline: 'Deep into AI × Web3 🔍',
  labUrl: 'https://play.ley.dev',
};

export const EXPLORING_ITEMS: ExploringItem[] = [
  {
    id: 'ai',
    title: 'AI',
    description: `Trying to figure out where AI agents are actually useful,
and where they're just hype.

Lately I've been experimenting with MCP servers,
local workflows, and ways to make AI save real time.`,
    icon: 'Brain'
  },
  {
    id: 'web3',
    title: 'Web3',
    description: `Trying to understand what survives after the hype.

Lately I've been exploring Solana, on-chain apps, and whether AI and crypto can create something genuinely useful together.`,
    icon: 'Fingerprint'
  },
  {
    id: 'building',
    title: 'Building',
    description: `Building weird things and shipping them.

Mostly small tools,
experiments,
and ideas that sound fun enough to try.`,
    icon: 'Hammer'
  },
  {
    id: 'writing',
    title: 'Writing',
    description: `Writing about things I find interesting.

Sometimes it's AI.
Sometimes it's Web3.
Sometimes it's just a random rabbit hole worth sharing.`,
    icon: 'PenTool'
  }
];

export const CHRONICLE_DISCOVERIES: ChronicleEntry[] = [
  {
    id: 'dis-1',
    category: 'discovery',
    title: 'Researching With An Excavator',
    description: `I looked into how serious alpha hunters do research.

Turns out the difference isn't intelligence.

It's workflow.`,
    date: 'May 26, 2026',
    link: 'https://x.com/0xAlley_/status/2059135571361251545?s=20',
    tags: ['Research', 'Tools', 'Workflow'],
    sourceName: 'Workflow Breakdown'
  },
  {
    id: 'dis-2',
    category: 'discovery',
    title: 'Cutting Through AI-Washing',
    description: `Got burned multiple times chasing AI narratives.

Eventually I found one simple question that filters
real utility from hype.`,
    date: 'May 30, 2026',
    link: 'https://x.com/0xAlley_/status/2060682460665688511?s=20_',
    tags: ['AI × Crypto', 'Research', 'Signal vs Noise'],
    sourceName: 'Signal Analysis'
  },
  {
    id: 'dis-3',
    category: 'discovery',
    title: 'Why Revenue Matters More Than Hype',
    description: `Most people focused on valuation.

I focused on where the money is actually flowing.`,
    date: 'May 31, 2026',
    link: 'https://x.com/0xAlley_/status/2061072799733871057?s=20',
    tags: ['AI', 'Industry', 'Analysis'],
    sourceName: 'Market Analysis'
  }
];

export const CHRONICLE_WORTH_SHARING: ChronicleEntry[] = [
  {
    id: 'share-1',
    category: 'sharing',
    title: 'Official Model Context Protocol Specification',
    description: 'The open-standard specification outlining server-client links for model integration. Reading this is far more valuable than studying any secondary abstraction wrapper library.',
    date: 'Ongoing Resource',
    link: 'https://modelcontextprotocol.org',
    tags: ['Protocols', 'Open Source', 'Specs'],
    sourceName: 'Official Spec'
  },
  {
    id: 'share-2',
    category: 'sharing',
    title: 'SVM Parallel Scheduling Explainer',
    description: 'An exceptionally clear technical Git repo breaking down exactly how Solana schedules transactions, locks state accounts, and avoids sequential blockage during peak congestion limits.',
    date: 'Curated link',
    link: 'https://solana.com',
    tags: ['Solana', 'Low-level Coding', 'Rust'],
    sourceName: 'GitHub Readme'
  },
{
  id: 'share-3',
  category: 'sharing',
  title: 'State of AI Agents',
  description: 'A practical look at what happens when AI agents leave the demo stage and enter the real world. Good reminder that adoption is usually messier than the hype cycle suggests.',
  date: 'Worth revisiting',
  link: 'https://www.lyzr.ai/state-of-ai-agents/',
  tags: ['AI', 'Agents', 'Signal vs Noise'],
  sourceName: 'Industry Report'
}
];

export const NOW_STATUS: NowStatus = {
learning: [
{
name: 'AI Agents',
description: 'Trying to figure out where agents are actually useful, and where they are mostly hype.'
},
{
name: 'Model Context Protocol (MCP)',
description: 'Exploring how tools, files, and models can share context more naturally.'
},
{
name: 'Solana',
description: 'Learning how parallel execution changes the way applications are designed.'
}
],

building: [
{
name: 'ley.dev',
description: 'Turning my notes, interests, and internet discoveries into a small digital home.'
},
{
name: 'play.ley.dev',
description: 'A collection of experiments, tiny tools, and weird ideas worth shipping.'
},
{
name: 'Tiny Utilities',
description: 'Building small scripts that save time and automate repetitive tasks.'
}
],

writing: [
{
name: 'AI Notes',
description: 'Writing about interesting things I find while exploring AI.'
},
{
name: 'Web3 Notes',
description: 'Trying to make sense of crypto beyond charts, narratives, and hype.'
},
{
name: 'Internet Curiosities',
description: 'Random tools, resources, and rabbit holes worth sharing.'
}
],

goal: "Exploring what's interesting. Sharing what's worth it."
};


export const SOCIAL_LINKS = [
  { name: 'X / Twitter', url: 'https://x.com/0xAlley_', handle: '@0xAlley_', icon: 'Twitter' },
  { name: 'Telegram', url: 'https://t.me/aaaiid_', handle: 't.me/aaaiid_', icon: 'MessageCircle' },
  { name: 'Discord', url: 'https://discord.com/users/1060566007757938729', handle: 'all33y', icon: 'Hash' },
  { name: 'Instagram', url: 'https://instagram.com/z.lluke', handle: '@z.lluke', icon: 'Instagram' },
  { name: 'Email', url: 'mailto:alley.xdev@gmail.com', handle: 'alley.xdev@gmail.com', icon: 'Mail' }
];

export const JOURNAL_STORY = {
  quote: 'Learning in public. Building in public. Trying to separate signal from noise.',
  paragraphs: [
    'I used to spend most of my time building Laravel applications.',
    'Then AI happened.',
    'For the first time in years, technology felt unpredictable again. New tools, new ideas, new possibilities. There was suddenly too much interesting stuff to ignore.',
    'That curiosity eventually pulled me into AI, Web3, and all kinds of internet rabbit holes.',
    "These days I'm mostly experimenting, taking notes, building small things, and sharing whatever feels worth bookmarking.",
    'Some ideas become projects.',
    'Most become lessons.',
    'This website is simply a collection of both.'
  ]
};
