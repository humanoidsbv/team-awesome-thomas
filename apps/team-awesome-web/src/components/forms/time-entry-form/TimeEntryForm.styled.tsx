import styled from "styled-components";

export const TimeEntryForm = styled.form`
  display: grid;
  gap: 16px;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(3, 1fr) repeat(3, 2fr);
  }
`;

export const FormActions = styled.div`
  display: grid;
  gap: 32px;
  grid-auto-flow: column;
  grid-column: 1 / -1;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;
`;

export const TimeWrapper = styled.div`
  display: grid;
  justify-content: end;
  margin-left: 32px;
  width: min-content;
`;

export const TimeLabel = styled.label`
  color: ${({ theme }) => theme.grey5};
  margin-bottom: 8px;
`;

export const Time = styled.div`
  color: ${({ theme }) => theme.grey5};
  font-size: ${({ theme }) => theme.fontSizeLarge};
`;
