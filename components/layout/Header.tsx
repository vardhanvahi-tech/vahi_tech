'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'bg-white/30 backdrop-blur-md',
        'border-b border-white/20',
        'shadow-sm shadow-black-100/50',
        'transition-all duration-200',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMobileMenu}
          >
            <div className="relative w-14 h-14 sm:w-14 sm:h-14">
              <Image
                src="/images/logos/mainLogoTransparent.png"
                alt="Vahitech Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                  isActiveLink(link.href)
                    ? 'text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] shadow-lg shadow-[var(--color-primary)]/30'
                    : 'text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-card)]/60 hover:shadow-md'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-lg',
                'text-[var(--color-text)]',
                'hover:bg-white/60 hover:shadow-md',
                'transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2'
              )}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300',
                  isActiveLink(link.href)
                    ? 'text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] shadow-lg shadow-[var(--color-primary)]/30'
                    : 'text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-white/60 hover:shadow-md'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
