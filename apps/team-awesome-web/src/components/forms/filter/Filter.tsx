import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SelectHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";

import * as Styled from "./Filter.styled";
import * as Types from "../../../types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  filterArray: Types.TimeEntry;
  setFilteredResults: Dispatch<Types.TimeEntry>;
}

export const Filter = ({ filterArray, setFilteredResults }: SelectProps) => {
  const [filterKey, setFilterKey] = useState([]);

  const filterCategory = "client";

  const filterSet = new Set(filterArray.map((a) => a[filterCategory]));
  const filterSetSorted = [...filterSet].sort();
  const filterOptions = [`Filter by ${filterCategory}...`, ...filterSetSorted];

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const updatedFilterKey: string = target.value;

    setFilterKey(updatedFilterKey);

    handleFilter(updatedFilterKey);
  };

  const handleFilter = (updatedFilterKey) => {
    const filteredResults = filterArray.filter((a) => a[filterCategory] === updatedFilterKey);

    filterSet.has(updatedFilterKey)
      ? setFilteredResults(filteredResults)
      : setFilteredResults(filterArray);
  };

  useEffect(() => {
    handleFilter(filterKey);
  }, [filterArray]);

  return (
    <Styled.Select name="filter" onChange={onChange}>
      {filterOptions.map((option) => (
        <Styled.Option value={option}>{option}</Styled.Option>
      ))}
    </Styled.Select>
  );
};
