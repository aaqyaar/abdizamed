export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  github: string;
  technologies: string[];
}

export type Projects = Project[];
