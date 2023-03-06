import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import * as Types from "../../types";

interface StoreProviderProps {
  children: ReactNode | ReactNode[];
}

interface StoreContextProps {
  setSortedArray: Dispatch<SetStateAction<Types.TimeEntry[] | Types.TeamMember[]>>;
  setSortKey: Dispatch<SetStateAction<Types.SortKey>>;
  setTeamMembers: Dispatch<SetStateAction<Types.TeamMember[]>>;
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  sortedArray: Types.TimeEntry[] | Types.TeamMember[];
  sortKey: Types.SortKey;
  teamMembers: Types.TeamMember[];
  timeEntries: Types.TimeEntry[];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [sortedArray, setSortedArray] = useState<Types.TeamMember[] | Types.TimeEntry[]>([]);

  const standardKey: Types.SortKey = { key: "id", direction: "ascending" };

  const [sortKey, setSortKey] = useState<Types.SortKey>(standardKey);

  const [teamMembers, setTeamMembers] = useState<Types.TeamMember[]>([]);

  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  const store = {
    setSortedArray,
    setSortKey,
    setTeamMembers,
    setTimeEntries,
    sortedArray,
    sortKey,
    teamMembers,
    timeEntries,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
