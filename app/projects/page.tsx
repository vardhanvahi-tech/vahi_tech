import { mockProjects } from '@/data/mockProjects';
import ProjectCard from '@/components/projects/ProjectCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-(--color-white) to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--color-accent)/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--color-accent)/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--color-text) mb-6">
              Our <span className="bg-linear-to-r from-(--color-text) to-(--color-accent) bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-(--color-text) max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects across Shopify, mobile apps, WordPress, and custom web development
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mockProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="slideUp"
                delay={index * 0.05}
              >
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
