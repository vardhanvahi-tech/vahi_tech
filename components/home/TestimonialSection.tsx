'use client';

import { useState, useEffect } from 'react';
import { mockTestimonials } from '@/data/mockTestimonials';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const itemsPerView = 3;
  const maxIndex = Math.max(0, mockTestimonials.length - itemsPerView);

  const handleNext = () => {
    if (currentIndex < maxIndex && !isAnimating) {
      setDirection('right');
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      setDirection('left');
      setIsAnimating(true);
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        if (currentIndex >= maxIndex) {
          setDirection('left');
          setIsAnimating(true);
          setCurrentIndex(0);
        } else {
          handleNext();
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isAnimating]);

  return (
    <section className="relative py-20 sm:py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Quote className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/90">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {mockTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                  style={{
                    animation: isAnimating 
                      ? `slideIn${direction === 'right' ? 'Left' : 'Right'} 0.5s ease-out`
                      : 'none'
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full flex flex-col group hover:-translate-y-2 shadow-xl">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-blue-400/50 mb-4 transform group-hover:rotate-12 transition-transform" />

                    {/* Testimonial Content */}
                    <p className="text-gray-200 mb-6 flex-grow leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-blue-500/30 group-hover:ring-blue-400/50 transition-all">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-blue-400' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
