import { TranslationSchema } from './types';

export const enTranslations: TranslationSchema = {
  nav: {
    work: 'Work',
    about: 'About',
    capabilities: 'Capabilities',
    process: 'Process',
    contact: 'Contact',
    status: 'Available for select projects',
    startProject: 'Start a Project',
    switchLang: 'Switch Language',
    menu: 'Menu',
    close: 'Close',
  },
  hero: {
    badge: 'Senior UI/UX Designer + Creative Developer',
    roleTag: 'Crafting living digital artifacts & interactive ecosystems',
    titleLine1: 'Crafting digital experiences',
    titleLine2: 'that feel alive & endure.',
    highlight: 'feel alive & endure.',
    subtitle:
      'Designing deep interface architectures, interactive mobile applications, and engineered web experiences with world-class mathematical precision.',
    exploreWork: 'Explore Work',
    getInTouch: 'Get in Touch',
    stat1Val: '+8 Years',
    stat1Label: 'Specialized Product Craft',
    stat2Val: '5 Ecosystems',
    stat2Label: 'Flagship Large-Scale Work',
    stat3Val: '100%',
    stat3Label: 'Commitment & Precision',
    scrollHint: 'Scroll to explore',
    availability: 'Accepting select commissions for current quarter',
    designerName: 'ERFAN MOEIN',
    shortName: 'ERFAN',
    roleLine1: 'UI DESIGNER',
    roleAmpersand: '&',
    roleLine2: 'CREATIVE DEVELOPER',
    portraitAlt: 'Portrait of Erfan, UI Designer and Creative Developer',
    location: 'TEHRAN, IR',
    experienceBadge: 'PRODUCT DESIGN + CREATIVE CODE',
    statusPill: 'AVAILABLE FOR COMMISSIONS',
    disciplines: [
      'UI/UX DESIGN',
      'PRODUCT ARCHITECTURE',
      'DESIGN SYSTEMS',
      'CREATIVE DEV & GSAP',
    ],
  },
  sectionHeadings: {
    work: {
      number: '01',
      tag: 'PORTFOLIO HIGHLIGHTS',
      title: 'Selected Work (2024–2026)',
      description:
        'Five flagship digital ecosystems spanning luxury commerce, autonomous AI workspaces, geospatial travel, biometric wellness, and institutional fintech.',
    },
    about: {
      number: '02',
      tag: 'BACKGROUND & APPROACH',
      title: 'About & Design Philosophy',
      description:
        'Bridging the gap between minimalist aesthetics, structured software architecture, and 60fps micro-animations to create products that feel tangible.',
    },
    capabilities: {
      number: '03',
      tag: 'CORE SPECIALIZATIONS',
      title: 'Capabilities & Technical Depth',
      description:
        'Full-cycle design and frontend engineering services—from bidirectional design token systems to high-performance animation engines.',
    },
    process: {
      number: '04',
      tag: 'CRAFT METHODOLOGY',
      title: 'Six-Phase Design to Delivery',
      description:
        'A disciplined, repeatable engineering methodology that transforms complex business requirements into fluid, high-converting digital interfaces.',
    },
    contact: {
      number: '05',
      tag: 'INITIATE COLLABORATION',
      title: "Let's Build Something Exceptional",
      description:
        'Have a flagship project or design system in mind? Reach out to discuss scope, timeline, and collaboration details. Direct response within 24 hours.',
    },
  },
  projects: {
    ovara: {
      title: 'Ovara',
      tagline: 'Hyper-personalized luxury commerce ecosystem with bidirectional typographic balance and 3D materials inspection.',
      category: 'Luxury Commerce & Modern Fashion',
      year: '2024–2025',
      client: 'Ovara Luxury Studio',
      role: 'Lead Product Designer & UI Engineer',
      timeline: '4 Months',
      overview:
        'Ovara is an ultra-luxury digital commerce ecosystem designed for discerning consumers. It blends natural titanium material aesthetics, fluid haptic category carousels, bidirectional (RTL/LTR) typographic balance, and sub-16ms filter responsiveness.',
      challenge:
        'Traditional luxury brands often struggle to translate tactile exclusivity into digital screens, suffering from generic grid layouts and clumsy multilingual support.',
      solution:
        'Architected an editorial magazine-inspired canvas with 3D titanium material inspectors, interactive colorway toggles, VIP drop cards, and an effortless one-touch sticky checkout sheet.',
      metrics: [
        { label: 'Conversion Rate', value: '+43%' },
        { label: 'Time on Page', value: '4.8 Min' },
        { label: 'VIP Buyer Satisfaction', value: '99.4%' },
      ],
      tags: ['Luxury Design', 'Bidirectional System', '3D Titanium Inspector', 'Haptic Animation'],
      deliverables: [
        '50+ High-fidelity Mobile Screens in Figma',
        'Bidirectional Design System with Vazirmatn & Sans tokens',
        'Interactive GSAP-driven Micro-prototypes',
        'Production-ready Frontend Code Guidelines',
      ],
      storySteps: [
        {
          number: '01',
          title: 'Shopping Home & Curated Feed',
          tagline: 'Hyper-personalized luxury commerce feed with bidirectional typographic balance.',
          description:
            'Designed to break away from sterile transactional grids. Ovara introduces editorial drop cards, haptic category carousels, and VIP access badges tailored for Middle Eastern luxury consumers.',
          features: [
            'Variable Persian Vazirmatn & Sans typographic hierarchy',
            'Tactile category pills with custom pastel accents',
            'Curated drop banners with subtle metallic sheen',
          ],
        },
        {
          number: '02',
          title: 'Predictive Discovery & Search',
          tagline: 'Natural language search with instant fuzzy matching and interactive wishlist states.',
          description:
            'A distraction-free discovery canvas enabling shoppers to filter through 4,500+ curated luxury items with zero layout shift and sub-16ms filter response times.',
          features: [
            'Instantaneous category & price range filtering',
            'Micro-animated wishlist bookmarking states',
            'Smart query auto-complete with visual thumbnails',
          ],
        },
        {
          number: '03',
          title: 'Tactile Product Architecture',
          tagline: '3D titanium materials inspector with interactive colorways & real-time inventory.',
          description:
            'Every millimeter of the product page is calibrated for tangible delight. Includes real-time storage matrix switches, verified seller authenticity seals, and sticky purchase triggers.',
          features: [
            'Interactive Natural Titanium colorway switcher',
            'Authenticity verification seal & customs audit tag',
            'One-touch sticky purchase bottom sheet',
          ],
        },
        {
          number: '04',
          title: 'Frictionless Checkout & VIP Tracker',
          tagline: 'Streamlined 3-step checkout with live packaging status and courier dispatch telemetry.',
          description:
            'Reduced cart abandonment by 43% with biometric payment support, instant address verification, and real-time delivery timelines.',
          features: [
            'One-tap payment tokenization with secure enclave integration',
            'Live GPS courier route preview & dispatch timeline',
            'Interactive unboxing confirmation ceremony',
          ],
        },
      ],
      screens: [
        { id: 'feed', title: 'Luxury Feed', description: 'Curated editorial drops & VIP access cards' },
        { id: 'detail', title: 'Materials Inspector', description: 'Titanium chassis toggle & authenticity seals' },
        { id: 'checkout', title: 'Frictionless Bag', description: '3-step checkout with instant address validation' },
      ],
    },
    arven: {
      title: 'Arven',
      tagline: 'Autonomous AI workspace, analytical sprint planning, and strategic ideation ecosystem.',
      category: 'Enterprise AI & Cognitive Productivity',
      year: '2024–2025',
      client: 'Arven Labs Corporation',
      role: 'Lead UX Architect & Interactive Systems Engineer',
      timeline: '5 Months',
      overview:
        'Arven is a next-generation cognitive workspace unifying local LLM reasoning, interactive mind mapping, and multi-project sprint planning into an ultra-focused dark obsidian canvas.',
      challenge:
        'Enterprise AI tools often feel like disconnected chat widgets, leaving knowledge workers overwhelmed by unstructured conversational outputs.',
      solution:
        'Created a unified hybrid command center featuring automated meeting summaries, structured action item extractors, and visual workload load-balancing charts.',
      metrics: [
        { label: 'Team Velocity', value: '+2.8x' },
        { label: 'Task Cycle Time', value: '-54%' },
        { label: 'Org Adoption Rate', value: '94.1%' },
      ],
      tags: ['Autonomous AI', 'Dark Theme Design System', 'Team Workspace', 'Analytical Dashboards'],
      deliverables: [
        'Obsidian Dark Design System with Violet Phosphor tokens',
        'End-to-end AI Prompt & Task Generation User Flows',
        '40+ Custom Figma Icons & Graph Components',
        'Interactive Frontend Animation Library',
      ],
      storySteps: [
        {
          number: '01',
          title: 'Command Center & Executive Overview',
          tagline: 'Global project health telemetry, team velocity, and daily AI synthesis.',
          description:
            'A centralized command matrix offering immediate situational awareness through live velocity sparklines, workload meters, and automated morning briefing cards.',
          features: [
            'Real-time sprint velocity & resource balance visualizers',
            'Smart task prioritization cards with algorithmic deadline estimation',
            'Instant quick-action command palette for swift navigation',
          ],
        },
        {
          number: '02',
          title: 'Cognitive Assistant & Strategic Prompts',
          tagline: 'Multimodal AI dialogue with structured action item synthesis and code execution.',
          description:
            'A distraction-free conversational canvas with syntax-highlighted code blocks, quick-prompt chips, and local private enterprise memory.',
          features: [
            'Curated system prompt templates for research, architecture, and code',
            'One-click extraction of dialogue into tracked Kanban tasks',
            'Air-gapped private model toggle for sensitive enterprise data',
          ],
        },
        {
          number: '03',
          title: 'Interactive Sprint Kanban & Task Canvas',
          tagline: 'Intelligent backlog canvas with automated load balancing and deadline warnings.',
          description:
            'Fluid drag-and-drop task architecture featuring customizable sprint cadences, tag hierarchies, and predictive risk indicators.',
          features: [
            'Multi-view flexibility: Kanban board, calendar matrix, and Gantt timeline',
            'Smart assignee auto-routing based on individual capacity',
            'Zero-latency real-time collaborative state sync',
          ],
        },
      ],
      screens: [
        { id: 'dashboard', title: 'Command Matrix', description: 'Multi-project telemetry & sprint velocity' },
        { id: 'assistant', title: 'Cognitive Assistant', description: 'Multimodal LLM dialogue & scenario execution' },
        { id: 'tasks', title: 'Sprint Kanban', description: 'Interactive backlog with deadline warnings' },
      ],
    },
    nivra: {
      title: 'Nivra',
      tagline: 'Editorial travel magazine & intelligent companion with cinematic destination discovery and itinerary planning.',
      category: 'Luxury Travel & Geospatial Discovery',
      year: '2024',
      client: 'Nivra Travel Collective',
      role: 'Product Experience Designer & Creative Technologist',
      timeline: '3.5 Months',
      overview:
        'Nivra captures the romance of exploration through cinematic destination imagery, algorithmic day-by-day itinerary sequencing, curated boutique stays, and real-time offline geospatial guides.',
      challenge:
        'Mainstream travel apps are cluttered with banner ads, aggressive price comparison popups, and overwhelming choices that spoil the joy of planning.',
      solution:
        'Designed an editorial magazine experience with serene turquoise and sky blue accents, intelligent travel companions, and stress-free offline routes.',
      metrics: [
        { label: 'Trips Planned', value: '+18,000' },
        { label: 'Traveler Rating', value: '4.9 / 5.0' },
        { label: 'Hidden Fees Saved', value: '26%' },
      ],
      tags: ['Editorial Travel', 'Smart Itinerary', 'Turquoise Palette', 'Interactive Maps'],
      deliverables: [
        'Bespoke Mobile UX Architecture for iOS & Android',
        '45+ Destination Storyboards & Boutique Booking Screens',
        'Editorial Typography & Light Glass UI Tokens',
        'Custom Meteorological & Navigation Vector System',
      ],
      storySteps: [
        {
          number: '01',
          title: 'Cinematic Destination Exploration',
          tagline: 'Immersive destination cards with real-time weather, crowd metrics, and seasonal guides.',
          description:
            'Explore breathtaking getaways with full-bleed photography, seasonal crowd meters, cultural etiquette guides, and curated photo spots.',
          features: [
            'Curated themes: Desert Solitude, Untouched Coastlines & Heritage',
            'Monthly travel weather forecasts & live crowd density meters',
            'One-tap destination bookmarking into active itineraries',
          ],
        },
        {
          number: '02',
          title: 'Algorithmic Day-by-Day Itinerary Planner',
          tagline: 'Optimized travel routes calculating transit times, rest breaks, and dining spots.',
          description:
            'Stress-free planning with dynamic morning, afternoon, and evening slots, offline transit maps, and smart budget estimators.',
          features: [
            'Sequential daily schedules with realistic transit buffers',
            'Estimated fuel, entrance fee, and dining budget breakdowns',
            'Real-time multi-traveler collaborative planning sync',
          ],
        },
        {
          number: '03',
          title: 'Curated Boutique Stays & Local Expeditions',
          tagline: 'Reserve secluded villas, heritage homes, and verified host experiences.',
          description:
            'A transparent booking portal showcasing unedited architectural photography, host accreditation badges, and best-rate guarantees.',
          features: [
            'Comprehensive amenity checklist with transparent pricing',
            'Instant booking confirmation with 24/7 concierge support',
            'Verified local guide profiles with authentic traveler reviews',
          ],
        },
      ],
      screens: [
        { id: 'feed', title: 'Destinations', description: 'Cinematic travel cards with real-time weather' },
        { id: 'booking', title: 'Itinerary Planner', description: 'Day-by-day scheduling & budget breakdowns' },
        { id: 'detail', title: 'Boutique Stays', description: 'Transparent reservation for secluded retreats' },
      ],
    },
    varya: {
      title: 'Varya',
      tagline: 'Biometric telemetry assistant, continuous health monitoring, and intelligent personal wellness ecosystem.',
      category: 'Digital Health & Biometrics',
      year: '2024',
      client: 'Varya Health Tech',
      role: 'Lead Product Designer & Health Interaction Specialist',
      timeline: '4 Months',
      overview:
        'Varya translates complex biometric sensor streams—heart rate variability, blood oxygen, 4-stage sleep cycles, and respiratory rates—into calming, actionable self-care routines.',
      challenge:
        'Raw medical numbers and complex charts often induce anxiety in users rather than fostering mindful wellness habits.',
      solution:
        'Engineered an organic biorhythm dashboard with soft coral and emerald accents, reassuring diagnostic summaries, and 3-minute diaphragmatic breathing loops.',
      metrics: [
        { label: 'Sleep Quality Gain', value: '+38%' },
        { label: 'Daily Adherence', value: '87.5%' },
        { label: 'Analysis Accuracy', value: '99.1%' },
      ],
      tags: ['Digital Health', 'Data Visualization', 'Biometric Waves', 'Sleep Telemetry'],
      deliverables: [
        'Medical-grade Component Library meeting WCAG AAA contrast',
        'Heart Rate, Stress, and Sleep Architecture Dashboards',
        'Emergency Alert & Resonant Breathing Interaction Flows',
        'Smartwatch & Mobile Companion UX Specification',
      ],
      storySteps: [
        {
          number: '01',
          title: 'Daily Vitality & Readiness Dashboard',
          tagline: 'Morning physiological readiness score based on overnight HRV and resting pulse.',
          description:
            'Start each day with clear readiness metrics, energy expenditure forecasts, and personalized activity intensity recommendations.',
          features: [
            'Proprietary 1–100 Daily Readiness Score algorithm display',
            'Continuous resting heart rate tracking with trend indicators',
            'Dynamic exertion guidance to prevent physical burnout',
          ],
        },
        {
          number: '02',
          title: '4-Stage Sleep Architecture & Recovery',
          tagline: 'Deep, REM, and Light sleep stage breakdown with overnight oxygen stability analysis.',
          description:
            'Comprehensive sleep timeline charts paired with scientific sleep hygiene recommendations to reduce sleep onset latency.',
          features: [
            'Visual hypnogram with percentage breakdown of sleep stages',
            'Continuous SpO2 blood oxygen stability monitoring',
            'Smart wake-up window during light sleep cycles',
          ],
        },
        {
          number: '03',
          title: 'Resonant Breathing & Stress Decompression',
          tagline: 'Guided diaphragmatic breathwork loops designed to stabilize pulse within 3 minutes.',
          description:
            'Interactive breathing sessions featuring gentle haptic rhythms and fluid bio-wave visualizers that lower sympathetic nervous arousal.',
          features: [
            'Box breathing and 4-7-8 relaxation audio-visual guides',
            'Live pulse stabilization feedback during active sessions',
            'Historical stress log correlating environmental triggers',
          ],
        },
      ],
      screens: [
        { id: 'dashboard', title: 'Vitality Score', description: 'Morning readiness score & heart rate telemetry' },
        { id: 'insights', title: 'Sleep Analysis', description: '4-stage sleep cycles & nocturnal SpO2' },
        { id: 'detail', title: 'Breathwork', description: 'Guided diaphragmatic breathing loop' },
      ],
    },
    zarvand: {
      title: 'Zarvand',
      tagline: 'High-frequency institutional trading terminal, multi-asset portfolio, and ultra-secure order routing.',
      category: 'Institutional Fintech & Wealth Infrastructure',
      year: '2023–2024',
      client: 'Zarvand Financial Capital',
      role: 'Lead Product Designer & Financial Systems Engineer',
      timeline: '6 Months',
      overview:
        'Zarvand is an institutional financial terminal engineered for ultra-fast order execution, multi-currency portfolio management, and real-time market depth visualization with 99.99% uptime.',
      challenge:
        'Professional asset managers require maximum data density, sub-millisecond execution clarity, and absolute zero visual ambiguity during volatile markets.',
      solution:
        'Designed an ultra-crisp dark terminal featuring gold and emerald accents, two-tap order placement, real-time depth ladders, and multi-sig asset protection vaults.',
      metrics: [
        { label: 'Monthly Trading Vol', value: '+$450M' },
        { label: 'Order Execution Latency', value: '< 12ms' },
        { label: 'Platform Uptime', value: '99.99%' },
      ],
      tags: ['Institutional Fintech', 'Sub-12ms Execution', 'Live Depth Ladder', 'Multi-sig Security'],
      deliverables: [
        'Full Mobile & Web Trading Terminal Interface Architecture',
        'Specialized Orderbook, Depth Chart & Execution Components',
        '2FA Biometric & Hardware Key Security User Flows',
        'Design System Documentation for Core Trading Engine Team',
      ],
      storySteps: [
        {
          number: '01',
          title: 'Asset Matrix & Portfolio Performance',
          tagline: 'Real-time multi-asset valuation, unrealized PnL, and automated risk allocation.',
          description:
            'A unified financial overview tracking cash, equities, and commodities with comprehensive annual and monthly yield analytics.',
          features: [
            'Visual asset allocation breakdown with risk exposure limits',
            'Instant toggle between fiat, gold ounces, and international pairs',
            'Discreet privacy mask mode for trading in public environments',
          ],
        },
        {
          number: '02',
          title: 'Live Orderbook & Fast Execution Engine',
          tagline: 'Dynamic bid/ask depth ladder with sub-12ms conditional order routing.',
          description:
            'A precision interface for placing limit, market, and stop-loss orders with automatic slippage and fee calculation.',
          features: [
            'Color-coded market depth visualizer with cumulative volume',
            'One-touch percentage slider for rapid position sizing',
            'Inline order confirmation modal with zero chart obstruction',
          ],
        },
        {
          number: '03',
          title: 'Multi-Signature Vault & Institutional Security',
          tagline: 'Air-gapped security protocols for large-volume capital transfers and auditing.',
          description:
            'Granular access control, multi-custodian sign-offs for high-value transactions, hardware key support, and instant audit trails.',
          features: [
            'Biometric and FIDO2 hardware security key verification',
            'Whitelisted withdrawal address management with time-locks',
            'Automated compliance reporting with CSV & PDF exports',
          ],
        },
      ],
      screens: [
        { id: 'dashboard', title: 'Asset Matrix', description: 'Portfolio valuation & live PnL telemetry' },
        { id: 'feed', title: 'Live Orderbook', description: 'Sub-12ms order execution & depth visualizer' },
        { id: 'detail', title: 'Vault Security', description: 'Multi-sig authorization & audit reporting' },
      ],
    },
  },
  about: {
    title: 'About & Design Philosophy',
    badge: 'Lead Product Designer & Web Engineer',
    bioP1:
      "I am Erfan Moein, a Senior UI/UX Designer and Creative Frontend Engineer with over 8 years of experience building high-caliber digital products. My core focus lies at the intersection of timeless visual craftsmanship, structural clarity, and mathematically precise frontend engineering.",
    bioP2:
      'Throughout my career, I have led the design and architecture of major digital ecosystems across Middle Eastern and global markets—from bidirectional luxury commerce with bespoke Persian typography to enterprise AI command centers and institutional trading terminals.',
    bioP3:
      'I believe world-class digital design is born from the harmony of three disciplines: typographic rigor, cognitive psychology, and fluid 60fps interaction physics. My code is a direct extension of my Figma canvases: modular, performant, and completely free of artificial noise.',
    philosophyTitle: 'Core Craft Philosophy',
    philosophyQuote:
      '"True simplicity is not the absence of clutter; it is the mastery of order, intentionality, and quiet purpose amidst immense complexity."',
    stat1Val: '+8',
    stat1Label: 'Years of Specialized Product Craft',
    stat2Val: '+35',
    stat2Label: 'Successful Enterprise & Startup Launches',
    stat3Val: '100%',
    stat3Label: 'Client Satisfaction & On-time Delivery',
    focusTitle: 'Current Areas of Focus',
    focusItems: [
      {
        title: 'Bidirectional RTL / LTR Systems',
        desc: 'Typographic harmony and optical balance across Persian, Arabic, and Latin script systems.',
      },
      {
        title: 'Creative Interaction & GSAP Physics',
        desc: '60fps micro-animations, fluid layout morphing, and haptic-feeling digital components.',
      },
      {
        title: 'Scalable Enterprise Design Systems',
        desc: 'Strict multi-tier token architectures, atomic component libraries, and direct code syncing.',
      },
    ],
    techStackTitle: 'Core Tooling & Technologies',
  },
  capabilities: {
    badge: 'CORE SERVICES',
    title: 'Comprehensive Design & Engineering Services',
    description:
      'Combining deep human-centered design insight with modern full-stack frontend capabilities to take digital products from blank canvas to production excellence.',
    items: [
      {
        number: '01',
        title: 'UI/UX & Product Design',
        subtitle: 'Information Architecture & Systems',
        description:
          'End-to-end digital product design from initial user research and wireframing to pixel-perfect interactive Figma prototypes with rigorous usability validation.',
        skills: ['User Research & Competitive Audits', 'Information Architecture (IA)', 'Interactive Figma Prototyping', 'Usability & A/B Testing'],
        deliverables: ['Production-ready Figma Design Files with Auto-Layout', 'Complete User Journey Maps', 'Usability Findings & Recommendations'],
        highlight: 'Specialized focus on bidirectional harmony across RTL and LTR scripts',
      },
      {
        number: '02',
        title: 'Enterprise Design Systems',
        subtitle: 'Scalable Token & Component Architecture',
        description:
          'Architecting unified multi-brand token structures (color, spacing, typography) and comprehensive atomic component libraries for cross-functional engineering teams.',
        skills: ['Design Token Taxonomy', 'Atomic Component Architecture', 'Brand Guideline Documentation', 'Figma Variant & Variable Management'],
        deliverables: ['Comprehensive Figma Component Kits', 'JSON / CSS Token Packages', 'Interactive Component Documentation'],
        highlight: 'Reduces feature delivery time by over 60% across engineering sprints',
      },
      {
        number: '03',
        title: 'Creative Frontend Engineering',
        subtitle: 'High-Performance Web & Animation',
        description:
          'Transforming static visual concepts into lightning-fast, accessible web applications built with React, TypeScript, Tailwind CSS, and 60fps GSAP scroll interactions.',
        skills: ['Modern React & Next.js Ecosystem', 'TypeScript & Tailwind CSS', 'GSAP & ScrollTrigger Animation Physics', 'Core Web Vitals & SEO Optimization'],
        deliverables: ['Modular, Maintainable Clean Codebases', 'Pixel-perfect Responsive Layouts across all viewports', '95+ Lighthouse Performance Audits'],
        highlight: 'Buttery-smooth 60fps interactions even on resource-constrained devices',
      },
      {
        number: '04',
        title: 'Product Strategy & UX Audit',
        subtitle: 'Conversion Optimization & Modernization',
        description:
          'Deep evaluation of existing software products, uncovering user friction points, optimizing conversion funnels, and elevating brand aesthetics to world-class standards.',
        skills: ['Heuristic UX Auditing', 'Conversion Rate Optimization (CRO)', 'Onboarding & Checkout Funnel Redesign', 'Brand Modernization Strategy'],
        deliverables: ['Comprehensive UX Health Audit & Action Roadmap', 'High-impact UI Redesign Concepts', 'Success Metric & Analytics Frameworks'],
        highlight: 'Average 35% improvement across primary user activation metrics',
      },
    ],
  },
  process: {
    badge: 'EXECUTION METHODOLOGY',
    title: 'Disciplined Six-Phase Craft Process',
    description:
      'A structured, transparent methodology ensuring flawless execution, predictability, and uncompromising quality at every step of development.',
    steps: [
      {
        number: '01',
        phase: 'Discovery & Research',
        title: 'Strategic Alignment & User Problem Mapping',
        description:
          'Deep dive into business goals, competitive benchmarking, real user pain points, and definition of verifiable Key Performance Indicators (KPIs).',
        activities: ['Stakeholder Briefing Sessions', 'Market & Competitor Analysis', 'User Persona & Scenario Formulation'],
        output: 'Strategic Project Brief & Architecture Roadmap',
      },
      {
        number: '02',
        phase: 'Architecture & Flows',
        title: 'Information Structuring & Low-Fidelity Wireframing',
        description:
          'Mapping out core user journeys, organizing information hierarchies, and building foundational structural wireframes without decorative distractions.',
        activities: ['Information Architecture (Sitemap)', 'User Journey & Task Flows', 'Low-Fidelity Layout Wireframes'],
        output: 'Validated Structural Blueprint for Key Screens',
      },
      {
        number: '03',
        phase: 'Visual Craft & Systems',
        title: 'High-Fidelity Interface & Design Token Creation',
        description:
          'Defining typography scales, color palettes, micro-interactions, and crafting full-fidelity screens with absolute optical harmony.',
        activities: ['Visual Moodboarding & Identity Exploration', 'Figma High-Fidelity UI Screens', 'Design Token & Component Setup'],
        output: 'Complete High-Fidelity UI Screens Ready for Testing',
      },
      {
        number: '04',
        phase: 'Prototyping & Testing',
        title: 'Interactive Animation & User Validation',
        description:
          'Linking screens into clickable, micro-animated prototypes to test tangible physical feel, transition timing, and resolve usability bottlenecks.',
        activities: ['Clickable High-Fidelity Prototype', 'Usability Testing Sessions', 'Feedback Integration & Iterative Refinement'],
        output: 'Fully Validated Interactive Prototype',
      },
      {
        number: '05',
        phase: 'Frontend Engineering',
        title: 'Production-Grade Coding & Motion Physics',
        description:
          'Translating designs into clean, modular React + TypeScript code with GSAP scroll mechanics and full bidirectional RTL/LTR support.',
        activities: ['Component Development in React & TypeScript', 'GSAP & ScrollTrigger Integration', 'Cross-Device & Accessibility Testing'],
        output: 'Clean, Tested, Production-Ready Codebase',
      },
      {
        number: '06',
        phase: 'Handoff & Launch Support',
        title: 'Documentation, Deployment & Quality Assurance',
        description:
          'Delivering complete source files, token libraries, developer guidelines, and providing hands-on support through deployment.',
        activities: ['Design Token Library & Handoff Docs', 'Technical Walkthrough Meeting', 'Post-Launch QA Support'],
        output: 'Final Turnkey Delivery with Complete Documentation',
      },
    ],
  },
  contact: {
    tag: 'GET IN TOUCH',
    title: "Let's Build Something Exceptional",
    description:
      'Whether you are launching a flagship new product, modernizing an existing enterprise ecosystem, or need elite design consultation, I am ready to collaborate.',
    directTitle: 'Direct Channels',
    emailLabel: 'Direct Email',
    telegramLabel: 'Telegram',
    githubLabel: 'GitHub',
    locationLabel: 'Location',
    locationVal: 'Iran / Available for Worldwide Remote Commissions',
    formTitle: 'Transmit Project Brief',
    nameLabel: 'Your Name *',
    namePlaceholder: 'e.g. Alexander Wright',
    emailInputLabel: 'Email Address *',
    emailPlaceholder: 'alexander@company.com',
    serviceLabel: 'Required Service',
    serviceOptions: ['Mobile & Web UI/UX Design', 'Enterprise Design System', 'Creative Frontend Engineering', 'Product UX Audit & Strategy'],
    timelineLabel: 'Target Timeline',
    timelineOptions: ['Urgent (< 2 Weeks)', 'Within 1 Month', 'Flexible Q3/Q4'],
    detailsLabel: 'Project Overview',
    detailsPlaceholder: 'Briefly describe your product goals, scope, and key deliverables...',
    submitBtn: 'Send Project Brief',
    submittedTitle: 'Brief Successfully Transmitted!',
    submittedDesc: 'Thank you for reaching out. I will review your requirements and reply via email within 24 hours.',
    closeBtn: 'Close Dialog',
    note: 'All project inquiries are handled under strict confidentiality',
  },
  footer: {
    tagline: 'Designing deep interface architectures and living digital artifacts.',
    rights: 'All rights reserved.',
    designedBy: 'Designed & Engineered by Erfan Moein',
    builtWith: 'Crafted with React, TypeScript & GSAP Interactive Physics',
    backToTop: 'Back to Top',
    navigation: 'Navigation',
    social: 'Channels',
  },
  caseStudy: {
    viewCaseStudy: 'View Full Case Study',
    backToWork: 'Back to Projects',
    nextCaseStudy: 'Next Project',
    prevCaseStudy: 'Previous Project',
    caseStudyNumber: 'Case Study No.',
    client: 'Client',
    year: 'Year',
    role: 'Role',
    timeline: 'Timeline',
    overviewTitle: 'Project Overview & Objectives',
    challengeTitle: 'The Business & UX Challenge',
    solutionTitle: 'Strategic Solution & Architecture',
    metricsTitle: 'Quantifiable Results & Metrics',
    designSystemTitle: 'Design System & Visual Tokens',
    deviceStudioTitle: 'Interactive Device Studio & App Screens',
    deliverablesTitle: 'Deliverables & Artifacts',
    interactiveScreens: 'Interactive Screen Views',
    switchScreenHint: 'Click screen buttons to toggle the device preview',
    close: 'Close Case Study',
  },
  quickInquiry: {
    badge: 'START A PROJECT WITH ERFAN',
    title: 'Quick Project Inquiry Form',
    nameLabel: 'Your Name *',
    namePlaceholder: 'e.g. Erfan Moein',
    emailLabel: 'Email Address *',
    emailPlaceholder: 'erfan@studio.design',
    serviceLabel: 'Service',
    serviceOptions: ['Mobile UI/UX', 'Design System', 'Creative Dev', 'Consulting'],
    timelineLabel: 'Timeline',
    timelineOptions: ['Urgent (< 2 wks)', 'Within 1 Month', 'Flexible Q3/Q4'],
    detailsLabel: 'Project Details',
    detailsPlaceholder: 'Briefly describe what you are building...',
    submitBtn: 'Send Inquiry',
    successTitle: 'Brief Transmitted!',
    successDesc: 'Thank you. I will evaluate your scope and reply via email in under 24 hours.',
    closeBtn: 'Close',
  },
  cursor: {
    view: 'VIEW ↗',
    explore: 'EXPLORE ↗',
    caseStudy: 'CASE STUDY ↗',
    expand: 'EXPAND',
    send: 'SEND',
    top: 'TOP',
    drag: 'DRAG',
    close: 'CLOSE',
    link: 'LINK',
  },
  common: {
    caseStudy: 'Case Study',
    interactivePreview: 'Interactive Device Preview',
    year: 'Year',
    client: 'Client',
    category: 'Category',
    role: 'Role',
  },
};
