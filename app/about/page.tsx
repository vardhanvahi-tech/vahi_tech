import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Vahitech
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Learn more about our mission and the team behind Vahitech
          </p>
        </AnimatedSection>

        {/* Our Mission Section */}
        <AnimatedSection animation="slideUp" delay={0.1} className="mb-8 sm:mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Our Mission
            </h2>
            <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At Vahitech, our mission is to empower businesses through innovative technology solutions. 
                We believe that every organization, regardless of size, deserves access to world-class web 
                development, e-commerce platforms, and mobile applications that drive growth and success.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We are committed to delivering exceptional quality, maintaining transparent communication, 
                and building long-term partnerships with our clients. Our approach combines technical 
                expertise with creative problem-solving to create solutions that not only meet but exceed 
                expectations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Through continuous learning and adaptation to emerging technologies, we strive to stay at 
                the forefront of the industry, ensuring our clients always receive cutting-edge solutions 
                that provide real business value.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Team Section */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Our Team
            </h2>
            <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Vahitech is powered by a diverse team of passionate developers, designers, and strategists 
                who share a common goal: creating exceptional digital experiences. Our team brings together 
                years of combined experience across various industries and technologies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We pride ourselves on our collaborative approach, where every team member contributes their 
                unique expertise to deliver comprehensive solutions. From front-end developers crafting 
                beautiful user interfaces to back-end engineers building robust systems, each member plays 
                a crucial role in our success.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our team is dedicated to continuous professional development, regularly updating skills and 
                staying current with the latest industry trends and best practices. This commitment to 
                excellence ensures that we can tackle any challenge and deliver solutions that stand the 
                test of time.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
