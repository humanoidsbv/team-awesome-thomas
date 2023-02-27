import styled from "styled-components";

export const TimeEntries = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 0 16px;

  @media screen and (${({ theme }) => theme.tablet}) {
    grid-template-columns: minmax(375px, 1080px);
  }
`;
