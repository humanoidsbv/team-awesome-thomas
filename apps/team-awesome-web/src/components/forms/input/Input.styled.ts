import styled, { css } from "styled-components";

type InputProps = {
  width?: string;
  isValid?: boolean;
};

export const InputWrapper = styled.div<InputProps>`
  display: grid;
  font-size: ${({ theme }) => theme.fontSizeMedium};
  grid-auto-flow: row;
  ${({ width }) =>
    width === "full"
      ? css`
          grid-column: 1 / -1;
        `
      : css`
          grid-column: 1 / span ${width};
        `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.grey5};
  margin-bottom: 8px;
`;

export const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.grey1};
  border-radius: 4px;
  ${({ isValid }) =>
    !isValid
      ? css`
          border: solid 1px ${({ theme }) => theme.red};
        `
      : css`
          border: solid 1px ${({ theme }) => theme.grey3};
        `}
  color: ${({ theme }) => theme.grey6};
  padding: 16px 14px;

  &::placeholder {
    opacity: 0.5;
  }

  &:hover {
    border: solid 1px ${({ theme }) => theme.grey5};
    cursor: pointer;
  }

  &:active,
  &:focus {
    border: solid 1px ${({ theme }) => theme.grey6};
    cursor: initial;
  }
`;

export const ErrorMsg = styled.span`
  height: 0;
  transform: translateY(4px);
  padding-bottom: 8px;
  overflow: visible;
  font-style: italic;
  opacity: 0.5;
  font-size: 0.8em;
`;
