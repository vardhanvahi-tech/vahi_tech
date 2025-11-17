'use client';

import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const socialLinks = [
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: FiLinkedin,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: FiTwitter,
  },
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: FiGithub,
  },
];

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'w-full',
        'bg-white dark:bg-gray-900',
        'border-t border-gray-200 dark:border-gray-800',
        'transition-colors duration-200',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright Notice */}
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {currentYear} Vahitech. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center w-10 h-10 rounded-lg',
                    'text-gray-600 dark:text-gray-400',
                    'hover:text-primary-600 dark:hover:text-primary-400',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    'transition-all duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
                  )}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
