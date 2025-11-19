import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us to discuss your project. We'd love to hear from you!
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Email */}
          <AnimatedSection animation="slideUp" delay={0.1}>
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Email
                  </h3>
                  <a
                    href="mailto:info@vahitech.com"
                    className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
                  >
                    info@vahitech.com
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    For general inquiries
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Phone */}
          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 hover:text-green-600 font-medium transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Mon-Fri, 9am-6pm
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Address */}
          <AnimatedSection animation="slideUp" delay={0.3}>
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Office
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    123 Tech Street<br />
                    Suite 456<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Social Media */}
          <AnimatedSection animation="slideUp" delay={0.4}>
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    Follow Us
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
                    >
                      LinkedIn →
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
                    >
                      Twitter →
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Info Section */}
        <AnimatedSection animation="slideUp" delay={0.5}>
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Let's Work Together
              </h2>
              <p className="text-blue-100 leading-relaxed mb-4 text-lg">
                We're always excited to hear about new projects and opportunities. Whether you have a 
                specific project in mind or just want to explore possibilities, feel free to reach out 
                through any of the channels above.
              </p>
              <p className="text-blue-100 leading-relaxed text-lg">
                Our team typically responds within 24 hours during business days. We look forward to 
                discussing how we can help bring your ideas to life!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
