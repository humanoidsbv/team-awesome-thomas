import styled from "styled-components";

export const TeamMemberForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (${({ theme }) => theme.tablet}) {
  }
`;

export const Avatar = styled.img`
  grid-column: 1 / -1;
  justify-self: center;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  margin: 16px 0;
`;

export const FormActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 16px;
  gap: 32px;
  grid-column: 1 / -1;
`;
