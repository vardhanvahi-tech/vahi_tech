import { IService } from '@/types/service';

export const mockServices: IService[] = [
  {
    id: '1',
    title: 'Custom Websites',
    description: 'Tailored web solutions built from the ground up to meet your unique business needs. We create fast, scalable, and modern websites using the latest technologies.',
    icon: 'FaCode',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Performance',
      'Custom Functionality',
      'Scalable Architecture'
    ],
    link: '/contact'
  },
  {
    id: '2',
    title: 'Shopify Development',
    description: 'Expert Shopify store development and customization. From theme design to custom app integration, we help you build a powerful e-commerce presence.',
    icon: 'FaShoppingCart',
    features: [
      'Custom Theme Development',
      'App Integration',
      'Payment Gateway Setup',
      'Inventory Management',
      'Performance Optimization'
    ],
    link: '/contact'
  },
  {
    id: '3',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android. Native performance with efficient development.',
    icon: 'FaMobileAlt',
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'Native Performance',
      'Push Notifications',
      'Offline Functionality'
    ],
    link: '/contact'
  },
  {
    id: '4',
    title: 'WordPress Solutions',
    description: 'Professional WordPress websites with custom themes and plugins. Perfect for blogs, business sites, and content-driven platforms.',
    icon: 'FaWordpress',
    features: [
      'Custom Theme Design',
      'Plugin Development',
      'Content Management',
      'SEO Optimization',
      'Security Hardening'
    ],
    link: '/contact'
  }
];
