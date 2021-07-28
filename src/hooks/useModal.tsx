import { useState } from "react";

type ModalName = "AddNewTodoForm" | "HistoryModal";
interface ModalManager {
  closeModal: () => void;
  openModal: (name: ModalName) => void;
  isVisible: boolean;
  whichModal: ModalName;
}

export const useModal = (): ModalManager => {
  const [whichModal, setWhichModal] = useState<ModalName>("AddNewTodoForm");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeModal = () => {
    setIsVisible(false);
  };
  const openModal = (name: ModalName) => {
    setWhichModal(name);
    setIsVisible(true);
  };

  return {
    closeModal,
    openModal,
    isVisible,
    whichModal,
  };
};
