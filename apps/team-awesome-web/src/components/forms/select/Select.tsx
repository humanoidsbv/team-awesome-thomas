import { ChangeEvent, SelectHTMLAttributes, useContext, useState } from "react";
import * as Types from "../../../types";
import { StoreContext } from "../../store-context";
import * as Styled from "./Select.styled";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  sortableObjects: Types.TimeEntry[];
  direction: boolean;
}

export const Select = ({ sortableObjects, direction }: SelectProps) => {
  const { sortKey, setSortKey } = useContext<Types.SortKey>(StoreContext);

  const { timeEntries, setTimeEntries } = useContext(StoreContext);

  const options = ["activity", "id", "client", "startTimestamp"];

  const directions = ["Ascending", "Descending"];

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
    setTimeEntries([...timeEntries].sort(compareSort));
  };

  console.log(sortKey);

  return (
    <>
      <Styled.Select name="key" onChange={onChange}>
        {options.map((option) => {
          return <Styled.Option value={option}>{option}</Styled.Option>;
        })}
      </Styled.Select>
      {direction && (
        <Styled.Select name="direction" onChange={onChange}>
          {directions.map((dir) => (
            <Styled.Option value={dir}>{dir}</Styled.Option>
          ))}
        </Styled.Select>
      )}
    </>
  );
};
