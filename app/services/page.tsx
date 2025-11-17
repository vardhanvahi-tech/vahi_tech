import { mockServices } from '@/data/mockServices';
import ServiceCard from '@/components/services/ServiceCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            We specialize in delivering high-quality web development, e-commerce, mobile apps, and WordPress solutions tailored to your business needs.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {mockServices.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="slideUp"
              delay={index * 0.05} // 50ms stagger delay
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
