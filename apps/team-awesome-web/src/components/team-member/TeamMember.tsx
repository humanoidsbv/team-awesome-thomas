import * as Types from "../../types";
import * as Styled from "./TeamMember.styled";

interface TeamMemberProps {
  teamMember: Types.TeamMember;
}

export const TeamMember = ({ teamMember }: TeamMemberProps) => {
  const startDate = new Date(teamMember.startTimestamp);
  const startDateString = `${startDate.toLocaleString("en-GB", {
    month: "long",
  })} ${startDate.toLocaleString("en-GB", {
    year: "numeric",
  })}`;

  return (
    <Styled.TeamMember>
      <Styled.MemberData>
        <Styled.Avatar src="img/avatars/amijs.png" alt="Avatar image" />
        <Styled.Name>
          {teamMember.firstName} {teamMember.lastName}
        </Styled.Name>
        <Styled.Role>{teamMember.role}</Styled.Role>
      </Styled.MemberData>
      <Styled.ClientData>
        <Styled.ClientName>{teamMember.client}</Styled.ClientName>
        <Styled.ClientLabel>Client</Styled.ClientLabel>
        <Styled.StartDate>{startDateString}</Styled.StartDate>
        <Styled.DateLabel>Starting date</Styled.DateLabel>
      </Styled.ClientData>
    </Styled.TeamMember>
  );
};
