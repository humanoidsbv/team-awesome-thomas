import styled from "styled-components";

export const SubHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-bottom: solid 1px ${({ theme }) => theme.grey3};
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: auto;
  margin-top: 70px;
  padding: 20px;
  position: fixed;
  width: 100%;

  @media screen and (${({ theme }) => theme.tablet}) {
    flex-wrap: nowrap;
    height: 70px;
    justify-content: space-between;
    padding: 15px 30px;
  }
`;

export const ContextMenu = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  width: 100%;

  & h1,
  & p {
    font-weight: ${({ theme }) => theme.fontWeightBold};
    white-space: nowrap;
  }

  @media screen and (${({ theme }) => theme.tablet}) {
    width: auto;

    & h1::after {
      border-left: solid 1px ${({ theme }) => theme.grey5};
      content: "";
      display: inline-block;
      height: ${({ theme }) => theme.fontSizeMedium};
      margin-left: 20px;
      vertical-align: middle;
    }
  }
`;

export const ContextHeading = styled.h1`
  color: ${({ theme }) => theme.grey6};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
`;

export const ContextIndicator = styled.p`
  color: ${({ theme }) => theme.grey5};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  margin-left: auto;
`;
