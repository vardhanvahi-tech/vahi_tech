"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Quote, Star } from 'lucide-react';
import { mockTestimonials } from '@/data/mockTestimonials';

export default function TestimonialSection() {
  return (
    <section className="relative py-20 sm:py-24 px-4 bg-linear-to-br from-(--color-primary) via-(--color-secondary) to-(--color-primary) overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Quote className="w-4 h-4 text-(--color-accent)" />
            <span className="text-sm font-medium text-white/90">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            What Our <span className="bg-linear-to-r from-(--color-accent) to-white bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {mockTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full flex flex-col group  shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-(--color-accent)/50 mb-4" />

                <p className="text-gray-200 mb-6 grow leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-(--color-accent)/30 group-hover:ring-(--color-accent)/50 transition-all">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-(--color-accent) transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
