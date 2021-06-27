import React, { FC } from "react";
import { colors } from "src/styles";

interface Props {
  color?: string;
  size?: number;
}

export const PlusIcon: FC<Props> = ({
  color = colors.lightBlue,
  size = 18,
}) => {
  return (
    <svg height={`${size}pt`} viewBox="0 0 512 512" width={`${size}pt`}>
      <path
        d="M304 512h-96c-17.68 0-32-14.32-32-32V336H32c-17.68 0-32-14.32-32-32v-96c0-17.68 14.32-32 32-32h144V32c0-17.68 14.32-32 32-32h96c17.68 0 32 14.32 32 32v144h144c17.68 0 32 14.32 32 32v96c0 17.68-14.32 32-32 32H336v144c0 17.68-14.32 32-32 32zm0 0"
        fill={color}
      />
    </svg>
  );
};
