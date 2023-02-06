import styled from "styled-components";
import { ReactComponent as Bin } from "../../../public/icons/bin.svg";

export const TimeEntry = styled.div`
  grid-column: 2 / span 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr) min-content;
  gap: 24px;
  align-items: center;
  height: 80px;
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  font-size: ${({ theme }) => theme.fontSizeDefault};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

export const Location = styled.div``;

export const Times = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
`;

export const TimeRange = styled.div`
  text-align: right;
`;

export const Duration = styled.div`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizeMedium};
  color: ${({ theme }) => theme.grey5};
`;

export const DeleteIcon = styled(Bin)`
  fill: ${({ theme }) => theme.grey5};

  &:hover,
  &:focus {
    cursor: pointer;
    fill: ${({ theme }) => theme.red};
  }
`;
