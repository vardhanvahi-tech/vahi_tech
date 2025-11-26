'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types/project';

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block h-full group">
      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-card)] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-200">
      {/* Image Container with 16:9 aspect ratio */}
      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0 bg-gray-200">
        <Image
          src={project.imageUrl}
          alt={`${project.title} - ${project.category} project showcasing ${project.description.substring(0, 50)}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+"
          priority={project.featured}
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-3">
          <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--color-text)]/70 line-clamp-2 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* View Project Link */}
        <div className="mt-4 flex items-center text-sm font-semibold text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
          <span>View Project</span>
          <span className="ml-2 inline-block group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </Link>
  );
}

// Helper function to get category-specific colors
function getCategoryColor(category: IProject['category']): string {
  const colors = {
    'Shopify': 'bg-green-100 text-green-800',
    'Mobile': 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
    'WordPress': 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]',
    'Custom Web': 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
  };
  
  return colors[category] || 'bg-gray-100 text-gray-800';
}
