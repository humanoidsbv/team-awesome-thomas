import * as Styled from "./Modal.styled";
import React from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, isActive, onClose }) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>{children}</Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
