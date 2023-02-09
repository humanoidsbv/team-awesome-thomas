import styled from "styled-components";

export const InputWrapper = styled.div`
  display: grid;
  font-size: ${({ theme }) => theme.fontSizeMedium};
  grid-auto-flow: row;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.grey5};
  margin-bottom: 8px;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.grey1};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.grey3};
  color: ${({ theme }) => theme.grey6};
  padding: 12px 14px;

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
    cursor: unset;
  }
`;
