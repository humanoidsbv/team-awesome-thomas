import styled, { css } from "styled-components";

type SelectProps = {};

export const Select = styled.select`
  background-color: ${({ theme }) => theme.grey1};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.grey3};
  color: ${({ theme }) => theme.grey6};
  display: grid;
  grid-auto-flow: row;
  justify-self: end;
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

export const Option = styled.option``;

export const ErrorMessage = styled.span`
  font-size: 0.8em;
  font-style: italic;
  height: 0;
  opacity: 0.5;
  overflow: visible;
  padding-bottom: 8px;
  transform: translateY(4px);
`;
