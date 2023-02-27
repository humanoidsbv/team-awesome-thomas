import styled from "styled-components";

export const TeamMemberForm = styled.form`
  display: grid;
  gap: 16px;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  grid-column: 1 / -1;
  height: 96px;
  justify-self: center;
  margin: 16px 0;
  width: 96px;
`;

export const FormActions = styled.div`
  display: grid;
  gap: 32px;
  grid-auto-flow: column;
  grid-column: 1 / -1;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;
`;
