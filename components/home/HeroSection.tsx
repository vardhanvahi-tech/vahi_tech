'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Headline with Gradient */}
          <AnimatedSection animation="fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                Building Digital Excellence
              </span>
            </h1>
          </AnimatedSection>

          {/* Sub-headline */}
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
              Vahitech delivers cutting-edge web development, Shopify solutions, mobile apps, 
              and WordPress expertise to transform your digital presence
            </p>
          </AnimatedSection>

          {/* CTA Button */}
          <AnimatedSection animation="slideUp" delay={0.2}>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
