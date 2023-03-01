import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

import * as Styled from "./TeamMembers.styled";
import { TeamMember } from "../team-member";
import * as Types from "../../types";
import { StoreContext } from "../store-context";
import { Select } from "../forms/select";

interface TeamMembersProps {
  errorMessage?: string;
  teamMembers: Types.TeamMember[];
}

export const TeamMembers = ({ ...props }: TeamMembersProps) => {
  const { teamMembers, setTeamMembers } = useContext(StoreContext);

  const [sortedTeamMembers, setSortedTeamMembers] = useState<Types.TeamMember[]>(props.teamMembers);

  useEffect(() => {
    setTeamMembers(props.teamMembers);
  }, []);

  useEffect(() => {
    setSortedTeamMembers(teamMembers);
  }, [teamMembers]);

  return (
    <Styled.TeamMembers>
      <Styled.Actions>
        <Select
          sortList="teamMembers"
          sortArray={teamMembers}
          setSortedResults={
            setSortedTeamMembers as Dispatch<SetStateAction<Types.TeamMember[] | Types.TimeEntry[]>>
          }
          direction
        />
      </Styled.Actions>
      {sortedTeamMembers.map((teamMember) => (
        <TeamMember key={teamMember.id} teamMember={teamMember} />
      ))}
    </Styled.TeamMembers>
  );
};
