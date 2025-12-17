import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProjectSpotlight from '@/components/home/ProjectSpotlight';
import TestimonialSection from '@/components/home/TestimonialSection';
import { generateSEOMetadata } from '@/lib/seo';

export const metadata = generateSEOMetadata({
  title: 'Professional Web Development & Digital Solutions',
  description: 'Transform your business with expert web development, Shopify stores, mobile apps, and digital marketing. Get custom solutions that drive results.',
  keywords: ['web development agency', 'custom website development', 'Shopify experts', 'mobile app developers'],
  canonical: '/'
});

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Project Spotlight Section */}
      <ProjectSpotlight />

    </main>
  );
}
