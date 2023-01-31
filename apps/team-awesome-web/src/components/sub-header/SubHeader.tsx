import * as Styled from "./SubHeader.styled";
import { Button } from "../button/";

export const SubHeader = () => {
  return (
    <Styled.SubHeader>
      <Styled.ContextMenu>
        <Styled.ContextHeading>Team members</Styled.ContextHeading>
        <Styled.ContextIndicator>22 Humanoids</Styled.ContextIndicator>
      </Styled.ContextMenu>
      <Button label="New Humanoid" href="treinen.online/" />
    </Styled.SubHeader>
  );
};
