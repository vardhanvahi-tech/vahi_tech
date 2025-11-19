'use client';

import Link from 'next/link';
import { mockProjects } from '@/data/mockProjects';
import ProjectCard from '@/components/projects/ProjectCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Briefcase } from 'lucide-react';

export default function ProjectSpotlight() {
  // Filter featured projects and limit to 2-3
  const featuredProjects = mockProjects.filter(project => project.featured).slice(0, 3);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Briefcase className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our recent work showcasing innovation, creativity, and technical excellence across platforms
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection animation="fadeIn" delay={0.3}>
          <div className="text-center">
            <Link href="/projects">
              <Button variant="primary" size="lg" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40">
                <span>View All Projects</span>
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
