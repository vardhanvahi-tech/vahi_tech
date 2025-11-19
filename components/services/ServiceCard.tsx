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
    <Link href={`/services/${service.id}`} className="block h-full group">
      <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon with Background */}
          <div className="mb-4 sm:mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Features List (if available) */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-gray-700">
                  <span className="mr-2 text-blue-600 flex-shrink-0 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </Link>
  );
}
