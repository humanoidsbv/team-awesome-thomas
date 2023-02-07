import styled from "styled-components";

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

export const ModalBackdrop = styled.div`
  background-color: #000;
  height: 100vh;
  left: 0;
  opacity: 0.4;
  position: fixed;
  top: 0;
  width: 100vw;
`;
