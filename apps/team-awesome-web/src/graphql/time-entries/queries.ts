import { gql } from "@apollo/client";

export const GET_TIME_ENTRIES = gql`
  query GetTimeEntries {
    allTimeEntries {
      id
      activity
      client
      startTimestamp
      stopTimestamp
    }
  }
`;
