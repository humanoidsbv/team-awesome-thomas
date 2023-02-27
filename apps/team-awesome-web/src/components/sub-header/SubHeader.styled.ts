import styled from "styled-components";

export const SubHeader = styled.div`
  align-content: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-bottom: solid 1px ${({ theme }) => theme.grey3};
  display: grid;
  gap: 20px;
  grid-auto-flow: row;
  padding: 20px;
  width: 100%;

  @media screen and (${({ theme }) => theme.tablet}) {
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 16px 32px;
  }
`;

export const ContextMenu = styled.div`
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 100%;

  & h1,
  & p {
    align-content: center;
    display: grid;
    font-weight: ${({ theme }) => theme.fontWeightBold};
    grid-auto-flow: column;
    white-space: nowrap;
  }

  @media screen and (${({ theme }) => theme.tablet}) {
    width: auto;

    & h1::after {
      align-self: center;
      border-left: solid 1px ${({ theme }) => theme.grey5};
      content: "";
      height: ${({ theme }) => theme.fontSizeMedium};
      margin-left: 20px;
    }
  }
`;

export const ContextHeading = styled.h1`
  color: ${({ theme }) => theme.grey6};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const ContextCount = styled.p`
  color: ${({ theme }) => theme.grey5};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  margin-left: auto;
`;
