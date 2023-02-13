import * as Styled from "./SubHeader.styled";
import { Button } from "../button/";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";

interface SubHeaderProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SubHeader = ({ onClick }: SubHeaderProps) => (
  <Styled.SubHeader>
    <Styled.ContextMenu>
      <Styled.ContextHeading>Timesheets</Styled.ContextHeading>
      <Styled.ContextIndicator>12 Entries</Styled.ContextIndicator>
    </Styled.ContextMenu>
    <Button onClick={onClick}>
      <PlusIcon />
      New time entry
    </Button>
  </Styled.SubHeader>
);
