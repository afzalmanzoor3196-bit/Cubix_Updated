import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-white to-[#f0f4ff] border-b border-gray-200">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
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
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">Policy</span>
          </h1>
          <p className="mt-5 text-gray-500 text-lg">
            Zenvixo Digital &mdash; Effective Date: July 11, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          At Zenvixo Digital, we respect your privacy and are committed to protecting your personal information.
        </p>

        {/* Section 1 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              01
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Information We Collect</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed mb-4">We may collect:</p>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Name
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Email address
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Phone number
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Company information
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Billing information
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Project details
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Website usage data, including cookies and analytics
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              02
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">How We Use Your Information</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed mb-4">We use your information to:</p>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Provide and improve our services
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Communicate about projects
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Process payments
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Respond to inquiries
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Send updates and marketing communications (where permitted)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Improve website performance and user experience
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              03
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Information Sharing</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              We do not sell or rent your personal information. We may share information with trusted service providers who assist us in delivering our services or when required by law.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              04
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Data Security</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              We implement reasonable administrative, technical, and organizational measures to protect your information from unauthorized access, disclosure, or misuse. However, no online system can guarantee complete security.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              05
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Cookies</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and improve our services.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              06
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Your Rights</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Access your personal information
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Correct inaccurate information
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Request deletion of your data
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Object to certain processing activities
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                Withdraw consent where applicable
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              07
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Third-Party Links</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              08
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Children's Privacy</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for individuals under the age required by applicable law, and we do not knowingly collect personal information from children.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              09
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Policy Updates</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes become effective once posted on our website.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-10 group">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand font-display font-bold text-sm group-hover:bg-brand/20 transition-colors">
              10
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-900 pt-1">Contact Us</h2>
          </div>
          <div className="ml-14 border-l-2 border-gray-100 pl-6 group-hover:border-brand/30 transition-colors">
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or your personal information, please contact Zenvixo Digital using the contact details provided on our website.
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
