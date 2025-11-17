import { mockProjects } from '@/data/mockProjects';
import ProjectCard from '@/components/projects/ProjectCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Explore our portfolio of successful projects across Shopify, mobile apps, WordPress, and custom web development.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {mockProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="slideUp"
              delay={index * 0.05} // 50ms stagger delay
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
