import * as Styled from "./TeamMembers.styled";
import { TeamMember } from "../team-member";
import { Modal } from "../modal";
import { TeamMemberForm } from "../forms/team-member-form";

export const TeamMembers = () => {
  return (
    <>
      <Styled.TeamMembers>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </Styled.TeamMembers>
    </>
  );
};
