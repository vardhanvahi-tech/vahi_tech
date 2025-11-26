import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProjectSpotlight from '@/components/home/ProjectSpotlight';
import TestimonialSection from '@/components/home/TestimonialSection';

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
