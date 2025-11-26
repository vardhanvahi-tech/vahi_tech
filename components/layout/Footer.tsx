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
        'bg-[var(--color-card)]',
        'border-t border-gray-200',
        'transition-colors duration-200',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6">
          {/* Top Row: Copyright and Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright Notice */}
            <div className="text-sm text-[var(--color-text)]/70 text-center md:text-left">
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
                      'text-[var(--color-text)]/70',
                      'hover:text-[var(--color-primary)]',
                      'hover:bg-[var(--color-bg)]',
                      'transition-all duration-150',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2'
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

          {/* Bottom Row: Legal Links */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="/terms"
              className="text-sm text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors duration-150 underline-offset-4 hover:underline"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
