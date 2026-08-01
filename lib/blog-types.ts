export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  authors: { name: string; role: string }[];
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export const authors = [
  { name: 'Alex Cinovoj', role: 'Founder, TechTide AI' },
];

export const categories = [
  'Carbon Markets',
  'Digital Twins',
  'ESG & Compliance',
  'Climate Technology',
  'Forest Science',
  'Policy & Regulation',
] as const;
