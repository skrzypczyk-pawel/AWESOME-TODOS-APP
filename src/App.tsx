import React, { FC } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "locale";
import HomeScreen from "./screens/HomeScreen";

interface Props {}

const App: FC<Props> = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <HomeScreen />
    </I18nextProvider>
  );
};

export default App;
