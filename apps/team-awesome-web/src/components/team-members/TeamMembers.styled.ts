import styled from "styled-components";

export const TeamMembers = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 40px 16px;
  row-gap: 20px;

  @media screen and (${({ theme }) => theme.tablet}) {
    grid-template-columns: minmax(375px, 1080px);
  }
`;
