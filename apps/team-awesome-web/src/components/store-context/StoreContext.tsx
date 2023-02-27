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
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  const [sortKey, setSortKey] = useState<string>();

  const store = {
    timeEntries,
    setTimeEntries,
    sortKey,
    setSortKey,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
