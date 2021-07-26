import { NotificationManager } from "react-notifications";
import { i18n } from "src/locale";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface Notification {
  type?: NotificationType;
  text: string;
  title?: string;
  time?: number;
}

export const useNotification = () => {
  const showNotification = ({
    text,
    type = "success",
    title = i18n.t("notification:title"),
    time = 3000,
  }: Notification) => {
    switch (type) {
      case "info":
        return NotificationManager.info(text);
      case "success":
        return NotificationManager.success(text, title);
      case "warning":
        return NotificationManager.warning(text, title, time);
      case "error":
        return NotificationManager.error(text, title, time);
      default:
        return NotificationManager.info(i18n.t("notification:default"));
    }
  };

  return { handleNotification: showNotification };
};
