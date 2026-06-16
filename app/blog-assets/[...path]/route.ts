import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const assetsRoot = path.join(process.cwd(), "lib/content/blog/posts");

const mimeTypes: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

function resolveAssetPath(segments: string[]) {
  const slug = segments[0];
  const relativePath = segments.slice(1).join("/");

  if (!slug || !relativePath || relativePath.includes("..")) {
    return null;
  }

  const filePath = path.join(assetsRoot, slug, "assets", relativePath);
  const resolvedPath = path.resolve(filePath);
  const resolvedRoot = path.resolve(path.join(assetsRoot, slug, "assets"));

  if (!resolvedPath.startsWith(resolvedRoot)) {
    return null;
  }

  if (!fs.existsSync(resolvedPath) || !fs.statSync(resolvedPath).isFile()) {
    return null;
  }

  return resolvedPath;
}

export async function GET(request: Request, { params }: RouteContext) {
  const { path: segments } = await params;
  const resolvedPath = resolveAssetPath(segments);

  if (!resolvedPath) {
    return new NextResponse("Not found", { status: 404 });
  }

  const ext = path.extname(resolvedPath).toLowerCase();
  const contentType = mimeTypes[ext] ?? "application/octet-stream";
  const stat = fs.statSync(resolvedPath);
  const fileSize = stat.size;
  const range = request.headers.get("range");

  const baseHeaders: Record<string, string> = {
    "Content-Type": contentType,
    "Accept-Ranges": "bytes",
    "Cache-Control": "public, max-age=31536000, immutable",
  };

  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match) {
      return new NextResponse("Invalid range", { status: 416 });
    }

    const start = match[1] ? parseInt(match[1], 10) : 0;
    const end = match[2] ? parseInt(match[2], 10) : fileSize - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start >= fileSize || end >= fileSize || start > end) {
      return new NextResponse(null, {
        status: 416,
        headers: {
          ...baseHeaders,
          "Content-Range": `bytes */${fileSize}`,
        },
      });
    }

    const chunkSize = end - start + 1;
    const buffer = Buffer.alloc(chunkSize);
    const fd = fs.openSync(resolvedPath, "r");

    try {
      fs.readSync(fd, buffer, 0, chunkSize, start);
    } finally {
      fs.closeSync(fd);
    }

    return new NextResponse(buffer, {
      status: 206,
      headers: {
        ...baseHeaders,
        "Content-Length": String(chunkSize),
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      },
    });
  }

  const file = fs.readFileSync(resolvedPath);

  return new NextResponse(file, {
    headers: {
      ...baseHeaders,
      "Content-Length": String(fileSize),
    },
  });
}
