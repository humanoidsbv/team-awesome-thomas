import { FocusEvent, InputHTMLAttributes, SelectHTMLAttributes, useContext, useState } from "react";
import * as Types from "../../../types";
import { StoreContext } from "../../store-context";
import * as Styled from "./Select.styled";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  sortableObject: Types.TimeEntry[];
}

export const Select = ({ sortableObject }: SelectProps) => {
  const { sortKey, setSortKey } = useContext(StoreContext);

  const options = Object?.keys(sortableObject);

  return (
    <Styled.Select>
      {options.forEach((key) => (
        <option value={key}>
          ${key}[0].toUpperCase + ${key}.slice(2,)
        </option>
      ))}
    </Styled.Select>
  );
};
