'use client';

import Link from 'next/link';
import { IService } from '@/types/service';
import * as Icons from 'react-icons/fa';

interface ServiceCardProps {
  service: IService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically get the icon component from react-icons
  const IconComponent = (Icons as any)[service.icon] || Icons.FaCode;

  return (
    <Link href={`/services/${service.id}`} className="block h-full">
      <div className="h-full p-5 sm:p-6 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-primary-500 dark:hover:border-primary-400 flex flex-col">
        {/* Icon */}
        <div className="mb-3 sm:mb-4 text-primary-600 dark:text-primary-400">
          <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Features List (if available) */}
        {service.features && service.features.length > 0 && (
          <ul className="space-y-1.5 sm:space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <span className="mr-2 text-primary-600 dark:text-primary-400 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
