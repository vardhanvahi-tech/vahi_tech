export interface IProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Shopify' | 'Mobile' | 'WordPress' | 'Custom Web';
  featured?: boolean;
  tags?: string[];
  completedDate?: string;
}
