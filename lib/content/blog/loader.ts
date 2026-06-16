import fs from "fs";
import path from "path";
import type { BlogPost } from "@/lib/content/blog/types";

const postsDir = path.join(process.cwd(), "lib/content/blog/posts");

const driveThumbnailPattern =
  /https:\/\/drive\.google\.com\/thumbnail\?id=([^&\s"'>)]+)(?:&[^"'>\s)]*)?/g;

function resolveGoogleDriveImageUrl(url: string): string {
  const match = url.match(/drive\.google\.com\/thumbnail\?id=([^&]+)/);
  if (match) {
    return `https://lh3.googleusercontent.com/d/${match[1]}=w2000`;
  }
  return url;
}

function resolveMarkdownAssets(content: string): string {
  return content.replace(driveThumbnailPattern, (url) =>
    resolveGoogleDriveImageUrl(url)
  );
}

export function getPostMarkdown(post: BlogPost): string {
  const filePath = path.join(postsDir, post.file);
  const content = fs.readFileSync(filePath, "utf8");

  return resolveMarkdownAssets(
    content
      .replace(/^#\s+.+\n+/, "")
      .replace(/^_.+_\n+/, "")
      .trim()
  );
}
