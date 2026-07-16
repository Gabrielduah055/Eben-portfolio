export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  tags: string[];
  services: string[];
  image: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: { metric: string; value: string }[];
  lessons: string;
  year: number;
  featured: boolean;
}
