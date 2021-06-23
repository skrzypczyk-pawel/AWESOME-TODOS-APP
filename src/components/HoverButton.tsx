import React, { FC, HTMLAttributes, ReactElement } from "react";

import { css } from "aphrodite";
import { i18n } from "locale";

interface Props {
  onClick: () => void;
  icon: ReactElement;
  iconStyle?: HTMLAttributes<HTMLButtonElement>;
  style?: HTMLAttributes<HTMLButtonElement>;
}

const HoverButton: FC<Props> = ({ onClick, icon, iconStyle, style }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css(style)}>
        <div className={css(iconStyle)}>{icon}</div>
        <p>{i18n.t("button:newEntry")}</p>
      </button>
    </>
  );
};

export default HoverButton;
