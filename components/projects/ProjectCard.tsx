'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types/project';

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block h-full">
      <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.03] h-full flex flex-col">
      {/* Image Container with 16:9 aspect ratio */}
      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700">
        <Image
          src={project.imageUrl}
          alt={`${project.title} - ${project.category} project showcasing ${project.description.substring(0, 50)}`}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+"
          priority={project.featured}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-2 sm:mb-3">
          <span className={`inline-block px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 flex-1">
          {project.description}
        </p>
      </div>
      </div>
    </Link>
  );
}

// Helper function to get category-specific colors
function getCategoryColor(category: IProject['category']): string {
  const colors = {
    'Shopify': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Mobile': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'WordPress': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Custom Web': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };
  
  return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
}
