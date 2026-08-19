export type ProjectId = 'ovara' | 'arven' | 'nivra' | 'veyra' | 'zarvand';

export interface ProjectData {
  id: ProjectId;
  title: string;
  persianTitle?: string;
  tagline: string;
  category: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  accentColor: string;
  secondaryAccent: string;
  badge: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  colorPalette: { name: string; hex: string; desc: string }[];
  typography: { font: string; usage: string; sample: string }[];
  appScreens: {
    id: string;
    title: string;
    description: string;
    type: 'feed' | 'detail' | 'checkout' | 'dashboard' | 'insights' | 'booking' | 'assistant';
  }[];
  deliverables: string[];
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  deliverables: string[];
  highlight: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  persianPhase?: string;
  title: string;
  description: string;
  activities: string[];
  output: string;
}

export interface CursorState {
  type: 'default' | 'project' | 'button' | 'link' | 'drag' | 'explore' | 'close';
  text?: string;
  isHovered: boolean;
}
