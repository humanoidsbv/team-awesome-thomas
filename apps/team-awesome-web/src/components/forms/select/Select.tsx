import { ChangeEvent, SelectHTMLAttributes, useContext, useEffect, useState } from "react";

import { StoreContext } from "../../store-context";
import * as Styled from "./Select.styled";
import * as Types from "../../../types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  sortList: "timesheets" | "teamMembers";
  direction: boolean;
}

export const Select = ({ sortList, direction }: SelectProps) => {
  const { teamMembers, timeEntries, sortKey, setSortKey } = useContext(StoreContext);

  const sortOptions = {
    timesheets: [
      ["Client", "client"],
      ["Date", "startTimestamp"],
    ],
    teamMembers: [
      ["Client", "client"],
      ["Email address", "emailAddress"],
      ["First name", "firstName"],
      ["Role", "role"],
    ],
  };

  const sortOrders = [
    ["Ascending", "ascending"],
    ["Descending", "descending"],
  ];

  useEffect(() => {
    setSortKey({ ...sortKey, key: sortOptions[sortList][0][1] });
  }, []);

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const updatedSortKey: Types.SortKey = { ...sortKey, [target.name]: target.value };

    setSortKey(updatedSortKey);

    handleSort(updatedSortKey);
  };

  const handleSort = (updatedSortKey: Types.SortKey) => {
    const currentKey = updatedSortKey.key;

    const sortDirection = updatedSortKey.direction;

    const compareSort = (
      a: Types.TimeEntry | Types.TeamMember,
      b: Types.TimeEntry | Types.TeamMember,
    ) => {
      if (a[currentKey] < b[currentKey]) {
        return sortDirection !== "descending" ? -1 : 1;
      }
      if (a[currentKey] > b[currentKey]) {
        return sortDirection !== "descending" ? 1 : -1;
      }
      return 0;
    };

    if (sortList === "timesheets") {
      timeEntries.sort(compareSort);
      return;
    }
    if (sortList === "teamMembers") {
      teamMembers.sort(compareSort);
    }
  };

  useEffect(() => {
    handleSort(sortKey);
  }, [timeEntries, teamMembers]);

  return (
    <>
      <Styled.Select name="key" onChange={onChange}>
        {sortOptions[sortList].map((option) => {
          return <Styled.Option value={option[1]}>{option[0]}</Styled.Option>;
        })}
      </Styled.Select>
      {direction && (
        <Styled.Select name="direction" onChange={onChange}>
          {sortOrders.map((option) => (
            <Styled.Option value={option[1]}>{option[0]}</Styled.Option>
          ))}
        </Styled.Select>
      )}
    </>
  );
};
