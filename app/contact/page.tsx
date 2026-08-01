import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the TechTide AI team to discuss ForestTwin.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-600 selection:text-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block border border-brand-600/30 bg-brand-50 dark:bg-brand-600/10 text-brand-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
          Contact Us
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground mb-12">
          <p>
            Whether you are looking to deploy ForestTwin across your carbon portfolio, partner with us on an integration, or simply have a question about digital MRV, our team is here to help.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl">
          <form className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                <Input id="firstName" placeholder="Jane" className="bg-background" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                <Input id="lastName" placeholder="Doe" className="bg-background" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
              <Input id="email" type="email" placeholder="jane@company.com" className="bg-background" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <Button type="button" className="w-full mt-4">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
