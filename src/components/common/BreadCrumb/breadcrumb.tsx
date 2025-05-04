import ArrowRightSVG from "@/components/icons/arrowright";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({
  lang,
  page,
  color = "gray",
  detail,
}: {
  lang: string;
  page: string;
  color?: "gray" | "white";
  detail?: string;
}) {
  return (
    <div
      className={`${
        color === "gray" ? "text-[#707070]" : "text-white"
      } hidden lg:flex gap-3 items-center text-[14px] pt-3`}
    >
      <Link
        href="/"
        className={`${
          color === "gray" ? "hover:text-[#707070]/50" : "hover:text-white/50"
        } capitalize cursor-pointer  duration-200 transition-colors`}
      >
        {" "}
        {lang === "tr" ? " Ana Sayfa" : "Home Page"}
      </Link>
      <ArrowRightSVG
        width={4.6}
        height={8.1}
        color={color === "gray" ? "#707070" : "#fff"}
      />
      {detail ? (
        <Link
          href={
            lang === "tr"
              ? `/${page.toLowerCase()}`
              : `/en/${page.toLowerCase()}`
          }
          className={`${
            color === "gray" ? "hover:text-[#707070]/50" : "hover:text-white/50"
          } capitalize cursor-pointer  duration-200 transition-colors`}
        >
          {page}
        </Link>
      ) : (
        <p className="capitalize">{page}</p>
      )}
      {detail && (
        <ArrowRightSVG
          width={4.6}
          height={8.1}
          color={color === "gray" ? "#707070" : "#fff"}
        />
      )}
      {detail && <p className="capitalize">{detail}</p>}
    </div>
  );
}
