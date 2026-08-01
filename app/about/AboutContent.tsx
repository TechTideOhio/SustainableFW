"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TreePine, Satellite, BarChart3, Shield, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: any = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const values = [
  {
    icon: TreePine,
    title: "Transparency First",
    description:
      "Every carbon credit should be traceable to a real tree, a real sensor, a real timestamp. We build systems that make greenwashing impossible.",
  },
  {
    icon: Satellite,
    title: "Science-Backed",
    description:
      "Our digital twins fuse satellite imagery, LiDAR, and IoT sensor networks into models validated against peer-reviewed forestry science.",
  },
  {
    icon: BarChart3,
    title: "Audit-Ready Always",
    description:
      "From Verra to Gold Standard, our reports are built to withstand the toughest third-party audits without a single manual spreadsheet.",
  },
  {
    icon: Shield,
    title: "Data Sovereignty",
    description:
      "Your forest data stays yours. We process it to power your digital twin, never to train models or sell to third parties.",
  },
  {
    icon: Globe,
    title: "Global Scale, Local Precision",
    description:
      "Whether it is a 200-hectare reforestation project or a million-acre concession, ForestTwin adapts to your geography and regulatory context.",
  },
  {
    icon: Users,
    title: "Built for Teams",
    description:
      "Sustainability leads, forestry engineers, compliance officers, and C-suite all share a single pane of glass with role-based access.",
  },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-foreground font-display font-bold text-xl">
              ForestTwin
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/8 blur-3xl rounded-full pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
            <motion.span
              {...fadeUp}
              className="inline-block border border-brand-600/30 bg-brand-50 dark:bg-brand-600/10 text-brand-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              About ForestTwin
            </motion.span>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6 max-w-3xl"
            >
              Making every carbon credit{" "}
              <span className="font-serif italic text-brand-600">
                trustworthy
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mb-8"
            >
              ForestTwin is the carbon asset intelligence platform that turns
              satellite imagery and IoT sensor data into living 3D replicas of
              forest assets, so sustainability teams can verify, report, and
              grow with confidence.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
            >
              <a
                href="https://digitaltwinfw.netlify.app/"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:underline transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                Visit the live site
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-muted/40 border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Our Mission
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-muted-foreground leading-relaxed">
                  The voluntary carbon market is projected to reach $50 billion
                  by 2030, but confidence in carbon credits has never been
                  lower. Buyers cannot verify what they are purchasing. Sellers
                  cannot prove what they are delivering. Auditors spend months
                  cross-referencing spreadsheets against satellite passes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ForestTwin exists to close that gap. We combine
                  high-resolution remote sensing, ground-truth IoT sensors, and
                  AI-driven biomass models into a single digital twin that
                  updates continuously. The result: carbon assets you can see,
                  measure, and defend under audit in real time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Six principles that shape every feature, every integration, and
              every line of code we ship.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-600/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Built By */}
        <section className="bg-muted/40 border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Built by TechTide AI
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
                ForestTwin is a product of{" "}
                <a
                  href="https://techtideai.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 font-medium hover:underline transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  TechTide AI
                </a>
                , a venture studio that ships AI-powered products for
                real-world industries. Founded by{" "}
                <a
                  href="https://alexcinovoj.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 font-medium hover:underline transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  Alex Cinovoj
                </a>
                , TechTide builds at the intersection of machine learning,
                domain expertise, and production-grade engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://techtideai.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    className="rounded-full transition-all duration-200 ease-out active:scale-[0.97]"
                  >
                    Visit TechTide AI
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://github.com/TechTideOhio/SustainableFW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full transition-all duration-200 ease-out active:scale-[0.97]"
                  >
                    View on GitHub
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to see your forest in a new light?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start your free trial and explore the platform. No credit card
              required.
            </p>
            <Link href="/#pricing">
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8 h-12 text-base transition-all duration-200 ease-out active:scale-[0.97] glow-brand"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ForestTwin Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="link-underline hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="link-underline hover:text-foreground transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
