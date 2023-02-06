import styled from "styled-components";

export const TimeEntryHeader = styled.div`
  color: ${({ theme }) => theme.grey5};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  font-size: ${({ theme }) => theme.fontSizeDefault};
  margin: 32px 0 16px;

  & h2 {
    font-size: ${({ theme }) => theme.fontSizeDefault};
    font-weight: ${({ theme }) => theme.fontWeightBold};
  }
  @media screen and (${({ theme }) => theme.tablet}) {
    & h2 {
      font-size: ${({ theme }) => theme.fontSizeLarge};
    }
  }
`;

export const Date = styled.h2``;

export const Time = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeDefault};
  font-weight: ${({ theme }) => theme.fontWeightBold};

  justify-self: right;
`;
