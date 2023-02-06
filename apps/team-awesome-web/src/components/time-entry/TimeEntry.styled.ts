import styled from "styled-components";
import { ReactComponent as Bin } from "../../../public/icons/bin.svg";

export const TimeEntry = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 4px;
  display: grid;
  font-size: ${({ theme }) => theme.fontSizeDefault};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  gap: 16px;
  grid-template-columns: 4px 1fr repeat(2, min-content);
  height: 80px;
  margin-bottom: 2px;
  overflow: hidden;

  &::before {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    content: "";
    height: 100%;
    width: 4px;
  }
`;

export const Times = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-flow: row;
  white-space: nowrap;
`;

export const TimeRange = styled.div`
  text-align: right;
`;

export const Duration = styled.div`
  color: ${({ theme }) => theme.grey5};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  text-align: right;
`;

export const DeleteIcon = styled(Bin)`
  fill: ${({ theme }) => theme.grey5};
  margin: 16px;

  &:hover,
  &:focus {
    cursor: pointer;
    fill: ${({ theme }) => theme.red};
  }
`;
