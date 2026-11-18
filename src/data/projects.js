/**
 * Verified portfolio projects data.
 * To showcase additional projects in the future, append another object
 * following this schema — the list row and Case Study drawer render automatically.
 */
export const PROJECTS = [
  {
    id: 'versarail-ai',
    index: '01',
    title: 'VersaRail AI',
    tagline: 'Local-first desktop AI coding workstation with multi-provider failover and cryptographic diff approval.',
    category: 'Desktop AI Workstation',
    role: 'Creator & Engineer',
    platforms: 'Windows · macOS · Linux',
    coverImage: '/projects/versarail/usage-quotas.png',
    coverAlt:
      'VersaRail AI Usage and Quotas dashboard showing 173M monthly free-tier token budget calculator and live failover status',
    links: {
      live: 'https://versarail-landing.pages.dev/',
      github: 'https://github.com/himanshu-dot-dev/versarail-ai',
      architecture:
        'https://github.com/himanshu-dot-dev/versarail-ai/blob/main/docs/ARCHITECTURE.md',
      threatModel:
        'https://github.com/himanshu-dot-dev/versarail-ai/blob/main/docs/SECURITY_THREAT_MODEL.md'
    },
    highlights: [
      '13+ cloud & local LLM adapters with pre-first-byte automatic failover',
      'SHA-256 TOCTOU payload guard & unified diff review before disk writes',
      'Zero-native Node.js 24 node:sqlite token engine + OS keychain encryption'
    ],
    cardStack: ['Electron 45', 'React 19', 'TypeScript', 'Node.js 24', 'node:sqlite'],
    fullStack: [
      'Electron 45',
      'React 19',
      'TypeScript',
      'Node.js 24',
      'node:sqlite',
      'Tailwind CSS',
      'Zod',
      'Vitest',
      'xterm.js',
      '@electron/fuses'
    ],
    problem:
      'Developers relying on AI coding tools often get locked into a single paid vendor, hit unexpected 429 rate limits across fragmented free-tier APIs, or run coding agents that mutate files and shell commands without clear verification boundaries.',
    direction:
      'VersaRail AI treats the desktop shell as a strict trust boundary: API credentials stay inside the OS keyring, model traffic routes through an automatic multi-provider failover mesh, and every disk write or shell command requires verified user approval backed by a SHA-256 payload hash.',
    views: [
      {
        id: 'usage',
        label: 'Usage & Quotas',
        title: 'Per-Provider & Per-Model Token Calculator',
        caption:
          'Aggregates monthly free-tier capacity across enabled keys, deduplicates shared provider pools, tracks 24h and monthly token usage in SQLite, and monitors live failover health.',
        imageDark: '/projects/versarail/usage-quotas.png',
        imageLight: '/projects/versarail/usage-quotas.png',
        alt: 'VersaRail AI Usage and Quotas view showing 173M monthly free-tier token budget calculator across providers and live endpoint health'
      },
      {
        id: 'security',
        label: 'Diff-First Security',
        title: 'Action Approval & SHA-256 TOCTOU Guard',
        caption:
          'Every workspace file mutation renders a unified diff for explicit review and binds approval to a SHA-256 payload hash so parameters cannot be altered before execution.',
        imageDark: '/projects/versarail/diff-security.png',
        imageLight: '/projects/versarail/diff-security.png',
        alt: 'VersaRail AI Action Approval modal displaying a unified file diff, risk badge, and SHA-256 TOCTOU payload hash guard'
      },
      {
        id: 'workspace',
        label: 'Agent Workspace',
        title: 'Workspace-Aware Coding Agent & Tool Execution',
        caption:
          'Inspects local project directories, streams model reasoning traces, runs built-in tools like write_file and edit_file with approval, and persists conversations locally.',
        imageDark: '/projects/versarail/agent-workspace.png',
        imageLight: '/projects/versarail/agent-workspace.png',
        alt: 'VersaRail AI Chat workspace with live reasoning trace, completed write_file tool action, and project file explorer'
      },
      {
        id: 'workstation',
        label: 'Workstation UI',
        title: 'Local-First Desktop Shell (Dark & Light Themes)',
        caption:
          'Cross-platform Electron 45 + React 19 desktop interface supporting BYOK keys, local endpoints (Ollama / LM Studio), @ file mentions, and theme parity.',
        imageDark: '/projects/versarail/workstation-dark.png',
        imageLight: '/projects/versarail/workstation-light.png',
        alt: 'VersaRail AI Agent Workstation main interface showing workspace controls, BYOK direct keys, auto-failover, and diff-first safety'
      },
      {
        id: 'keychain',
        label: 'OS Keychain',
        title: 'Hardware-Encrypted Provider Credentials',
        caption:
          'Provider API keys are encrypted immediately via Electron safeStorage (Windows DPAPI, macOS Keychain, Linux Secret Service) and never exposed in plaintext to the renderer.',
        imageDark: '/projects/versarail/keychain-providers.png',
        imageLight: '/projects/versarail/keychain-providers.png',
        alt: 'VersaRail AI Add AI Provider dialog with local OS keychain encryption notice and live connection test'
      }
    ],
    systems: [
      {
        num: '01',
        key: 'mesh',
        title: '13-Provider Mesh & Pre-First-Byte Failover',
        body: 'Supports Gemini, Groq, Cerebras, OpenRouter, Mistral, NVIDIA NIM, Cohere, DeepSeek, Cloudflare Workers AI, Hugging Face, Ollama/LM Studio, and keyless gateways with transparent failover on 429/5xx before streaming starts.'
      },
      {
        num: '02',
        key: 'sqlite',
        title: 'Zero-Native SQLite Token Engine',
        body: 'Uses Node.js 24 built-in node:sqlite (DatabaseSync) — avoiding Python, MSBuild, and native C++ addons — to persist conversations, log actual SSE token usage, and deduplicate shared free-tier account pools.'
      },
      {
        num: '03',
        key: 'security',
        title: 'Cryptographic Execution Boundaries',
        body: 'Routes file writes, edits, and shell execution through a central PermissionBroker with SHA-256 payload-hash TOCTOU protection, unified diff conflict checks, canonical path validation, and .env / .git / .ssh exclusions.'
      },
      {
        num: '04',
        key: 'isolation',
        title: 'Hardened Electron Process Isolation',
        body: 'Sandboxed Chromium renderer (contextIsolation: true, nodeIntegration: false, connect-src none in production), narrow contextBridge API with SenderVerifier + Zod validation, OS safeStorage keys, and @electron/fuses.'
      }
    ],
    architecture: [
      {
        layer: '01 · Renderer Process',
        boundary: 'Sandboxed Chromium · React 19',
        items: ['Chat & Inspector UI', 'Unified Diff Viewer', 'Usage & Quotas', 'xterm.js Terminal']
      },
      {
        layer: '02 · Preload Bridge',
        boundary: 'contextIsolation · Narrow Typed IPC',
        items: ['window.electronApi', 'SenderVerifier', 'Zod Schema Validation']
      },
      {
        layer: '03 · Main Process',
        boundary: 'Privileged Node.js 24 Runtime',
        items: [
          'Provider Router & Failover',
          'PermissionBroker (SHA-256)',
          'node:sqlite Storage',
          'safeStorage Keyring',
          'Safe FS & Command Runner'
        ]
      }
    ]
  }
];
