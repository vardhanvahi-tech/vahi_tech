export interface IProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  additionalImages?: string[]; // Optional array of additional image URLs
  category: 'Shopify' | 'Mobile' | 'WordPress' | 'Custom Web';
  featured?: boolean;
  tags?: string[];
  completedDate?: string;
}
