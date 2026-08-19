export type Language = 'fa' | 'en';

export interface ProjectTranslation {
  title: string;
  tagline: string;
  category: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  deliverables: string[];
  storySteps: {
    number: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
  }[];
  screens: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface TranslationSchema {
  nav: {
    work: string;
    about: string;
    capabilities: string;
    process: string;
    contact: string;
    status: string;
    startProject: string;
    switchLang: string;
    menu: string;
    close: string;
  };
  hero: {
    badge: string;
    roleTag: string;
    titleLine1: string;
    titleLine2: string;
    highlight: string;
    subtitle: string;
    exploreWork: string;
    getInTouch: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    scrollHint: string;
    availability: string;
    designerName: string;
    shortName: string;
    roleLine1: string;
    roleAmpersand: string;
    roleLine2: string;
    portraitAlt: string;
    location: string;
    experienceBadge: string;
    statusPill: string;
    disciplines: string[];
  };
  sectionHeadings: {
    work: { number: string; tag: string; title: string; description: string };
    about: { number: string; tag: string; title: string; description: string };
    capabilities: { number: string; tag: string; title: string; description: string };
    process: { number: string; tag: string; title: string; description: string };
    contact: { number: string; tag: string; title: string; description: string };
  };
  projects: {
    ovara: ProjectTranslation;
    arven: ProjectTranslation;
    nivra: ProjectTranslation;
    varya: ProjectTranslation;
    zarvand: ProjectTranslation;
  };
  about: {
    title: string;
    badge: string;
    bioP1: string;
    bioP2: string;
    bioP3: string;
    philosophyTitle: string;
    philosophyQuote: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    focusTitle: string;
    focusItems: { title: string; desc: string }[];
    techStackTitle: string;
  };
  capabilities: {
    badge: string;
    title: string;
    description: string;
    items: {
      number: string;
      title: string;
      subtitle: string;
      description: string;
      skills: string[];
      deliverables: string[];
      highlight: string;
    }[];
  };
  process: {
    badge: string;
    title: string;
    description: string;
    steps: {
      number: string;
      phase: string;
      title: string;
      description: string;
      activities: string[];
      output: string;
    }[];
  };
  experienceSection: {
    philosophy: {
      number: string;
      tag: string;
      headlineLine1: string;
      headlineLine2: string;
      headlineLine3: string;
      paragraph1: string;
      paragraph2: string;
      quoteAuthor: string;
      pillars: {
        number: string;
        title: string;
        desc: string;
      }[];
    };
    approach: {
      number: string;
      tag: string;
      title: string;
      description: string;
      steps: {
        number: string;
        phase: string;
        title: string;
        desc: string;
        bulletPoints: string[];
        hudTitle: string;
        hudMetrics: { label: string; val: string }[];
      }[];
    };
    skills: {
      number: string;
      tag: string;
      title: string;
      description: string;
      categories: {
        id: string;
        name: string;
        count: string;
        description: string;
        items: {
          name: string;
          badge: string;
          level: string;
        }[];
      }[];
    };
    cinematicContact: {
      number: string;
      tag: string;
      headline1: string;
      headline2: string;
      headline3: string;
      subtext: string;
      copyEmail: string;
      copied: string;
      startInquiry: string;
      directEmail: string;
      status: string;
      timezone: string;
    };
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    directTitle: string;
    emailLabel: string;
    telegramLabel: string;
    githubLabel: string;
    locationLabel: string;
    locationVal: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    serviceOptions: string[];
    timelineLabel: string;
    timelineOptions: string[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    submittedTitle: string;
    submittedDesc: string;
    closeBtn: string;
    note: string;
  };
  footer: {
    tagline: string;
    rights: string;
    designedBy: string;
    builtWith: string;
    backToTop: string;
    navigation: string;
    social: string;
  };
  caseStudy: {
    viewCaseStudy: string;
    backToWork: string;
    nextCaseStudy: string;
    prevCaseStudy: string;
    caseStudyNumber: string;
    client: string;
    year: string;
    role: string;
    timeline: string;
    overviewTitle: string;
    challengeTitle: string;
    solutionTitle: string;
    metricsTitle: string;
    designSystemTitle: string;
    deviceStudioTitle: string;
    deliverablesTitle: string;
    interactiveScreens: string;
    switchScreenHint: string;
    close: string;
  };
  quickInquiry: {
    badge: string;
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    serviceOptions: string[];
    timelineLabel: string;
    timelineOptions: string[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  cursor: {
    view: string;
    explore: string;
    caseStudy: string;
    expand: string;
    send: string;
    top: string;
    drag: string;
    close: string;
    link: string;
  };
  common: {
    caseStudy: string;
    interactivePreview: string;
    year: string;
    client: string;
    category: string;
    role: string;
  };
}
