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

export const TeamMembers = ({ ...props }: TeamMembersProps) => {
  const { data } = {};

  // GraphQL shenanigans
  const { data: teamMemberData } = useQuery(GET_TEAM_MEMBERS, {
    pollInterval: 2000,
  });

  const { allTeamMembers = {} } = teamMemberData;

  console.log(allTeamMembers);

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
      <Styled.Actions>{/* <Select sortList="teamMembers" direction /> */}</Styled.Actions>
      {sortedTeamMembers.map((teamMember) => (
        <TeamMember key={teamMember.id} teamMember={teamMember} />
      ))}
    </Styled.TeamMembers>
  );
};
