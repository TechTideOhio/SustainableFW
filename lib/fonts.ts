export interface FontPreset {
  key: string;
  label: string;
  displayFont: string;
  bodyFont: string;
  monoFont?: string;
  googleFontsUrl: string;
  description: string;
}

export const fontPresets: FontPreset[] = [
  {
    key: "tech",
    label: "Tech",
    displayFont: "'Plus Jakarta Sans', sans-serif",
    bodyFont: "'Inter', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
    description: "Modern tech - Linear, Supabase vibe",
  },
  {
    key: "ai",
    label: "AI / Dev",
    displayFont: "'Geist', sans-serif",
    bodyFont: "'Geist', sans-serif",
    monoFont: "'Geist Mono', monospace",
    googleFontsUrl: "", // Geist is loaded from local/CDN
    description: "Neo-grotesque precision - Vercel, OpenAI vibe",
  },
  {
    key: "editorial",
    label: "Editorial",
    displayFont: "'Instrument Serif', serif",
    bodyFont: "'Inter', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&display=swap",
    description: "High-end editorial - Raycast, Ramp vibe",
  },
  {
    key: "corporate",
    label: "Corporate",
    displayFont: "'Satoshi', sans-serif",
    bodyFont: "'General Sans', sans-serif",
    googleFontsUrl: "", // Satoshi/General Sans from fontshare.com
    description: "Corporate confidence - Stripe, Mercury vibe",
  },
  {
    key: "friendly",
    label: "Friendly",
    displayFont: "'Outfit', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap",
    description: "Warm & approachable - Notion, Figma vibe",
  },
];
