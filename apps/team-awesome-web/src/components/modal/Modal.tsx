/* eslint-disable react/jsx-indent */
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import * as Styled from "./Modal.styled";

interface ModalProps {
  children: ReactNode;
  title: string;
  isActive: boolean;
  onClose: () => void;
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
