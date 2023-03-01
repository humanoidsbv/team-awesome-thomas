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

interface FilterProps extends SelectHTMLAttributes<HTMLSelectElement> {
  filterArray: Types.TimeEntry[];
  setFilteredResults: Dispatch<Types.TimeEntry>;
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

    filterSet.has(key) ? setFilteredResults(filteredResults) : setFilteredResults(filterArray);
  };

  useEffect(() => {
    handleFilter(filterKey);
  }, [filterArray]);

  return (
    <Styled.Select name="filter" onChange={onChange}>
      {filterOptions.map((option) => (
        <Styled.Option key={option} value={option}>
          {option.toString()}
        </Styled.Option>
      ))}
    </Styled.Select>
  );
};
