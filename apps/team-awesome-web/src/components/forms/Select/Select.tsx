import { ChangeEvent, SelectHTMLAttributes, useContext, useState } from "react";

import { StoreContext } from "../../store-context";
import * as Styled from "./Select.styled";
import * as Types from "../../../types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  sortList: "timesheets" | "teamMembers";
  direction: boolean;
}

export const Select = ({ sortList, direction }: SelectProps) => {
  const { sortKey, setSortKey } = useContext(StoreContext);

  const { timeEntries, setTimeEntries } = useContext(StoreContext);

  const { teamMembers, setTeamMembers } = useContext(StoreContext);

  const sortOptions = {
    timesheets: ["Sort by:", "client", "date", "startTimestamp"],
    teamMembers: ["Sort by:", "client", "emailAddress", "firstName", "role"],
  };

  const sortOrders = ["Ascending", "Descending"];

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const updatedSortKey = { ...sortKey, [target.name]: target.value };
    const sKey = updatedSortKey.key;

    const sDirection = updatedSortKey.direction;

    const compareSort = (a, b) => {
      if (a[sKey] < b[sKey]) {
        return sDirection !== "Descending" ? -1 : 1;
      }
      if (a[sKey] > b[sKey]) {
        return sDirection !== "Descending" ? 1 : -1;
      }
      return 0;
    };

    setSortKey({ ...sortKey, ...updatedSortKey });

    if (sortList === "timesheets") {
      setTimeEntries([...timeEntries].sort(compareSort));
      return;
    }
    if (sortList === "teamMembers") {
      setTeamMembers([...teamMembers].sort(compareSort));
    }
  };

  return (
    <>
      <Styled.Select name="key" onChange={onChange}>
        {sortOptions[sortList].map((option) => {
          return <Styled.Option value={option}>{option}</Styled.Option>;
        })}
      </Styled.Select>
      {direction && (
        <Styled.Select name="direction" onChange={onChange}>
          {sortOrders.map((dir) => (
            <Styled.Option value={dir}>{dir}</Styled.Option>
          ))}
        </Styled.Select>
      )}
    </>
  );
};
