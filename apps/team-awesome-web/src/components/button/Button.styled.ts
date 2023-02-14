import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: string;
};

export const Button = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 4px;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  padding: 14px 32px;
  transition: background-color 0.2s ease-in;
  white-space: nowrap;
  width: 100%;

  & svg {
    height: auto;
    margin-right: 16px;
    width: ${({ theme }) => theme.fontSizeMedium};
  }

  & svg g {
    fill: ${({ theme }) => theme.backgroundPrimary};
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${({ theme }) => theme.green};
      color: ${({ theme }) => theme.backgroundPrimary};

      &:hover,
      &focus {
        background-color: #1e990a;
      }

      &:active {
        background-color: #19770a;
        transition: none;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.grey2};
      border: solid 1px ${({ theme }) => theme.grey3};
      color: ${({ theme }) => theme.grey6};

      & svg g {
        fill: ${({ theme }) => theme.grey6};
      }

      &:hover,
      &:focus {
        background-color: #f1f2f2;
      }

      &:active {
        background-color: #e9e9e9;
        transition: none;
      }
    `}

  &:disabled {
    background-color: ${({ theme }) => theme.grey3};
    color: ${({ theme }) => theme.grey4};
    cursor: not-allowed;
  }

  @media screen and (${({ theme }) => theme.tablet}) {
    width: auto;
  }
`;
