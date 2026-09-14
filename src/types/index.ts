export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
}

export interface ArchitectureItem {
  title: string;
  description: string;
  concepts: string[];
}

export interface AITool {
  name: string;
  description: string;
  useCases: string[];
}
