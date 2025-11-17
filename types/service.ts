export interface IService {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name or path
  features?: string[];
  link?: string;
}
