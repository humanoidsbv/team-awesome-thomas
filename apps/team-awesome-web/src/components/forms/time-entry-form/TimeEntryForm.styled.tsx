import styled from "styled-components";

export const TimeEntryForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

export const FormActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 16px;
  gap: 32px;
  grid-column: 1 / -1;
`;
