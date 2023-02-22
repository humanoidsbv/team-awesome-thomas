import * as Types from "../../types";
import * as Styled from "./TeamMember.styled";

// interface TeamMemberProps {}

export const TeamMember = () => {
  return (
    <Styled.TeamMember>
      <Styled.MemberData>
        <Styled.Avatar src="img/avatars/amijs.png" alt="Avatar image" />
        <Styled.Name>Amijs Breunesse</Styled.Name>
        <Styled.Role>Front-end Developer</Styled.Role>
      </Styled.MemberData>
      <Styled.ClientData>
        <Styled.ClientName>Koppert</Styled.ClientName>
        <Styled.ClientLabel>Client</Styled.ClientLabel>
        <Styled.StartDate>February 2022</Styled.StartDate>
        <Styled.DateLabel>Starting date</Styled.DateLabel>
      </Styled.ClientData>
    </Styled.TeamMember>
  );
};
