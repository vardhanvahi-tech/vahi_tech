import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactPage() {

  return (
    <main className="min-h-screen w-full overflow-x-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Get in touch with us to discuss your project. We'd love to hear from you!
          </p>
        </AnimatedSection>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Email */}
          <AnimatedSection animation="slideUp" delay={0.1}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@vahitech.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    info@vahitech.com
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    For general inquiries
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Phone */}
          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Mon-Fri, 9am-6pm
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Address */}
          <AnimatedSection animation="slideUp" delay={0.3}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Office
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Info Section */}
        <AnimatedSection animation="slideUp" delay={0.5}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We're always excited to hear about new projects and opportunities. Whether you have a 
              specific project in mind or just want to explore possibilities, feel free to reach out 
              through any of the channels above.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team typically responds within 24 hours during business days. We look forward to 
              discussing how we can help bring your ideas to life!
            </p>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
