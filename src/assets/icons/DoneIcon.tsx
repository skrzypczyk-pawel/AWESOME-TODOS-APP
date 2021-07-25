import React, { FC } from "react";
import { colors } from "src/styles";
import { IconProps } from "src/types";

export const DoneIcon: FC<IconProps> = ({
  color = colors.blue4,
  size = 18,
}) => {
  return (
    <svg height={`${size}pt`} width={`${size}pt`} viewBox="0 0 512 512">
      <path
        d="M226.967 309.442l-27.384-27.384c-7.811-7.811-20.474-7.811-28.284 0-7.811 7.81-7.811 20.473 0 28.284l41.526 41.526c7.805 7.805 20.475 7.81 28.284 0l99.452-99.452c7.811-7.81 7.81-20.473 0-28.284s-20.473-7.811-28.284 0l-85.31 85.31z"
        fill={color}
      />
      <path
        d="M426 38H313.93V20c0-11.046-8.954-20-20-20h-76c-11.046 0-20 8.954-20 20v18H86c-11.046 0-20 8.954-20 20v434c0 11.046 8.954 20 20 20h340c11.046 0 20-8.954 20-20V58c0-11.046-8.954-20-20-20zm-188.07 2h36v36h-36V40zM406 472H106V78h91.93v18c0 11.046 8.954 20 20 20h76c11.046 0 20-8.954 20-20V78H406v394z"
        fill={color}
      />
    </svg>
  );
};
