import React, { FC } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "src/locale";
import { NotificationContainer } from "react-notifications";
import HomeScreen from "./screens/HomeScreen";
import "src/assets/fonts/fonts.css";
import "react-notifications/lib/notifications.css";

interface Props {}

const App: FC<Props> = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <HomeScreen />
      <NotificationContainer />
    </I18nextProvider>
  );
};

export default App;
