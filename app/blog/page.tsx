import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on carbon markets, digital twin technology, ESG compliance, and sustainable forestry from the ForestTwin team at TechTide AI.',
  alternates: { canonical: '/blog' },
};

export default function BlogListingPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-600 selection:text-white">
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/6 blur-3xl rounded-full pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
            <span className="inline-block border border-brand-600/30 bg-brand-50 dark:bg-brand-600/10 text-brand-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              ForestTwin Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-4">
              Carbon intelligence,{' '}
              <span className="font-serif italic text-brand-600">decoded</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Original research, market analysis, and technical deep-dives from
              the team building the future of forest carbon verification.
            </p>
          </div>
        </section>

        {/* Featured post */}
        {featured && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
                  <span className="bg-brand-600/10 text-brand-600 px-3 py-1 rounded-full font-medium text-xs">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featured.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readingTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-brand-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {featured.description}
                </p>
                <div className="flex items-center gap-4">
                  {featured.authors.map((a) => (
                    <div key={a.name} className="flex items-center gap-2 text-sm">
                      <div className="w-7 h-7 rounded-full bg-brand-600/20 flex items-center justify-center">
                        <User className="w-3.5 h-3.5 text-brand-600" />
                      </div>
                      <span className="text-foreground font-medium">{a.name}</span>
                    </div>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* All posts grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-xl font-display font-bold mb-8 text-muted-foreground">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out flex flex-col"
              >
                <span className="text-xs font-medium text-brand-600 bg-brand-600/10 self-start px-2.5 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
