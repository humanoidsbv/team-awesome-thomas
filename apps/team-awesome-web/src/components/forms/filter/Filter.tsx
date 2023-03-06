import {
  ChangeEvent,
  Dispatch,
  SelectHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import * as Styled from "./Filter.styled";
import * as Types from "../../../types";

interface FilterProps extends SelectHTMLAttributes<HTMLSelectElement> {
  filterArray: Types.TimeEntry[];
  setFilteredResults:
    | Dispatch<SetStateAction<Types.TimeEntry[]>>
    | Dispatch<SetStateAction<Types.TeamMember[]>>;
}

export const Filter = ({ filterArray, setFilteredResults }: FilterProps) => {
  const [filterKey, setFilterKey] = useState<string>("");

  const filterCategory = "client";

  const filterSet = new Set(filterArray.map((a) => a[filterCategory]));
  const filterSetSorted = [...filterSet].sort();
  const filterOptions = [`Filter by ${filterCategory}...`, ...filterSetSorted];

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const updatedFilterKey: string = target.value;

    setFilterKey(updatedFilterKey);

    handleFilter(updatedFilterKey);
  };

  const handleFilter = (key: string) => {
    const filteredResults = filterArray.filter((a) => a[filterCategory] === key);

    if (filterSet.has(key)) {
      setFilteredResults(filteredResults);
    } else {
      setFilteredResults(filterArray);
    }
  };

  useEffect(() => {
    handleFilter(filterKey);
  }, [filterArray]);

  return (
    <Styled.Select name="filter" onChange={onChange}>
      {filterOptions.map((option) => (
        <option key={option} value={option}>
          {option.toString()}
        </option>
      ))}
    </Styled.Select>
  );
};
