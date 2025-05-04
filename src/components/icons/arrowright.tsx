import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  width: string | number;
  height: string | number;
  color?: string;
  className?: string;
};

export default function ArrowRightSVG({
  width,
  height,
  color,
  className,
}: Props) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 4.64 8.116"
      >
        <g id="_15" data-name="15" transform="translate(-7.994 -4.996)">
          <path
            id="Path_3691"
            data-name="Path 3691"
            d="M8.577,13.112a.58.58,0,0,1-.411-.991l3.071-3.066L8.166,5.989a.582.582,0,0,1,.823-.823l3.477,3.477a.58.58,0,0,1,0,.817L8.989,12.938a.58.58,0,0,1-.411.174Z"
            transform="translate(0 0)"
            fill={color}
          />
        </g>
      </svg>
    </div>
  );
}
