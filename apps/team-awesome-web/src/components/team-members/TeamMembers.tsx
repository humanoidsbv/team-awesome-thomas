import { useContext, useEffect, useState } from "react";

import * as Styled from "./TeamMembers.styled";
import { TeamMember } from "../team-member";
import * as Types from "../../types";
import { StoreContext } from "../store-context";

interface TeamMembersProps {
  errorMessage?: string;
  teamMembers: Types.TeamMember[];
}

export const TeamMembers = ({ ...props }: TeamMembersProps) => {
  const { teamMembers, setTeamMembers } = useContext(StoreContext);

  useEffect(() => {
    setTeamMembers(props.teamMembers);
  }, []);

  return (
    <>
      <Styled.TeamMembers>
        {teamMembers.map((teamMember) => (
          <TeamMember key={teamMember.id} teamMember={teamMember} />
        ))}
      </Styled.TeamMembers>
    </>
  );
};