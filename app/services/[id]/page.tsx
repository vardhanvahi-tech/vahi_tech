import { notFound } from 'next/navigation';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { mockServices } from '@/data/mockServices';
import { mockProjects } from '@/data/mockProjects';
import Image from 'next/image';

// Map service titles to project categories
const serviceToCategoryMap: Record<string, string> = {
  'Custom Websites': 'Custom Web',
  'Shopify Development': 'Shopify',
  'Mobile Apps': 'Mobile',
  'WordPress Solutions': 'WordPress',
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = mockServices.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  // Get related projects based on service category
  const relatedCategory = serviceToCategoryMap[service.title];
  const relatedProjects = mockProjects
    .filter((p) => p.category === relatedCategory)
    .slice(0, 3);

  return (
    <main className="min-h-screen w-full overflow-x-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <AnimatedSection animation="fadeIn">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </Link>
        </AnimatedSection>

        {/* Service Header */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="slideUp" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What We Offer
                </h2>
                <div className="prose prose-base dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Our {service.title.toLowerCase()} service is designed to help businesses of all 
                    sizes achieve their digital goals. We combine technical expertise with creative 
                    problem-solving to deliver solutions that drive real results.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Whether you're starting from scratch or looking to enhance an existing platform, 
                    our team has the experience and skills to bring your vision to life. We follow 
                    industry best practices and stay up-to-date with the latest technologies to ensure 
                    your project is built on a solid foundation.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    From initial consultation to final deployment and beyond, we're committed to 
                    delivering exceptional quality and maintaining transparent communication throughout 
                    the entire process.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Discovery & Planning
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We start by understanding your business goals, target audience, and project 
                        requirements. This phase includes research, strategy development, and creating 
                        a detailed project roadmap.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Design & Development
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our designers create beautiful, user-friendly interfaces while our developers 
                        build robust, scalable solutions. We maintain close collaboration to ensure 
                        design and functionality work seamlessly together.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Testing & Quality Assurance
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Rigorous testing ensures your project works flawlessly across all devices and 
                        browsers. We identify and fix issues before launch to guarantee a smooth user 
                        experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Launch & Support
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We handle the deployment process and provide ongoing support to ensure your 
                        project continues to perform optimally. Our team is always available for 
                        updates and maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Expert Team
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Experienced professionals dedicated to your success
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Quality Focused
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        High standards in every aspect of development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Timely Delivery
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Projects completed on schedule without compromising quality
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Ongoing Support
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Continuous assistance even after project completion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {service.features && service.features.length > 0 && (
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection animation="slideUp" delay={0.3}>
              <div className="bg-blue-600 dark:bg-blue-700 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-4">
                  Let's discuss your project and how we can help you achieve your goals.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-white text-blue-600 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <AnimatedSection animation="slideUp" delay={0.5}>
            <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </main>
  );
}
