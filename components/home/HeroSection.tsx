'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <AnimatedSection animation="fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-white/90">Available for new projects</span>
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Building Digital</span>
              <span className="block bg-gradient-to-r from-[var(--color-accent)] via-white to-[var(--color-accent)] bg-clip-text text-transparent animate-gradient">
                Excellence
              </span>
            </h1>
          </AnimatedSection>

          {/* Sub-headline */}
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your vision into reality with cutting-edge web development, 
              e-commerce solutions, and mobile apps that drive results
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="slideUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group relative overflow-hidden bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] hover:from-[var(--color-accent)] hover:to-[var(--color-primary)] text-white px-8 py-4 text-lg shadow-lg shadow-[var(--color-accent)]/50 hover:shadow-xl hover:shadow-[var(--color-accent)]/60 transition-all">
                  <span className="relative z-10">Start Your Project</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Stats/Features */}
          <AnimatedSection animation="fadeIn" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '100+', label: 'Projects Delivered' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-white bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
