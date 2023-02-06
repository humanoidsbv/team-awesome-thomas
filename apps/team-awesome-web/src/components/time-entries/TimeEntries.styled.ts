import styled from "styled-components";

export const TimeEntries = styled.div`
  display: grid;
  grid-template-columns: 16px 1fr 16px;
  justify-content: center;
  margin-top: 32px;

  @media screen and (${({ theme }) => theme.tablet}) {
    grid-template-columns: 16px minmax(375px, 1080px) 16px;
  }
`;
