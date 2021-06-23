import React, { FC } from "react";

interface Props {}

const SvgComponent: FC<Props> = () => {
  return (
    <svg height="19pt" viewBox="0 0 512 512" width="19pt">
      <path
        d="M304 512h-96c-17.68 0-32-14.32-32-32V336H32c-17.68 0-32-14.32-32-32v-96c0-17.68 14.32-32 32-32h144V32c0-17.68 14.32-32 32-32h96c17.68 0 32 14.32 32 32v144h144c17.68 0 32 14.32 32 32v96c0 17.68-14.32 32-32 32H336v144c0 17.68-14.32 32-32 32zm0 0"
        fill="#48c8ef"
      />
    </svg>
  );
};
export default SvgComponent;
