import AnimatedSection from '@/components/ui/AnimatedSection';

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </AnimatedSection>

        {/* Terms Content */}
        <AnimatedSection animation="slideUp" delay={0.1}>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-12 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Vahitech's services, you accept and agree to be bound by these terms. 
                These Terms and Conditions constitute a legally binding agreement between you and Vahitech.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Vahitech provides professional web development, Shopify development, mobile app development, 
                and WordPress solutions. The specific scope of services will be outlined in individual project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                Upon full payment, clients receive ownership rights to final deliverables as specified in the 
                project agreement. Vahitech retains the right to showcase completed work in our portfolio unless 
                otherwise agreed upon in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Payment terms are specified in individual project agreements and typically include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Initial deposit before project commencement</li>
                <li>Milestone payments as outlined in the agreement</li>
                <li>Final payment upon project completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Timeline</h2>
              <p className="text-gray-700 leading-relaxed">
                Project timelines are estimates based on scope and client responsiveness. Timelines may be adjusted 
                due to scope changes, delays in feedback, or technical challenges. Clients will be notified promptly 
                of any significant delays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Revisions</h2>
              <p className="text-gray-700 leading-relaxed">
                Each project includes a specified number of revision rounds. Additional revisions beyond the agreed 
                scope may incur additional charges. Major scope changes require a new agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Providing timely feedback and approvals</li>
                <li>Supplying necessary content and materials</li>
                <li>Ensuring all content is legally owned or licensed</li>
                <li>Testing and approving deliverables before launch</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                We warrant that services will be performed professionally. A warranty period for bug fixes is 
                provided as specified in the project agreement. This does not cover issues from client modifications, 
                hosting problems, or third-party service changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Vahitech shall not be liable for indirect, incidental, or consequential damages. Our total liability 
                shall not exceed the amount paid for the specific project in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                Both parties agree to maintain confidentiality of proprietary information shared during the project. 
                This obligation continues after project completion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate with written notice for breach of terms or mutual agreement. Upon 
                termination, the client is responsible for payment of all completed work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Vahitech reserves the right to modify these terms at any time. Changes are effective immediately 
                upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have questions about these Terms and Conditions:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Email:</span> info@vahitech.com</p>
                <p><span className="font-semibold">Phone:</span> +1 (234) 567-890</p>
                <p><span className="font-semibold">Address:</span> 123 Tech Street, Suite 456, San Francisco, CA 94102</p>
              </div>
            </section>

          </div>
        </AnimatedSection>

        {/* Acceptance Notice */}
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
            <p className="text-gray-800 leading-relaxed text-center">
              By using Vahitech's services, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms and Conditions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
