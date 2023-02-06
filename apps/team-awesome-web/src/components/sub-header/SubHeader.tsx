import * as Styled from "./SubHeader.styled";
import { Button } from "../button/";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";

export const SubHeader = () => (
  <Styled.SubHeader>
    <Styled.ContextMenu>
      <Styled.ContextHeading>Timesheets</Styled.ContextHeading>
      <Styled.ContextIndicator>12 Entries</Styled.ContextIndicator>
    </Styled.ContextMenu>
    <Button>
      <PlusIcon />
      New time entry
    </Button>
  </Styled.SubHeader>
);
