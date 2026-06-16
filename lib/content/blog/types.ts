export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  file: string;
  coverImage?: string;
};
