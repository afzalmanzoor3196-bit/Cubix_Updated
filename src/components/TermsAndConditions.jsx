import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-white to-[#f0f4ff] border-b border-gray-200">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 lg:py-32 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Terms &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">Conditions</span>
          </h1>
          <p className="mt-5 text-gray-500 text-lg">
            Zenvixo Digital &mdash; Effective Date: July 11, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Welcome to Zenvixo Digital. By using our website or purchasing our services, you agree to these Terms &amp; Conditions.
        </p>

        {/* Section 1 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              01
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Services</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Zenvixo Digital provides digital marketing, website development, graphic design, branding, social media management, SEO, paid advertising, video editing, AI solutions, and related digital services.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              02
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Client Responsibilities</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Clients must provide accurate information, required content, approvals, and feedback on time. Delays in communication may affect project timelines.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              03
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Payments</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                A deposit may be required before work begins.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Remaining payments must be made according to the agreed schedule.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Completed work may be withheld until all outstanding payments are received.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                All payments are non-refundable once work has started unless otherwise agreed in writing.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              04
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Revisions</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Each project includes the number of revisions agreed upon in the proposal. Additional revisions or changes outside the original scope may incur extra charges.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              05
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Project Delivery</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Estimated delivery dates are provided in good faith. Delays caused by the client, third-party services, or unforeseen circumstances may extend delivery times.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              06
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Intellectual Property</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Upon full payment, ownership of the final approved deliverables transfers to the client unless otherwise specified. Zenvixo Digital retains the right to display completed work in its portfolio unless the client requests confidentiality in writing.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              07
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Third-Party Services</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              We are not responsible for issues caused by third-party platforms such as hosting providers, domain registrars, payment gateways, advertising platforms, or social media services.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              08
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Limitation of Liability</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Zenvixo Digital shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid by the client for the specific project.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              09
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Termination</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Either party may terminate a project with written notice. The client is responsible for payment for all work completed up to the termination date.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              10
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Changes to These Terms</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update these Terms &amp; Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.
            </p>
          </div>
        </section>

        {/* Section 11 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              11
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Contact</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              For questions regarding these Terms &amp; Conditions, please contact Zenvixo Digital using the contact information listed on our website.
            </p>
          </div>
        </section>

        {/* Back to Home */}
        <div className="mt-16 pt-10 border-t border-gray-200 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 font-display font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:shadow-brand/40 hover:scale-105 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
