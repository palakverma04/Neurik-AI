import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import type { Components } from "react-markdown";

type BlogMarkdownProps = {
  content: string;
};

const components: Components = {
  h2: ({ children }) => (
    <h2 className="font-display text-2xl md:text-3xl text-foreground pt-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-xl text-foreground pt-4">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-[1.05rem] text-muted leading-[1.75]">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="text-foreground font-medium">{children}</strong>
  ),
  em: ({ children }) => <em className="text-muted/90 italic">{children}</em>,
  hr: () => <hr />,
  ul: ({ children }) => (
    <ul className="list-disc pl-5 text-muted space-y-2">{children}</ul>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-foreground/25 pl-5 text-muted italic leading-relaxed">
      {children}
    </blockquote>
  ),
  figure: ({ className, children, ...props }) => (
    <figure className={className} {...props}>
      {children}
    </figure>
  ),
  figcaption: ({ className, children, ...props }) => (
    <figcaption className={className} {...props}>
      {children}
    </figcaption>
  ),
  div: ({ className, children, ...props }) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
  img: ({ src, alt, className }) => {
    const resolvedClass =
      className ??
      "block h-auto w-full max-w-full min-h-[48px]";

    return (
      <img
        src={typeof src === "string" ? src : undefined}
        alt={alt ?? ""}
        className={resolvedClass}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    );
  },
  table: ({ children }) => (
    <div className="overflow-x-auto rounded-xl border border-surface-border">
      <table className="min-w-[640px] w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-surface-border bg-foreground/[0.03]">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 text-left text-xs font-medium text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-surface-border p-0 align-top [&_img]:rounded-none [&_img]:border-0">
      {children}
    </td>
  ),
  video: ({ children, className, autoPlay, muted, loop, playsInline, ...props }) => (
    <video
      {...props}
      className={className ?? "blog-video"}
      autoPlay={autoPlay ?? true}
      muted={muted ?? true}
      loop={loop ?? true}
      playsInline={playsInline ?? true}
      controls
      preload="metadata"
    >
      {children}
    </video>
  ),
  source: ({ src, type }) => (
    <source src={typeof src === "string" ? src : undefined} type={type} />
  ),
  iframe: ({ src, width, height, ...props }) => (
    <iframe
      src={typeof src === "string" ? src : undefined}
      title="Simulation preview"
      className="h-full w-full border-0"
      width={width ?? "100%"}
      height={height ?? "400"}
      allow="autoplay"
      loading="lazy"
      {...props}
    />
  ),
};

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="blog-markdown [&>*+*]:mt-6 [&_img:not(.blog-asset-thumb):not(.blog-asset-preview)]:rounded-xl [&_img:not(.blog-asset-thumb):not(.blog-asset-preview)]:border [&_img:not(.blog-asset-thumb):not(.blog-asset-preview)]:border-surface-border [&_td_img]:rounded-none [&_td_img]:border-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
