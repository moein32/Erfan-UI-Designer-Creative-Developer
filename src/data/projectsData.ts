import { ProjectData, CapabilityItem, ProcessStep } from '../types';

export const PROJECTS: ProjectData[] = [
  {
    id: 'ovara',
    title: 'OVARA',
    persianTitle: 'اووارا — تجربه خرید لوکس',
    tagline: 'Premium Persian E-Commerce & Luxury Lifestyle Platform',
    category: 'E-Commerce / Mobile App & Design System',
    year: '2025 – 2026',
    client: 'Ovara Luxury Group',
    role: 'Lead Product Designer & Design Engineer',
    timeline: '14 Weeks',
    accentColor: '#FF5C39', // Coral
    secondaryAccent: '#7C3AED', // Violet / Electric Blue
    badge: 'PERSION LUXURY COMMERCE',
    overview:
      'Ovara is an ultra-refined luxury e-commerce ecosystem built from the ground up to redefine digital commerce in the Middle East. Featuring bespoke bidirectional (LTR/RTL) typography, tactile cart gestures, and a sensory discovery feed.',
    challenge:
      'Middle Eastern luxury shoppers often encounter generic translations of western templates. The goal was to craft a native Persian high-fashion experience with flawless typographic cadence, micro-haptics, and instant checkout architecture.',
    solution:
      'Engineered a comprehensive design system featuring custom Vazirmatn variable typography scales, 3D interactive cloth simulators, and fluid bottom-sheet checkout with under 2.4s time-to-purchase.',
    metrics: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Avg Session Duration', value: '6.8 min' },
      { label: 'Cart Abandonment Drop', value: '-31%' },
      { label: 'Design System Tokens', value: '280+' },
    ],
    tags: ['E-Commerce', 'Mobile UX', 'Design Systems', 'RTL Typography', 'Micro-Interactions'],
    colorPalette: [
      { name: 'Coral Rouge', hex: '#FF5C39', desc: 'Primary brand accent' },
      { name: 'Electric Violet', hex: '#6366F1', desc: 'High-contrast interaction cue' },
      { name: 'Obsidian Velvet', hex: '#121214', desc: 'Deep background luxury layer' },
      { name: 'Pure Alabaster', hex: '#F9F9F8', desc: 'Surface clean contrast' },
    ],
    typography: [
      { font: 'Vazirmatn & Syne', usage: 'Headings & Persian editorial titles', sample: 'زیبایی در هنر سادگی است' },
      { font: 'Plus Jakarta Sans', usage: 'Body & specs metadata', sample: 'Handcrafted Italian Cashmere Blend' },
    ],
    appScreens: [
      { id: 'ovara-1', title: 'Curated Discovery', description: 'Editorial daily drops with haptic swipe gesture cards', type: 'feed' },
      { id: 'ovara-2', title: 'Product Architecture', description: 'Tactile materials inspector, 360° rotation and size matrix', type: 'detail' },
      { id: 'ovara-3', title: 'Instant Express Cart', description: 'One-swipe checkout with dynamic currency & address sync', type: 'checkout' },
    ],
    deliverables: ['iOS Native App UI', 'Design System (Figma + Code)', 'Micro-interaction Prototypes', 'Production Web Applet'],
  },
  {
    id: 'arven',
    title: 'ARVEN',
    persianTitle: 'آروِن — دستیار هوشمند کارآمدی',
    tagline: 'Cognitive Workspace & Spatial AI Productivity Suite',
    category: 'AI Platform / Productivity & Spatial UX',
    year: '2025',
    client: 'Arven Labs San Francisco',
    role: 'Principal Product Designer & Creative Dev',
    timeline: '12 Weeks',
    accentColor: '#10B981', // Emerald / Mint Futuristic
    secondaryAccent: '#6366F1', // Indigo Cyber
    badge: 'AI PRODUCTIVITY COPILOT',
    overview:
      'Arven bridges human cognition and autonomous neural agents into a unified, distraction-free spatial canvas. It predicts daily priorities, drafts context-aware briefs, and synchronizes cross-modal knowledge graphs.',
    challenge:
      'Traditional AI chat interfaces are linear and interruptive. Arven required an ambient, non-intrusive workspace that feels like a quiet digital sanctuary rather than a robotic prompt terminal.',
    solution:
      'Pioneered an obsidian glass typographic canvas with dynamic island status indicators, proactive AI smart chips, and keyboard-first command palettes that cut workflow context-switching by 65%.',
    metrics: [
      { label: 'Task Execution Speed', value: '3.4x faster' },
      { label: 'Daily Active Retention', value: '78%' },
      { label: 'Cognitive Load Reduction', value: '-54%' },
      { label: 'Weekly Active Hours', value: '18.4 hrs' },
    ],
    tags: ['Generative AI', 'Productivity', 'Keyboard-First UI', 'Spatial Canvas', 'Dark Mode UI'],
    colorPalette: [
      { name: 'Neural Emerald', hex: '#10B981', desc: 'Active synthesis indicator' },
      { name: 'Obsidian Slate', hex: '#0B0F17', desc: 'OLED contrast canvas' },
      { name: 'Titanium Fog', hex: '#94A3B8', desc: 'Secondary typography hierarchy' },
      { name: 'Deep Indigo', hex: '#4F46E5', desc: 'Autonomous thread marker' },
    ],
    typography: [
      { font: 'Syne & JetBrains Mono', usage: 'AI prompts & terminal syntax', sample: 'neural_context.synthesize(workspace)' },
      { font: 'Plus Jakarta Sans', usage: 'Workspace documents & notes', sample: 'Quarterly Strategic Expansion Blueprint' },
    ],
    appScreens: [
      { id: 'arven-1', title: '01 / THINK — Neural Feed', description: 'Contextual AI workspace that auto-prioritizes high-leverage focus tasks', type: 'dashboard' },
      { id: 'arven-2', title: '02 / ORGANIZE — Smart Tasks', description: 'Autonomous task decomposition and 45-minute focus milestone tracking', type: 'tasks' },
      { id: 'arven-3', title: '03 / PLAN — Cognitive Calendar', description: 'Deep work time-blocking matched to biological productivity curves', type: 'calendar' },
      { id: 'arven-4', title: '04 / CREATE — Knowledge Graph', description: 'Semantic node indexing connecting notes, ideas, and actionable synthesis', type: 'insights' },
    ],
    deliverables: ['Desktop & Mobile Architecture', 'Interactive Design Tokens', 'Fluid Canvas Engine', 'Design System Guidelines'],
  },
  {
    id: 'nivra',
    title: 'NIVRA',
    persianTitle: 'نیورا — کاوشگر هوشمند سفر',
    tagline: 'Intelligent Travel Companion & Predictive Expedition Engine',
    category: 'Travel & Mobility / Geospatial Exploration',
    year: '2024 – 2025',
    client: 'Nivra Global Journeys',
    role: 'Lead UI/UX & Motion Architect',
    timeline: '16 Weeks',
    accentColor: '#0284C7', // Sky Blue
    secondaryAccent: '#F59E0B', // Warm Sunset Amber
    badge: 'EXPEDITION INTELLIGENCE',
    overview:
      'Nivra transforms unpredictable globe-trotting into a serene, predictive journey. From weather-adaptive route recommendations to instant offline visa and transit synchronization, Nivra serves as a personal concierge in your pocket.',
    challenge:
      'Travelers suffer from fragmented apps: booking in one app, boarding passes in another, maps and itineraries in a third. Nivra synthesizes these into an elegant single-surface timeline.',
    solution:
      'Designed a weather-responsive gradient interface that shifts subtly from sunrise gold to alpine twilight based on the traveler’s destination timezone, paired with real-time live airport gate alerts.',
    metrics: [
      { label: 'Booking Friction', value: '-48%' },
      { label: 'Offline Sync Reliability', value: '99.9%' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Countries Covered', value: '142' },
    ],
    tags: ['Travel UI', 'Geospatial Maps', 'Real-Time Sync', 'Dynamic Theming', 'Micro-Animations'],
    colorPalette: [
      { name: 'Alpine Cyan', hex: '#0284C7', desc: 'Daylight sky clarity' },
      { name: 'Sunset Amber', hex: '#F59E0B', desc: 'Golden hour highlights' },
      { name: 'Midnight Navy', hex: '#07101E', desc: 'Night exploration mode' },
      { name: 'Cloud Mist', hex: '#F0F9FF', desc: 'Clean cards and sheets' },
    ],
    typography: [
      { font: 'Syne Display', usage: 'Destination headlines & flight codes', sample: 'REYKJAVIK · KEF 08:45' },
      { font: 'Plus Jakarta Sans', usage: 'Itineraries and boarding guides', sample: 'Private glacier trek departing at sunrise' },
    ],
    appScreens: [
      { id: 'nivra-1', title: '01 / DISCOVER — Curated Stays', description: 'Visual destination discovery with micro-climate forecasts and cultural stories', type: 'feed' },
      { id: 'nivra-2', title: '02 / PLAN — Smart Itinerary', description: 'Multi-day personalized timeline syncing flights, stays, and guided explorations', type: 'dashboard' },
      { id: 'nivra-3', title: '03 / EXPLORE — Destination Hub', description: 'In-depth destination guide with live weather, maps, and must-see landmarks', type: 'detail' },
      { id: 'nivra-4', title: '04 / TRAVEL — Fast Booking', description: 'One-tap reservation confirmation with transparent fees and SSL security', type: 'booking' },
    ],
    deliverables: ['Mobile App (iOS & Android)', 'Live Dynamic Island Widgets', 'Interactive Maps UI', 'Motion Design Spec'],
  },
  {
    id: 'veyra',
    title: 'VEYRA',
    persianTitle: 'ویرا — پلتفرم تندرستی و ریتم زیستی',
    tagline: 'Circadian Wellness, Biometric Balance & Mindful Living',
    category: 'Digital Health / Wellness & Human Optimization',
    year: '2024',
    client: 'Veyra BioSystems Zurich',
    role: 'Product Designer & Design System Lead',
    timeline: '10 Weeks',
    accentColor: '#8B5CF6', // Lavender / Indigo
    secondaryAccent: '#10B981', // Mint Herb
    badge: 'HUMAN BIOMETRICS & MINDFULNESS',
    overview:
      'Veyra moves beyond stressful gamified fitness metrics into calm, holistic longevity. By syncing heart rate variability, sleep architecture, and mindful breathing cycles, it guides users into biological equilibrium.',
    challenge:
      'Most health apps overwhelm users with cold clinical charts and alarming red notifications. Veyra sought an organic, soothing aesthetic inspired by Swiss typography and natural light.',
    solution:
      'Created the "Circadian Glow Ring", a soft bioluminescent visualizer that communicates daily recovery at a glance, supported by binaural sound sessions and personalized sleep coaching.',
    metrics: [
      { label: 'Sleep Quality Score', value: '+34%' },
      { label: 'Stress Reduction Index', value: '-29%' },
      { label: 'Daily Check-in Rate', value: '86%' },
      { label: 'Community Growth', value: '120k+' },
    ],
    tags: ['Digital Health', 'Biofeedback', 'Circadian Rings', 'Bioluminescent UI', 'Sound Design'],
    colorPalette: [
      { name: 'Lavender Mist', hex: '#8B5CF6', desc: 'Mindful restoration' },
      { name: 'Deep Botanical', hex: '#0F172A', desc: 'Night sleep sanctuary' },
      { name: 'Mint Herb', hex: '#34D399', desc: 'Biometric vitality indicator' },
      { name: 'Opal Whisper', hex: '#F5F3FF', desc: 'Daylight recovery canvas' },
    ],
    typography: [
      { font: 'Syne & Vazirmatn', usage: 'Heart rate & recovery quotes', sample: 'آرامش ذهن، تندرستی جان' },
      { font: 'Plus Jakarta Sans', usage: 'Sleep stages & HRV analytics', sample: 'Deep REM cycle: 2h 18m · Recovery 94%' },
    ],
    appScreens: [
      { id: 'veyra-1', title: '01 / EQUILIBRIUM — Wellness Dashboard', description: 'Holistic bio-score ring with real-time vitals, HRV, and daily hydration rituals', type: 'dashboard' },
      { id: 'veyra-2', title: '02 / VITALITY — Activity & Kinetic Flow', description: 'Weekly caloric burn charts, multi-tier movement rings, and workout logs', type: 'insights' },
      { id: 'veyra-3', title: '03 / CIRCADIAN — Sleep & Recovery Hub', description: 'Chronobiology staging, restorative delta wave tracking, and sleep score analytics', type: 'detail' },
      { id: 'veyra-4', title: '04 / INTELLIGENCE — AI Coach & Nutrition', description: 'Conversational health companion with recovery stretches and macro-nutrient balance', type: 'assistant' },
    ],
    deliverables: ['iOS HealthKit App UI', 'Apple Watch Companion UI', 'Design System Library', 'Interactive Prototype'],
  },
  {
    id: 'zarvand',
    title: 'ZARVAND',
    persianTitle: 'زاروند — پلتفرم مدیریت دارایی‌های دیجیتال',
    tagline: 'Institutional Digital Asset & Sovereign Wealth Architecture',
    category: 'Fintech / Enterprise Infrastructure & Data Systems',
    year: '2025 – 2026',
    client: 'Zarvand Capital & Treasury',
    role: 'Principal Designer & Systems Architect',
    timeline: '18 Weeks',
    accentColor: '#D97706', // Warm Gold / Amber Titanium
    secondaryAccent: '#2563EB', // Enterprise Royal
    badge: 'ENTERPRISE ASSET ENGINE',
    overview:
      'Zarvand is a high-security digital treasury and institutional asset management console. Designed for fund managers overseeing multi-million dollar portfolios with real-time liquidity routing and automated compliance guardrails.',
    challenge:
      'Institutional financial software is notoriously clunky, dense, and prone to catastrophic user error. The mandate was to engineer a terminal that marries aerospace precision with bespoke aesthetic authority.',
    solution:
      'Constructed a dense, high-performance visual system featuring custom mono-spaced numeric columns, instantaneous order execution ladders, and biometric multi-signature authorization flows.',
    metrics: [
      { label: 'Total Volume Routed', value: '$840M+' },
      { label: 'Order Latency', value: '< 12ms' },
      { label: 'Audit Compliance Score', value: '100%' },
      { label: 'User Error Incidents', value: '0.0%' },
    ],
    tags: ['Institutional Fintech', 'Treasury Systems', 'Real-Time Telemetry', 'Multi-Sig UX', 'High-Density UI'],
    colorPalette: [
      { name: 'Imperial Amber', hex: '#D97706', desc: 'Treasury reserve accent' },
      { name: 'Carbon Titanium', hex: '#0F1117', desc: 'Ultra-low eye strain dark backdrop' },
      { name: 'Cobalt Alpha', hex: '#2563EB', desc: 'Secure verification confirmation' },
      { name: 'Platinum Frost', hex: '#E2E8F0', desc: 'Numeric telemetry readout' },
    ],
    typography: [
      { font: 'Syne & JetBrains Mono', usage: 'Ticker rates, block hashes, ledger', sample: '0x88f2...94a1 · $4,892,120.00' },
      { font: 'Plus Jakarta Sans', usage: 'Portfolio governance & compliance', sample: 'Multi-Signature Smart Treasury Quorum Met' },
    ],
    appScreens: [
      { id: 'zarvand-1', title: 'Global Liquidity Matrix', description: 'Real-time multi-asset vault balancing and yield visualization', type: 'dashboard' },
      { id: 'zarvand-2', title: 'Secure Vault Guard', description: 'Zero-knowledge biometric multi-signature release sequence', type: 'checkout' },
      { id: 'zarvand-3', title: 'Real-Time Telemetry', description: 'Live transaction latency and liquidity routing stream', type: 'insights' },
    ],
    deliverables: ['Web & Desktop Workstation UI', 'Institutional Design Tokens', 'Security UX Architecture', 'Interactive D3 Visualizers'],
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'ui-ux',
    number: '01',
    title: 'UI / UX DESIGN',
    subtitle: 'Human-Centered Digital Craft',
    description:
      'Sculpting intuitive interfaces where every pixel serves a psychological and functional purpose. Balancing beauty, accessibility, and high conversion.',
    skills: ['Information Architecture', 'User Journey Mapping', 'Wireframing & High-Fidelity Specs', 'Design Systems (Tokens)', 'Accessibility (WCAG AA)'],
    deliverables: ['Figma Master Libraries', 'Clickable Functional Prototypes', 'User Testing Reports', 'UX Heuristic Audits'],
    highlight: 'Pixel-perfect precision meeting cognitive ergonomics.',
  },
  {
    id: 'product-design',
    number: '02',
    title: 'PRODUCT DESIGN',
    subtitle: 'End-to-End Strategic Systems',
    description:
      'Translating ambiguous business requirements into scalable, defensible product ecosystems with deep user retention and defensible moats.',
    skills: ['Product Strategy & Vision', 'Feature Prioritization', 'Growth & Onboarding Loops', 'Bilingual (LTR/RTL) Localization', 'Cross-Platform Unification'],
    deliverables: ['Product Requirement Briefs', 'Component Design Tokens', 'Metrics Dashboards', 'Iterative Release Roadmaps'],
    highlight: 'Aligning business metrics with sublime user delight.',
  },
  {
    id: 'design-systems',
    number: '03',
    title: 'DESIGN SYSTEMS',
    subtitle: 'Atomic & Tokenized Infrastructure',
    description:
      'Creating living, robust component libraries that bridge design in Figma directly to production code in React and Tailwind.',
    skills: ['Semantic Design Tokens', 'Component Architecture', 'Documentation & Governance', 'Dark/Light/RTL Themes', 'Auto-Layout & Variants'],
    deliverables: ['Zero-to-One Figma Libraries', 'React Component Stems', 'Token JSON Exports', 'Storybook Reference Sync'],
    highlight: 'Zero-friction handoff between design and engineering.',
  },
  {
    id: 'prototyping',
    number: '04',
    title: 'PROTOTYPING',
    subtitle: 'Tactile Simulation & Validation',
    description:
      'Crafting realistic, interactive prototypes with live micro-haptics, sensor inputs, and stateful interactions before writing a single line of production code.',
    skills: ['High-Fidelity Prototyping', 'Micro-Interaction Logic', 'Physics-Based Spring Curves', 'Voice & Gesture Interfaces', 'Live Device Mirroring'],
    deliverables: ['Interactive Web Prototypes', 'Figma Smart-Animate Flows', 'Video Walkthroughs', 'Stakeholder Pitch Demos'],
    highlight: 'Feel the software before building the infrastructure.',
  },
  {
    id: 'motion-design',
    number: '05',
    title: 'MOTION DESIGN',
    subtitle: 'Choreographed Spatial Storytelling',
    description:
      'Elevating static interfaces into breathing, kinetic experiences. Purposeful motion that guides visual hierarchy and adds emotional resonance.',
    skills: ['GSAP & ScrollTrigger', 'Framer Motion / Motion', 'Lottie & SVG Animation', 'Cinematic Page Transitions', 'Micro-interaction Choreography'],
    deliverables: ['Motion Timing Curves', 'ScrollTrigger Timeline Specs', 'Interactive Canvas Demos', 'Exported JSON & WebM Assets'],
    highlight: 'Motion that informs, guides, and enchants without friction.',
  },
  {
    id: 'creative-dev',
    number: '06',
    title: 'CREATIVE DEVELOPMENT',
    subtitle: 'Production-Grade Frontend Architecture',
    description:
      'Writing performant, clean TypeScript, Next.js, and Tailwind CSS code with smooth 60fps animations, semantic accessibility, and modular structure.',
    skills: ['Next.js & React 19', 'TypeScript Strict Mode', 'Tailwind CSS v4', 'Lenis Smooth Scroll', 'Shader & Canvas Micro-Effects'],
    deliverables: ['Production Web Applications', 'Accessible Responsive Layouts', 'Clean Git Repositories', 'Lighthouse 95+ Performance'],
    highlight: 'The rare bridge where designer intent is preserved in code.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'RESEARCH',
    persianPhase: 'شناخت و پژوهش',
    title: 'Deconstructing the Core Problem',
    description:
      'Uncovering authentic user friction, dissecting market competitors, and establishing quantitative success benchmarks through deep stakeholder workshops.',
    activities: ['User Interviews & Empathy Maps', 'Competitive Disruption Audit', 'Technical Feasibility Study', 'Strategic Goals Matrix'],
    output: 'Product Discovery Brief & Core Thesis',
  },
  {
    number: '02',
    phase: 'UX ARCHITECTURE',
    persianPhase: 'معماری تجربه کاربری',
    title: 'Mapping Cognitive Pathways',
    description:
      'Structuring information hierarchy, defining user flows, and stress-testing edge cases through low-fidelity wireframes before aesthetic commitment.',
    activities: ['Information Architecture', 'User Flow Mapping', 'Low-Fidelity Wireframes', 'Content & Copywriting Hierarchy'],
    output: 'Interactive Wireframe Flow & Schema',
  },
  {
    number: '03',
    phase: 'UI & VISUAL DIRECTION',
    persianPhase: 'طراحی بصری و تایپوگرافی',
    title: 'Sculpting Aesthetic Authority',
    description:
      'Developing bespoke typographic scales, sophisticated color palettes, tactile surfaces, and pixel-perfect high-fidelity interface components.',
    activities: ['Moodboards & Visual Exploration', 'Bilingual Typography Pairing', 'Design Token Definition', 'High-Fidelity Component States'],
    output: 'Figma Master System & Token Library',
  },
  {
    number: '04',
    phase: 'PROTOTYPING',
    persianPhase: 'نمونه‌سازی تعاملی',
    title: 'Bringing Pixels into Reality',
    description:
      'Simulating realistic haptics, spring physics, and dynamic states so stakeholders can touch, test, and validate the product on real devices.',
    activities: ['Micro-Interaction Choreography', 'Clickable Flow Assembly', 'Usability Testing & Feedback Loops', 'Edge Case Stress Testing'],
    output: 'High-Fidelity Interactive Prototype',
  },
  {
    number: '05',
    phase: 'MOTION CHOREOGRAPHY',
    persianPhase: 'موشن و ریتم بصری',
    title: 'Infusing Kinetic Soul',
    description:
      'Choreographing entrance reveals, scroll-driven timelines, and continuous state transitions using GSAP and physics-based easing.',
    activities: ['ScrollTrigger Choreography', 'Easing Curve Calibration', 'Performance Profiling (60fps)', 'Reduced Motion Accessibility'],
    output: 'Production Motion Specification',
  },
  {
    number: '06',
    phase: 'CREATIVE DEVELOPMENT',
    persianPhase: 'پیاده‌سازی و توسعه مهندسی',
    title: 'Production-Grade Execution',
    description:
      'Transforming design into semantic, accessible, and ultra-fast TypeScript and React code with seamless deployment pipelines.',
    activities: ['Clean TypeScript & Component Modularization', 'Tailwind Styling & Responsive Grid', 'Lighthouse Optimization', 'CI/CD Deployment'],
    output: 'Flawless, Live Production Web Experience',
  },
];
