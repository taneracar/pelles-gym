import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  width: string | number;
  height: string | number;
  color?: string;
  className?: string;
};

export default function ArrowLeftSVG({
  width,
  height,
  color,
  className,
}: Props) {
  return (
    <svg
      id="_15"
      data-name="15"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 5.509 9.635"
      className={className}
    >
      <path
        id="Path_3691"
        data-name="Path 3691"
        d="M8.686,14.631A.688.688,0,0,1,8.2,13.454l3.646-3.64L8.2,6.175A.691.691,0,0,1,9.175,5.2L13.3,9.326a.688.688,0,0,1,0,.97L9.175,14.424a.688.688,0,0,1-.488.206Z"
        transform="translate(-7.994 -4.996)"
        fill={color}
      />
    </svg>
  );
}
