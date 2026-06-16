import type { BlogPost } from "@/lib/content/blog/types";

export type { BlogPost } from "@/lib/content/blog/types";
export { getPostMarkdown } from "@/lib/content/blog/loader";

export const blogPosts: BlogPost[] = [
  {
    slug: "physics-experiments-isaac-sim",
    title: "Physics Experiments in Isaac Sim",
    subtitle:
      "How physics parameters influence rigid and deformable food assets during drop, squeeze, and grasp experiments in Isaac Sim.",
    excerpt:
      "A walkthrough of how rigid and deformable food assets respond to drop, squeeze, and robotic grasp tests — and which simulation parameters matter most.",
    date: "2026-06-12",
    author: "NEURIK Team",
    category: "Research",
    file: "isaac-sim-physics/post.md",
    coverImage: "/blog-assets/isaac-sim-physics/images/scene.png",
  },
  {
    slug: "forge-physics-aware-robot-training-dataset",
    title: "From 2D Assets to a Physics-Aware Robot Training Dataset",
    subtitle:
      "Building simulation datasets used to take weeks of manual work. We cut that down to a prompt.",
    excerpt:
      "Forge turns two reference photos and a plain-English scene description into a complete, annotated robotics training dataset — RGB, depth, masks, normals, and a simulation-ready environment.",
    date: "2026-06-11",
    author: "NEURIK Team",
    category: "Product",
    file: "forge-blog-v1.md",
    coverImage:
      "https://lh3.googleusercontent.com/d/17_C1czHmEwOvcn3GSXjqArqg1q3vaU6w=w2000",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
