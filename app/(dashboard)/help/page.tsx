"use client";
import { Card, CardHeader, CardTitle, CardDescription, } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Book, Code, CreditCard, Shield, Puzzle, Settings, MessageSquare, Mail, Users } from 'lucide-react';

const categories = [
  { title: 'Getting Started', description: 'Basic concepts and platform introduction.', icon: Book, count: 12 },
  { title: 'API Reference', description: 'Endpoints, webhooks, and authentication.', icon: Code, count: 24 },
  { title: 'Billing & Plans', description: 'Manage subscriptions and payment methods.', icon: CreditCard, count: 8 },
  { title: 'Security', description: 'SSO, permissions, and compliance info.', icon: Shield, count: 15 },
  { title: 'Integrations', description: 'Connect with third-party tools and services.', icon: Puzzle, count: 30 },
  { title: 'Troubleshooting', description: 'Common issues and how to fix them.', icon: Settings, count: 18 },
];

const faqs = [
  { question: 'How do I reset my API key?', answer: 'Navigate to Settings > Developer > API Keys. Click "Revoke" on your old key and then "Generate New Key". Remember to update your applications with the new key immediately as the old one will stop working.' },
  { question: 'What are the rate limits for the free tier?', answer: 'The free tier includes 10,000 API requests per month and up to 100 concurrent connections. For higher limits, consider upgrading to the Pro plan.' },
  { question: 'Can I change my billing cycle from monthly to annual?', answer: 'Yes, you can change your billing cycle at any time from the Billing page. Upgrading to an annual plan provides a 20% discount.' },
  { question: 'How do I set up SSO for my team?', answer: 'SSO setup requires an Enterprise plan. Once upgraded, go to Security Settings, select your Identity Provider (Okta, Azure AD, etc.), and follow the configuration wizard.' },
  { question: 'Where can I find the system status?', answer: 'Our real-time system status is always available at status.example.com. You can also subscribe to email or webhook notifications for incident alerts.' },
];

export default function HelpPage() {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Search Section */}
      <div className="text-center space-y-8 py-12">
        <h1 className="text-5xl font-display font-bold text-white tracking-tight">How can we help?</h1>
        <p className="text-xl text-zinc-400">Search our knowledge base or browse categories below.</p>
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500" />
          </div>
          <Input 
            className="w-full pl-12 pr-4 py-6 text-lg bg-elevated/50 border-white/20 focus-visible:ring-lime focus-visible:border-lime rounded-full glass-panel" 
            placeholder="Search articles, tutorials, and API docs..."
            aria-label="Search help articles"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div>
        <h2 className="text-2xl font-medium text-white mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Card key={cat.title} className="glass-panel border-white/10 bg-app hover:bg-elevated transition-colors cursor-pointer group">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 text-lime flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="secondary" className="bg-white/5 text-zinc-400">{cat.count} articles</Badge>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-lime transition-colors">{cat.title}</CardTitle>
                <CardDescription className="text-zinc-400">{cat.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Support & FAQ Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Support Options */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-medium text-white mb-6">Contact Support</h2>
          
          <Card className="glass-panel border-white/10 bg-app p-4 flex items-center gap-4 hover:border-lime/50 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-white">Email Support</h3>
              <p className="text-sm text-zinc-400">Response within 24h</p>
            </div>
          </Card>
          
          <Card className="glass-panel border-white/10 bg-app p-4 flex items-center gap-4 hover:border-lime/50 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-lime/10 text-lime flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-white">Live Chat</h3>
              <p className="text-sm text-zinc-400">Available 9am - 5pm EST</p>
            </div>
          </Card>
          
          <Card className="glass-panel border-white/10 bg-app p-4 flex items-center gap-4 hover:border-lime/50 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-white">Community Forum</h3>
              <p className="text-sm text-zinc-400">Join the discussion</p>
            </div>
          </Card>
        </div>

        {/* FAQs */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-medium text-white mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10 bg-elevated/30 px-6 rounded-lg data-[state=open]:bg-elevated/60 transition-colors">
                <AccordionTrigger className="text-left text-white hover:text-lime hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
