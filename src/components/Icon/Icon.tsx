import React, { FC } from "react";
import { IconName } from "src/types";
import { iconComponents } from "./getIcon";

interface Props {
  name: IconName;
  color?: string;
  size?: number;
}
export const Icon: FC<Props> = ({ name, color, size }) => {
  const IconComponent = iconComponents[name];

  return <IconComponent color={color} size={size} />;
};
