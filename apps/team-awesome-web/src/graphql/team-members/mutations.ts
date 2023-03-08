import { gql } from "@apollo/client";

export const ADD_TEAM_MEMBER = gql`
  mutation CreateTeamMember(
    $avatar: String!
    $client: String!
    $description: String!
    $emailAddress: String!
    $firstName: String!
    $lastName: String!
    $role: String!
    $startTimestamp: Date!
  ) {
    createTeamMember(
      avatar: $avatar
      client: $client
      description: $description
      emailAddress: $emailAddress
      firstName: $firstName
      lastName: $lastName
      role: $role
      startTimestamp: $startTimestamp
    ) {
      avatar
      client
      description
      emailAddress
      firstName
      id
      lastName
      role
      startTimestamp
    }
  }
`;
