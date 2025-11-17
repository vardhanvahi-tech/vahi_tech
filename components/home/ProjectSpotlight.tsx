'use client';

import Link from 'next/link';
import { mockProjects } from '@/data/mockProjects';
import ProjectCard from '@/components/projects/ProjectCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function ProjectSpotlight() {
  // Filter featured projects and limit to 2-3
  const featuredProjects = mockProjects.filter(project => project.featured).slice(0, 3);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Explore some of our recent work showcasing our expertise across different platforms
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="slideUp"
              delay={index * 0.1} // 100ms stagger for featured projects
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection animation="fadeIn" delay={0.3}>
          <div className="text-center">
            <Link href="/projects">
              <Button variant="primary" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
