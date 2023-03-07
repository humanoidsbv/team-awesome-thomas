import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import * as Styled from "./TeamMembers.styled";
import { TeamMember } from "../team-member";
import * as Types from "../../types";
import { StoreContext } from "../store-context";
import { Select } from "../forms/select";

// GraphQL import
import { GET_TEAM_MEMBERS } from "../../graphql/team-members/queries";

interface TeamMembersProps {
  errorMessage?: string;
  teamMembers: Types.TeamMember[];
}

export const TeamMembers = ({ errorMessage, ...props }: TeamMembersProps) => {
  const { teamMembers, setTeamMembers } = useContext(StoreContext);

  // GraphQL shenanigans
  const { loading, data: teamMemberData } = useQuery(GET_TEAM_MEMBERS, {
    pollInterval: 5000,
  });
  if (loading) {
    console.log("Loading data...");
  } else {
    const { allTeamMembers = {} } = teamMemberData;
    console.log("Members fetched!");
    setTeamMembers(allTeamMembers);
  }

  const [sortedTeamMembers, setSortedTeamMembers] = useState(teamMembers);

  useEffect(() => {
    setSortedTeamMembers(teamMembers);
  }, [teamMembers]);

  return (
    <Styled.TeamMembers>
      <Styled.Actions>
        <Select sortList="teamMembers" direction />
      </Styled.Actions>
      {sortedTeamMembers.map((teamMember) => (
        <TeamMember key={teamMember?.id} teamMember={teamMember} />
      ))}
    </Styled.TeamMembers>
  );
};
