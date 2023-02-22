import styled from "styled-components";

export const TeamMember = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.grey3};
  display: grid;
  font-size: ${({ theme }) => theme.fontSizeDefault};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, max-content);

  &::before {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    content: "";
    grid-row: 1 / -1;
    height: 100%;
    width: 4px;
  }

  @media screen and (${({ theme }) => theme.tablet}) {
    grid-template-columns: 4px repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const Avatar = styled.img`
  border-radius: 48px;
  grid-row: 1 / -1;
  height: 48px;
  width: 48px;
`;

export const MemberData = styled.div`
  align-content: center;
  align-items: start;
  column-gap: 24px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  min-height: 80px;
  padding: 16px;
`;

export const Name = styled.p`
  align-self: end;
  font-size: ${({ theme }) => theme.fontSizeDefault};
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.grey5};
  font-size: ${({ theme }) => theme.fontSizeMedium};
`;

export const ClientData = styled(MemberData)`
  border-top: solid 1px ${({ theme }) => theme.grey3};
  column-gap: 32px;

  @media screen and (${({ theme }) => theme.tablet}) {
    border: none;
    justify-content: end;
    justify-items: end;
  }
`;

export const ClientName = styled(Name)``;

export const ClientLabel = styled(Role)``;

export const StartDate = styled(ClientName)``;

export const DateLabel = styled(ClientLabel)``;
