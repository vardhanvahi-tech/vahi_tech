import { notFound } from 'next/navigation';
import { mockServices } from '@/data/mockServices';
import { generateSEOMetadata } from '@/lib/seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { id } = await params;
  const service = mockServices.find(s => s.id === id);
  
  if (!service) {
    return generateSEOMetadata({
      title: 'Service Not Found',
      noIndex: true
    });
  }

  return generateSEOMetadata({
    title: `${service.title} - Professional Web Development Services`,
    description: service.description,
    keywords: [service.title.toLowerCase(), 'web development', 'professional services'],
    canonical: `/services/${id}`
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = mockServices.find(s => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            {service.features && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <Link href="/contact">
              <Button>Get Started</Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}