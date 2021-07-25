import React, { FC } from "react";
import { IconProps } from "src/types";

export const BinIcon: FC<IconProps> = ({ size = 18 }) => {
  return (
    <svg height={`${size}pt`} width={`${size}pt`} viewBox="0 0 64 64">
      <path
        d="M14.296 25.248l4.475 34.013A2 2 0 0020.754 61h22.492a2 2 0 001.983-1.739L48.684 33 50 23H16.544z"
        fill="#57a5ff"
      />
      <path
        d="M30 31v22a2 2 0 104 0V31a2 2 0 10-4 0zM22 31v22a2 2 0 104 0V31a2 2 0 10-4 0zM38 31v22a2 2 0 104 0V31a2 2 0 10-4 0z"
        fill="#f2f8ff"
      />
      <path
        d="M30 17l4 2h5l-2-5-4-1zM48 10l-5 1v2l1 4 8-1-3-4z"
        fill="#004fa8"
      />
      <path
        d="M30.172 3.716a2 2 0 00-2.828 0L4.716 26.343a2 2 0 000 2.828L7.544 32 33 6.544z"
        fill="#57a5ff"
      />
      <path
        d="M45.229 59.261l.391-2.973c-12.834-4.507-21.688-17.063-20.897-31.305l.11-1.983h-8.289l-2.248 2.248 4.475 34.013A2 2 0 0020.754 61h22.492a2 2 0 001.983-1.739z"
        fill="#303030"
        opacity={0.12}
      />
      <path
        d="M27.029 8.971L5.772 30.228 7.544 32 33 6.544l-2.828-2.828a2 2 0 00-2.828 0l-.314.314a3.494 3.494 0 01-.001 4.941zM49 12l-1-2-1.818.364L47 12l3 4-6.061.758L44 17l8-1zM35 15l1.6 4H39l-2-5-4-1-.947 1.263z"
        fill="#303030"
        opacity={0.12}
      />
      <path
        d="M10.373 20.686l-2.121-2.121a3.003 3.003 0 010-4.243l7.071-7.071a3.002 3.002 0 014.243 0l2.121 2.121-1.414 1.414-2.121-2.121a1.003 1.003 0 00-1.415 0l-7.071 7.071c-.39.39-.39 1.024 0 1.415l2.121 2.121z"
        fill="#57a5ff"
      />
      <g fill="#004fa8">
        <path d="M44 2h2v2h-2zM54.022 9.793l-1.219-1.586a11.66 11.66 0 019.393-2.188l-.392 1.961a9.672 9.672 0 00-7.782 1.813zM57 12h2v2h-2zM50 7h-2c0-2.757 2.243-5 5-5v2c-1.654 0-3 1.346-3 3z" />
      </g>
    </svg>
  );
};
