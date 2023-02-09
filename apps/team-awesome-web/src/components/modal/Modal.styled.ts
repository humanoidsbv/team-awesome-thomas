import styled from "styled-components";

export const ModalBackdrop = styled.div`
  align-content: top;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.grey1};
  border-radius: 4px;
  display: grid;
  gap: 16px;
  grid-auto-rows: min-content;
  height: 100vh;
  padding: 32px 16px;
  width: 100vw;

  @media screen and (${({ theme }) => theme.tablet}) {
    height: min-content;
    margin-top: 15%;
    max-width: 640px;
    padding: 32px;
  }
`;

export const Header = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  & h2 {
    font-weight: ${({ theme }) => theme.fontWeightDefault};
    color: ${({ theme }) => theme.grey5};
    font-size: ${({ theme }) => theme.fontSizeDefault};
  }
`;

export const CloseButton = styled.div`
  align-content: center;
  color: #000;
  cursor: pointer;
  display: grid;
  height: 16px;
  justify-content: center;
  width: 16px;

  &::before,
  &::after {
    border-radius: 1px;
    border: solid 1px currentColor;
    content: "";
    display: block;
    height: 0;
    transform: translateY(0.5px) rotate(45deg);
    width: 16px;
  }
  &::after {
    transform: translateY(-1.5px) rotate(-45deg);
  }
`;
