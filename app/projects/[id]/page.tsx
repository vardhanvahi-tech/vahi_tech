import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { mockProjects } from '@/data/mockProjects';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = mockProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Back Button */}
          <AnimatedSection animation="fadeIn">
            <Link
              href="/projects"
              className="inline-flex items-center text-purple-600 hover:text-pink-600 font-medium mb-8 group transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
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
              Back to Projects
            </Link>
          </AnimatedSection>

          {/* Project Header */}
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <div className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Project Image */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 bg-gray-200 shadow-2xl border-4 border-white">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </AnimatedSection>

        {/* Additional Images Gallery */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <AnimatedSection animation="slideUp" delay={0.25}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.additionalImages.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white group"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="slideUp" delay={0.3}>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-8 border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Project Overview
                  </h2>
                <div className="prose prose-base max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This project showcases our expertise in {project.category.toLowerCase()} development. 
                    We worked closely with the client to understand their unique requirements and delivered 
                    a solution that exceeded expectations.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The project involved careful planning, modern design principles, and cutting-edge 
                    technology to create a platform that is both beautiful and functional. Our team 
                    focused on delivering exceptional user experience while maintaining high performance 
                    and scalability.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Throughout the development process, we maintained close communication with stakeholders, 
                    ensuring that every feature aligned with the business goals and user needs.
                  </p>
                </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.4}>
              <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Responsive design that works seamlessly across all devices
                    </span>
                  </li>
                  <li className="flex items-start">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Optimized performance for fast loading times
                    </span>
                  </li>
                  <li className="flex items-start">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Intuitive user interface with modern design
                    </span>
                  </li>
                  <li className="flex items-start">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Secure and scalable architecture
                    </span>
                  </li>
                  <li className="flex items-start">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      SEO optimized for better search visibility
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Category
                    </p>
                    <p className="text-gray-900 font-medium">
                      {project.category}
                    </p>
                  </div>
                  {project.completedDate && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Completed
                      </p>
                      <p className="text-gray-900 font-medium">
                        {new Date(project.completedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {project.tags && project.tags.length > 0 && (
              <AnimatedSection animation="slideUp" delay={0.4}>
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <AnimatedSection animation="slideUp" delay={0.5}>
            <div className="mt-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                        <Image
                          src={relatedProject.imageUrl}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {relatedProject.description}
                        </p>
                        <span className="text-sm font-semibold text-purple-600 group-hover:text-pink-600 transition-colors">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* CTA Section */}
        <AnimatedSection animation="fadeIn" delay={0.6}>
          <div className="relative mt-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-10 sm:p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                Let's discuss how we can help bring your ideas to life with our expertise
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
