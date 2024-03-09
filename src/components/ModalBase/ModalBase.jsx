import { useEffect } from "react";

import { Backdrop, CloseBtn, CrossIcon, Modal } from "./ModalBase.styled";

export const ModalBase = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleOverlayClick}>
      <Modal>
        <CloseBtn type="button" onClick={onClose}>
          <CrossIcon />
        </CloseBtn>
        {children}
      </Modal>
    </Backdrop>
  );
};
