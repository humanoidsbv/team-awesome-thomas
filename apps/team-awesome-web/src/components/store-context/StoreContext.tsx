import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import * as Types from "../../types";

interface StoreProviderProps {
  children: ReactNode | ReactNode[];
}

interface StoreContextProps {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  sortKey: Types.SortKey;
  setSortKey: Dispatch<SetStateAction<Types.SortKey>>;
  teamMembers: Types.TeamMember[];
  setTeamMembers: Dispatch<SetStateAction<Types.TeamMember[]>>;
  defaultMember: Types.TimeEntry[];
  sortedArray: Types.TimeEntry[] | Types.TeamMember[];
  setSortedArray: Dispatch<SetStateAction<Types.TimeEntry[] | Types.TeamMember[]>>;
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  const standardKey: Types.SortKey = { key: "id", direction: "ascending" };

  const [sortKey, setSortKey] = useState<Types.SortKey>(standardKey);

  const [teamMembers, setTeamMembers] = useState<Types.TeamMember[]>([]);

  const [sortedArray, setSortedArray] = useState<Types.TeamMember[] | Types.TimeEntry[]>([]);

  const store = {
    timeEntries,
    setTimeEntries,
    teamMembers,
    setTeamMembers,
    sortKey,
    setSortKey,
    sortedArray,
    setSortedArray,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
