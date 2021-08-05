import { useState } from "react";

interface ModalManager {
  closeModal: () => void;
  openModal: () => void;
  isVisible: boolean;
}
export type ModalType = "new" | "history" | undefined;

export const useModal = (): ModalManager => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeModal = () => {
    setIsVisible(false);
  };
  const openModal = () => {
    setIsVisible(true);
  };

  return {
    closeModal,
    openModal,
    isVisible,
  };
};
