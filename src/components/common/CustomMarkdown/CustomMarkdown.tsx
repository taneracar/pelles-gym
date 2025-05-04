import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type MarkdownRendererProps = {
  content: string;
  className?: string;
};
export default function CustomMarkdown({
  content,
  className,
}: MarkdownRendererProps) {
  const enhancedContent = content?.replace(/(https:\/\/[^\s]+)/g, (match) => {
    if (match.includes(process.env.NEXT_PUBLIC_API_URL as string)) {
      return match;
    }

    return `<span class="underline hover:font-semibold hover:transition-colors hover:duration-200">${match}</span>`;
  });
  return (
    <div className={`whitespace-pre-wrap ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {enhancedContent}
      </ReactMarkdown>
    </div>
  );
}
