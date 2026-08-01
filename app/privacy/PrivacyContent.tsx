"use client";
import Link from "next/link";

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-app text-white font-body">
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lime font-display font-bold text-xl">
            <div className="w-8 h-8 rounded bg-lime flex items-center justify-center text-app">
              FT
            </div>
            ForestTwin
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-display font-bold mb-2">Privacy Policy</h1>
        <p className="text-zinc-400 mb-12">Last updated: July 30, 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              ForestTwin Inc. ("ForestTwin," "we," "us," or "our") collects information you provide directly when you create an account, use our platform, or contact our support team. This includes your name, email address, organization name, and payment information.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              We also collect usage data automatically, including browser type, device information, IP address, pages visited, and actions taken within the platform. This data helps us improve performance and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Provide, maintain, and improve the ForestTwin platform</li>
              <li>Process transactions and send related notifications</li>
              <li>Respond to support requests and communicate product updates</li>
              <li>Analyze usage patterns to enhance platform features</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Data Security</h2>
            <p className="text-zinc-300 leading-relaxed">
              We implement industry-standard security measures to protect your data, including end-to-end encryption for data in transit and at rest, SOC 2 Type II compliance, and quarterly third-party security audits. Access to personal data is restricted to authorized personnel who need it to operate, develop, or improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Sharing</h2>
            <p className="text-zinc-300 leading-relaxed">
              We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating the platform (such as payment processors and cloud infrastructure providers), but only as necessary and under strict confidentiality agreements. We may also disclose information when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Your Environmental Data</h2>
            <p className="text-zinc-300 leading-relaxed">
              Forest asset data, carbon metrics, sensor readings, and satellite imagery you upload or connect to ForestTwin remain your property. We process this data solely to provide our digital twin and carbon tracking services. We do not use your environmental data for purposes unrelated to delivering the ForestTwin platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Cookies and Tracking</h2>
            <p className="text-zinc-300 leading-relaxed">
              We use essential cookies to maintain your session and preferences. We also use analytics cookies to understand how visitors interact with our website. You can manage cookie preferences through your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">7. Your Rights</h2>
            <p className="text-zinc-300 leading-relaxed">
              You have the right to access, correct, or delete your personal information at any time. You can export your data from the platform settings page or contact our support team. If you are located in the European Economic Area, you have additional rights under GDPR, including the right to data portability and the right to restrict processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">8. Data Retention</h2>
            <p className="text-zinc-300 leading-relaxed">
              We retain your account data for as long as your account is active. If you close your account, we will delete your personal information within 30 days, except where we are required to retain it for legal or compliance purposes. Aggregated, anonymized data may be retained indefinitely for research and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last updated" date. Your continued use of ForestTwin after changes take effect constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">10. Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have questions about this privacy policy or how we handle your data, contact us at <a href="mailto:privacy@foresttwin.com" className="text-lime hover:underline">privacy@foresttwin.com</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} ForestTwin Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="link-underline hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">Terms of Service</Link>
            <Link href="/privacy" className="link-underline hover:text-foreground text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
