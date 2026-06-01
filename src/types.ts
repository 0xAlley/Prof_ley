export interface ExploringItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface ChronicleEntry {
  id: string;
  title: string;
  description: string;
  date: string;
  link?: string;
  category: 'discovery' | 'sharing';
  tags?: string[];
  sourceName?: string; // e.g. "Protocol Spec", "X / Twitter", "Article"
}

export interface NowTask {
  name: string;
  description?: string;
}

export interface NowStatus {
  learning: NowTask[];
  building: NowTask[];
  writing: NowTask[];
  goal: string;
}
