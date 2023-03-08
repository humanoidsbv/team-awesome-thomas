import { gql } from "@apollo/client";

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    allTeamMembers {
      id
      avatar
      client
      emailAddress
      firstName
      lastName
      role
      startTimestamp
      description
    }
  }
`;
