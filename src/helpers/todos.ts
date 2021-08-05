import { colors } from "src/styles";
import { Category, IconName, Priority } from "src/types";

export const setBoltColor = (priority: Priority): string => {
  switch (priority) {
    case "low":
      return colors.green2;
    case "high":
      return colors.red1;
    case "medium":
    default:
      return colors.yellow;
  }
};

export const getCategoryIcon = (category: Category): IconName => {
  switch (category) {
    case "homework":
      return "work-icon";
    case "education":
      return "education-icon";
    case "health":
      return "health-icon";
    case "none":
    default:
      return "transparent-icon";
  }
};
