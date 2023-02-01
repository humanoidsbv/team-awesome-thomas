import * as Styled from "./SubHeader.styled";
import { Button } from "../button/";

export const SubHeader = () => {
  return (
    <Styled.SubHeader>
      <Styled.ContextMenu>
        <Styled.ContextHeading>Timesheets</Styled.ContextHeading>
        <Styled.ContextIndicator>12 Entries</Styled.ContextIndicator>
      </Styled.ContextMenu>
      <Button label="New time entry" icon="plus" />
    </Styled.SubHeader>
  );
};
