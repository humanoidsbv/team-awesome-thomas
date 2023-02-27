import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import * as Types from "../../types";

interface StoreProviderProps {
  children: ReactNode | ReactNode[];
}

interface StoreContextProps {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  teamMembers: Types.TeamMember[];
  setTeamMembers: Dispatch<SetStateAction<Types.TeamMember[]>>;
  defaultMember: Types.TimeEntry[];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  const [teamMembers, setTeamMembers] = useState<Types.TeamMember[]>([]);

  const store = {
    timeEntries,
    setTimeEntries,
    teamMembers,
    setTeamMembers,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
