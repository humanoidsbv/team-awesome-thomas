import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import * as Types from "../../types";

interface StoreProviderProps {
  children: ReactNode | ReactNode[];
}

interface StoreContextProps {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  sortKey: string;
  setSortKey: Dispatch<SetStateAction<string>>;
  teamMembers: Types.TeamMember[];
  setTeamMembers: Dispatch<SetStateAction<Types.TeamMember[]>>;
  defaultMember: Types.TimeEntry[];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  const [sortKey, setSortKey] = useState<string>();

  const [teamMembers, setTeamMembers] = useState<Types.TeamMember[]>([]);

  const store = {
    timeEntries,
    setTimeEntries,
    teamMembers,
    setTeamMembers,
    sortKey,
    setSortKey,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
