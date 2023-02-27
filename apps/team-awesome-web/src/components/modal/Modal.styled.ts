import styled from "styled-components";

export const ModalBackdrop = styled.div`
  align-content: top;
  background-color: ${({ theme }) => theme.backgroundOverlay};
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  justify-items: center;
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
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  padding: 32px 16px;
  width: 100%;

  @media screen and (${({ theme }) => theme.tablet}) {
    height: min-content;
    align-self: center;
    max-width: 560px;
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
