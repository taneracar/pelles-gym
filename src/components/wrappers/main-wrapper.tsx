import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainWrapper({ className, children }: Props) {
  return (
    <div className={`${className} mx-auto px-5 lg:px-10 max-w-[1536px]`}>
      {children}
    </div>
  );
}
