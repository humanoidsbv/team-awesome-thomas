import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
  mutation CreateTimeEntry(
    $activity: String!
    $client: String!
    $date: String!
    $from: String!
    $startTimestamp: Date!
    $stopTimestamp: Date!
    $to: String!
  ) {
    createTimeEntry(
      activity: $activity
      client: $client
      date: $date
      from: $from
      startTimestamp: $startTimestamp
      stopTimestamp: $stopTimestamp
      to: $to
    ) {
      id
      client
      startTimestamp
      stopTimestamp
    }
  }
`;

export const DELETE_TIME_ENTRY = gql`
  mutation RemoveTimeEntry($id: ID!) {
    removeTimeEntry(id: $id) {
      id
    }
  }
`;
