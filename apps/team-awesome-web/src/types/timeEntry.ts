export type TimeEntry = {
  __typename?: string;
  id: number;
  client: string;
  activity?: string;
  startTimestamp: string;
  stopTimestamp: string;
  date?: string;
  from?: string;
  to?: string;
};
