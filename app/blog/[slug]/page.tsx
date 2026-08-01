import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { HeaderNav, FooterSection } from '@/components/landing';
import { blogPosts } from '@/lib/blog-posts';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((a) => ({ name: a.name })),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.authors.map((a) => a.name),
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.authors.map((a) => ({
      '@type': 'Person',
      name: a.name,
      jobTitle: a.role,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'ForestTwin',
      url: 'https://digitaltwinfw.netlify.app',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://digitaltwinfw.netlify.app/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNav />
      <main>
        {/* Header */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted-foreground">
            <span className="bg-brand-600/10 text-brand-600 px-3 py-1 rounded-full font-medium text-xs">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-brand-600/40 pl-4">
            {post.description}
          </p>

          {/* Authors */}
          <div className="flex items-center gap-6 mb-12 pb-8 border-b border-border">
            {post.authors.map((a) => (
              <div key={a.name} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-600/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {a.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{a.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-li:text-muted-foreground
              prose-blockquote:border-brand-600/40 prose-blockquote:text-muted-foreground
              prose-table:text-sm
              prose-th:text-foreground prose-th:font-semibold
              prose-td:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex items-stretch gap-4 mt-12 pt-8 border-t border-border">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex-1 group bg-card border border-border rounded-xl p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs text-muted-foreground mb-1 block">
                  Previous
                </span>
                <span className="text-sm font-semibold text-foreground group-hover:text-brand-600 transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex-1 group bg-card border border-border rounded-xl p-5 text-right hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs text-muted-foreground mb-1 block">
                  Next
                </span>
                <span className="text-sm font-semibold text-foreground group-hover:text-brand-600 transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </nav>

          {/* CTA */}
          <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center">
            <h2 className="text-xl font-display font-bold mb-3">
              See your forest in a new light
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
              Start your free trial and explore the ForestTwin platform. No
              credit card required.
            </p>
            <Link href="/#pricing">
              <Button className="rounded-full px-8 transition-all duration-200 ease-out active:scale-[0.97]">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
