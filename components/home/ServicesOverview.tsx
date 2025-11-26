'use client';

import Link from 'next/link';
import { mockServices } from '@/data/mockServices';
import ServiceCard from '@/components/services/ServiceCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Sparkles } from 'lucide-react';

export default function ServicesOverview() {
  // Display 3-4 services
  const displayServices = mockServices.slice(0, 4);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--color-card)] via-[var(--color-bg)] to-[var(--color-card)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      {/* Gradient Orb */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
              <span className="text-sm font-medium text-[var(--color-accent)]">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-6">
              Our <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text)]/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to elevate your business and drive measurable results
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {displayServices.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection animation="fadeIn" delay={0.4}>
          <div className="text-center">
            <Link href="/services">
              <Button variant="primary" size="lg" className="group bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] hover:from-[var(--color-primary)] hover:to-[var(--color-secondary)] text-white px-8 py-4 shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/40">
                <span>View All Services</span>
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
