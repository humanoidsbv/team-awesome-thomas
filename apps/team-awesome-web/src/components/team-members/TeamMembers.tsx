import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { Filter } from "../forms/filter";
import { GET_TEAM_MEMBERS } from "../../graphql/team-members/queries";
import { Select } from "../forms/select";
import { StoreContext } from "../store-context";
import { TeamMember } from "../team-member";
import * as Styled from "./TeamMembers.styled";
import * as Types from "../../types";

interface TeamMembersProps {
  errorMessage?: string;
  teamMembers: Types.TeamMember[];
}

export const TeamMembers = ({ errorMessage, ...props }: TeamMembersProps) => {
  const { teamMembers, setTeamMembers } = useContext(StoreContext);

  const { loading, data: teamMemberData } = useQuery(GET_TEAM_MEMBERS, {
    pollInterval: 5000,
  });
  if (!loading) {
    const { allTeamMembers = {} } = teamMemberData;
    setTeamMembers(allTeamMembers);
  }

  const [sortedTeamMembers, setSortedTeamMembers] = useState(teamMembers);

  return (
    <Styled.TeamMembers>
      <Styled.Actions>
        <Filter filterArray={teamMembers} setFilteredResults={setSortedTeamMembers} />
        <Select
          setSortedResults={setSortedTeamMembers}
          sortArray={teamMembers}
          sortList="teamMembers"
          direction
        />
      </Styled.Actions>
      {sortedTeamMembers.map((teamMember) => (
        <TeamMember key={teamMember?.id} teamMember={teamMember} />
      ))}
    </Styled.TeamMembers>
  );
};
