export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  completionDate: string;
  images: string[];
  features: string[];
}

export interface ProjectCategory {
  id: string;
  name: string;
}