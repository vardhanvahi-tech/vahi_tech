import AnimatedSection from '@/components/ui/AnimatedSection';
import { Target, Users } from 'lucide-react';

export default function AboutPage() {
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
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Vahitech</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses through innovative technology solutions and exceptional digital experiences
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Our Mission Section */}
        <AnimatedSection animation="slideUp" delay={0.1} className="mb-12">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Empowering Through <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Vahitech, our mission is to empower businesses through innovative technology solutions. 
                  We believe that every organization, regardless of size, deserves access to world-class web 
                  development, e-commerce platforms, and mobile applications that drive growth and success.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are committed to delivering exceptional quality, maintaining transparent communication, 
                  and building long-term partnerships with our clients. Our approach combines technical 
                  expertise with creative problem-solving to create solutions that not only meet but exceed 
                  expectations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through continuous learning and adaptation to emerging technologies, we strive to stay at 
                  the forefront of the industry, ensuring our clients always receive cutting-edge solutions 
                  that provide real business value.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Team Section */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white/90">Our Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">Meet Our </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Vahitech is powered by a diverse team of passionate developers, designers, and strategists 
                  who share a common goal: creating exceptional digital experiences. Our team brings together 
                  years of combined experience across various industries and technologies.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We pride ourselves on our collaborative approach, where every team member contributes their 
                  unique expertise to deliver comprehensive solutions. From front-end developers crafting 
                  beautiful user interfaces to back-end engineers building robust systems, each member plays 
                  a crucial role in our success.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our team is dedicated to continuous professional development, regularly updating skills and 
                  staying current with the latest industry trends and best practices. This commitment to 
                  excellence ensures that we can tackle any challenge and deliver solutions that stand the 
                  test of time.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
