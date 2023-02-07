import * as Styled from "./Modal.styled";
import { useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as CloseIcon } from "../../../public/icons/close.svg";

interface ModalProps {
  children: ReactNode;
  title: string;
}

export const Modal = ({ children, isActive, onClose, title }: ModalProps) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.Header>
              <h2>{title}</h2>
              <Styled.CloseButton onClick={onClose} />
            </Styled.Header>
            {children}
          </Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
