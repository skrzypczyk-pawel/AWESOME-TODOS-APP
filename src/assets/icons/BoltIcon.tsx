import React, { FC } from "react";
import { colors } from "src/styles";
import { IconProps } from "src/types";

export const BoltIcon: FC<IconProps> = ({
  color = colors.black,
  size = 18,
}) => {
  return (
    <svg height={`${size}pt`} width={`${size}pt`} viewBox="0 0 512 512">
      <path
        d="M400.268 175.599a8.53 8.53 0 00-7.731-4.932h-101.12l99.797-157.568a8.529 8.529 0 00.265-8.678A8.533 8.533 0 00384.003 0H247.47a8.541 8.541 0 00-7.637 4.719l-128 256a8.522 8.522 0 00.375 8.294 8.546 8.546 0 007.262 4.053h87.748l-95.616 227.089a8.55 8.55 0 003.413 10.59 8.55 8.55 0 0010.983-1.775l273.067-324.267a8.541 8.541 0 001.203-9.104z"
        fill={color}
      />
    </svg>
  );
};
