"use client";
import Link from "next/link";

export default function TermsPage() {
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
        <h1 className="text-4xl font-display font-bold mb-2">Terms of Service</h1>
        <p className="text-zinc-400 mb-12">Last updated: July 30, 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-300 leading-relaxed">
              By accessing or using the ForestTwin platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-zinc-300 leading-relaxed">
              ForestTwin provides a digital twin platform for carbon asset management, including 3D forest visualization, real-time environmental telemetry, carbon credit tracking, scenario simulation, and ESG compliance reporting. The Service is provided on a subscription basis as described on our pricing page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Account Registration</h2>
            <p className="text-zinc-300 leading-relaxed">
              You must create an account to use the Service. You are responsible for maintaining the security of your account credentials and for all activity under your account. You agree to provide accurate and complete information during registration and to update it as needed. Notify us immediately if you suspect unauthorized access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Subscription and Payment</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Access to the Service requires a paid subscription after any applicable free trial period. Subscription fees are billed in advance on a monthly or annual basis depending on your selected plan.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Free trials last 14 days and include full platform access</li>
              <li>You may upgrade, downgrade, or cancel your subscription at any time</li>
              <li>Downgrades and cancellations take effect at the end of the current billing period</li>
              <li>Refunds are not provided for partial billing periods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Your Data</h2>
            <p className="text-zinc-300 leading-relaxed">
              You retain ownership of all data you upload, connect, or create within ForestTwin, including forest asset data, sensor readings, satellite imagery, and carbon metrics ("Your Data"). You grant ForestTwin a limited license to process Your Data solely to provide, maintain, and improve the Service. We will not access, use, or share Your Data for any purpose unrelated to delivering the Service, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Acceptable Use</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Use the Service for any unlawful purpose</li>
              <li>Upload false or misleading data with intent to generate fraudulent carbon credits</li>
              <li>Attempt to gain unauthorized access to the Service or its infrastructure</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Resell or sublicense access to the Service without written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="text-zinc-300 leading-relaxed">
              The Service, including its design, features, code, documentation, and branding, is owned by ForestTwin Inc. and protected by intellectual property laws. These Terms do not grant you any rights to our trademarks, logos, or other brand features. Feedback and suggestions you provide may be used without obligation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-zinc-300 leading-relaxed">
              The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied. ForestTwin does not guarantee that the Service will be uninterrupted, error-free, or secure. Carbon calculations, projections, and reports generated by the platform are estimates based on available data and should not be treated as certified measurements without independent verification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-zinc-300 leading-relaxed">
              To the maximum extent permitted by law, ForestTwin Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or business opportunities arising from your use of the Service. Our total liability for any claim related to the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">10. Termination</h2>
            <p className="text-zinc-300 leading-relaxed">
              Either party may terminate these Terms at any time. You may cancel your subscription through your account settings. We may suspend or terminate your access if you violate these Terms or if required by law. Upon termination, your right to use the Service ends immediately. You may export Your Data for up to 30 days after termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update these Terms from time to time. We will notify you of material changes by email or through the Service at least 30 days before they take effect. Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">12. Governing Law</h2>
            <p className="text-zinc-300 leading-relaxed">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes arising from these Terms will be resolved in the state or federal courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">13. Contact</h2>
            <p className="text-zinc-300 leading-relaxed">
              For questions about these Terms, contact us at <a href="mailto:legal@foresttwin.com" className="text-lime hover:underline">legal@foresttwin.com</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} ForestTwin Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-white">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
