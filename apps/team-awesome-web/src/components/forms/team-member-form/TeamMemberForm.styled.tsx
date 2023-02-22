import styled from "styled-components";

export const TeamMember = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(3, 1fr) repeat(3, 2fr);
  }
`;

export const FormActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 16px;
  gap: 32px;
  grid-column: 1 / -1;
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
