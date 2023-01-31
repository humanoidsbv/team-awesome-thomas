import styled from "styled-components";

export const ButtonBox = styled.button<{ href: string }>`
  align-content: center;
  background-color: ${({ theme }) => theme.green};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 13px 30px;
  white-space: nowrap;
  width: 100%;

  & svg {
    height: auto;
    margin-right: 15px;
    width: ${({ theme }) => theme.fontSizeMedium};
  }

  & svg g {
    fill: ${({ theme }) => theme.backgroundPrimary};
  }

  @media screen and (${({ theme }) => theme.tablet}) {
    width: auto;
  }
`;

export const ButtonLabel = styled.span`
  color: ${({ theme }) => theme.backgroundPrimary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: 1;
`;
