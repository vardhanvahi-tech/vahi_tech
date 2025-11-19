export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content: "Working with this team transformed our digital presence. Their attention to detail and innovative approach exceeded all expectations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateCo",
    content: "The level of professionalism and expertise is unmatched. They delivered our project on time and the results speak for themselves.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandWave",
    content: "Exceptional service from start to finish. Our website traffic increased by 200% within the first month of launch!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "StartupHub",
    content: "They took our vision and turned it into reality. The design is stunning and the functionality is flawless.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "CTO",
    company: "DataFlow Systems",
    content: "Outstanding technical expertise combined with creative design. They're our go-to partner for all digital projects.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogiTech Solutions",
    content: "The team's dedication and problem-solving skills are remarkable. They delivered beyond what we imagined possible.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    rating: 5
  }
];
