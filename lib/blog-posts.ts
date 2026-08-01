import { BlogPost } from './blog-types';
import { batch1 } from './blog-posts-batch1';
import { batch2 } from './blog-posts-batch2';
import { batch3 } from './blog-posts-batch3';
import { batch4 } from './blog-posts-batch4';

export const blogPosts: BlogPost[] = [
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
];
