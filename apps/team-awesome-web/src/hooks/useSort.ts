import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../components/store-context";

export function useSort() {
  const { timeEntries, setTimeEntries } = useContext(StoreContext);

  const { teamMembers, setTeamMembers } = useContext(StoreContext);

  const { sortKey, setSortKey } = useContext(StoreContext);

  const direction: string = sortKey[1];

  const objectKey: string = sortKey[0];

  const compareSort = (a, b) => {
    if (a[objectKey] < b[objectKey]) {
      return direction !== "Descending" ? -1 : 1;
    }
    if (a[objectKey] > b[objectKey]) {
      return direction !== "Descending" ? 1 : -1;
    }
    return 0;
  };

  const router = useRouter();

  if (router.asPath === "timesheets") {
    setTimeEntries([...timeEntries].sort(compareSort));
    return;
  }
  if (router.asPath === "team-members") {
    setTeamMembers([...teamMembers].sort(compareSort));
  }
}
