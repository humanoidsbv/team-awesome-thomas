import * as Styled from "./SubHeader.styled";
import { Button } from "../button/";

export const SubHeader = () => {
  return (
    <Styled.SubHeader>
      <Styled.ContextMenu>
        <Styled.ContextHeading>Timesheets</Styled.ContextHeading>
        <Styled.ContextIndicator>12 Entries</Styled.ContextIndicator>
      </Styled.ContextMenu>
      <Button variant="primary" icon="plus">
        New time entry
      </Button>
    </Styled.SubHeader>
  );
};
