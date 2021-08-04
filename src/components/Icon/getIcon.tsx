import React from "react";
import * as icons from "src/assets/icons";
import { IconName, IconProps } from "src/types";

export const iconComponents: Record<IconName, React.FC<IconProps>> = {
  "close-icon": icons.CloseIcon,
  "list-icon": icons.ListIcon,
  "plus-icon": icons.PlusIcon,
  "education-icon": icons.EducationIcon,
  "work-icon": icons.WorkIcon,
  "health-icon": icons.HealthIcon,
  "bolt-icon": icons.BoltIcon,
  "bin-icon": icons.BinIcon,
  "done-icon": icons.DoneIcon,
  "back-icon": icons.BackIcon,
  "transparent-icon": icons.TransparentIcon,
};
