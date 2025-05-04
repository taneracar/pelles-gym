import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
type TImageComponent = {
  src?: string;
  srcStatic?: string;
  alt: string;
  className?: string;
  quality?: number;
  priority?: boolean;
};

export default function CustomImage({
  src,
  srcStatic,
  alt,
  className,
  quality = 100,
}: TImageComponent) {
  const fullUrl = srcStatic
    ? `/${srcStatic}`
    : `${process.env.NEXT_PUBLIC_API_URL}/${src}`;

  return (
    <>
      {src || srcStatic ? (
        <Image
          src={fullUrl}
          alt={alt}
          className={className}
          quality={quality}
          width={1000}
          height={1000}
        />
      ) : (
        ""
      )}
    </>
  );
}
