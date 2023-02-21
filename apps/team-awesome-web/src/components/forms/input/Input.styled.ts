import styled, { css } from "styled-components";

type InputProps = {
  isValid?: boolean;
  width?: string;
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

export const ErrorMessage = styled.span`
  font-size: 0.8em;
  font-style: italic;
  height: 0;
  opacity: 0.5;
  overflow: visible;
  padding-bottom: 8px;
  transform: translateY(4px);
`;
