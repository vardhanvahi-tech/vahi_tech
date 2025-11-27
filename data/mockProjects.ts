import { IProject } from '@/types/project';

export const mockProjects: IProject[] = [
  {
    id: '1',
    title: 'Naveen masale E-commerce',
    description: 'A fully customized Shopify store for a luxury fashion brand featuring advanced filtering, wishlist functionality, and seamless checkout experience.',
    imageUrl: '/images/projects/naveen-masale.png',
    additionalImages: [
      '/images/projects/greenfarm_pos.jpeg',
      '/images/projects/greenfarm_pos.jpeg'
    ],
    category: 'Shopify',
    featured: true,
    tags: ['E-commerce', 'Shopify', 'Custom Theme', 'Luxury'],
    completedDate: '2024-01'
  },
  {
    id: '2',
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with real-time sync and social features.',
    imageUrl: '/images/projects/greenfarm_ecomm.png',
    additionalImages: [
      '/images/projects/greenfarm_pos.jpeg',
      '/images/projects/greenfarm_pos.jpeg'
    ],
    category: 'Mobile',
    featured: true,
    tags: ['React Native', 'Mobile', 'Health', 'iOS', 'Android'],
    completedDate: '2024-03'
  },
  {
    id: '3',
    title: 'JourneyMonk Travel Booking Website',
    description: 'A modern travel booking platform enabling users to search and book flights and hotels with a clean UI and seamless navigation, designed to simplify travel planning.',
    imageUrl: '/images/projects/journeymonk_website_main.png',
    additionalImages: [
      '/images/projects/journeymonk_website_1.png',
      '/images/projects/journeymonk_website_2.png'
    ],
    category: 'Custom Web',
    featured: false,
    tags: ['Landing Page', 'Brand Website', 'Lead Generation', 'UI/UX'],
    completedDate: '2024-01'
  },
  {
    id: '4',
    title: 'GreenFarm POS',
    description: 'Custom web application for property listings with advanced search, virtual tours, and agent management system.',
    imageUrl: '/images/projects/greenfarm_pos.jpeg',
    additionalImages: [
      '/images/projects/greenfarm_pos.jpeg',
      '/images/projects/greenfarm_pos.jpeg'
    ],
    category: 'Custom Web',
    featured: true,
    tags: ['Next.js', 'TypeScript', 'Real Estate', 'Custom Development'],
    completedDate: '2024-02'
  },
  // {
  //   id: '5',
  //   title: 'Organic Grocery Store',
  //   description: 'Shopify-based e-commerce platform for organic products with subscription management and local delivery integration.',
  //   imageUrl: '/images/projects/grocery-store.jpg',
  //   category: 'Shopify',
  //   featured: false,
  //   tags: ['Shopify', 'E-commerce', 'Subscriptions', 'Delivery'],
  //   completedDate: '2023-12'
  // },
  // {
  //   id: '6',
  //   title: 'Language Learning App',
  //   description: 'Mobile application for learning languages through interactive lessons, gamification, and progress tracking.',
  //   imageUrl: '/images/projects/language-app.jpg',
  //   category: 'Mobile',
  //   featured: false,
  //   tags: ['Mobile', 'Education', 'Gamification', 'React Native'],
  //   completedDate: '2024-04'
  // },
  // {
  //   id: '7',
  //   title: 'Corporate Portfolio Site',
  //   description: 'Professional WordPress website for a consulting firm with team profiles, case studies, and client testimonials.',
  //   imageUrl: '/images/projects/corporate-site.jpg',
  //   category: 'WordPress',
  //   featured: false,
  //   tags: ['WordPress', 'Corporate', 'Portfolio', 'Professional'],
  //   completedDate: '2023-10'
  // },
  // {
  //   id: '8',
  //   title: 'SaaS Dashboard Platform',
  //   description: 'Custom-built analytics dashboard with real-time data visualization, user management, and API integrations.',
  //   imageUrl: '/images/projects/saas-dashboard.jpg',
  //   category: 'Custom Web',
  //   featured: false,
  //   tags: ['React', 'Dashboard', 'Analytics', 'SaaS', 'API'],
  //   completedDate: '2024-05'
  // }
];
