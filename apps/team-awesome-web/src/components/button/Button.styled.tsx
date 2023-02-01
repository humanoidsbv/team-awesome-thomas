import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: string;
};

export const ButtonBox = styled.button<ButtonProps>`
  align-content: center;
  background-color: ${({ theme }) => theme.green};
  border-radius: 4px;
  color: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  justify-content: center;
  line-height: 0.8;
  padding: 13px 30px;
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

  &:hover,
  &focus {
    background-color: #1e990a;
  }

  &:active {
    background-color: #19770a;
    transition: none;
  }

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
      }
    `}

  @media screen and (${({ theme }) => theme.tablet}) {
    width: auto;
  }
`;
