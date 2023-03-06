import {
  ChangeEvent,
  Dispatch,
  SelectHTMLAttributes,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

import { StoreContext } from "../../store-context";
import * as Styled from "./Select.styled";
import * as Types from "../../../types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  direction: boolean;
  setSortedResults:
    | Dispatch<SetStateAction<Types.TimeEntry[]>>
    | Dispatch<SetStateAction<Types.TeamMember[]>>;
  sortArray: Types.TimeEntry[] | Types.TeamMember[];
  sortList: "timesheets" | "teamMembers";
}

export const Select = ({ sortList, direction, setSortedResults, sortArray }: SelectProps) => {
  const { teamMembers, timeEntries, sortKey, setSortKey } = useContext(StoreContext);

  const sortOptions = {
    timesheets: [
      { name: "Client", value: "client" },
      { name: "Date", value: "startTimestamp" },
    ],
    teamMembers: [
      { name: "Client", value: "client" },
      { name: "Email address", value: "emailAddress" },
      { name: "First name", value: "firstName" },
      { name: "Role", value: "role" },
    ],
  };

  const sortOrders = [
    { name: "Ascending", value: "ascending" },
    { name: "Descending", value: "descending" },
  ];

  useEffect(() => {
    setSortKey({ ...sortKey, key: sortOptions[sortList][0].value });
  }, []);

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const updatedSortKey: Types.SortKey = { ...sortKey, [target.name]: target.value };

    setSortKey(updatedSortKey);

    handleSort(updatedSortKey);
  };

  type SortOptions = keyof Pick<Types.TimeEntry, "client" | "startTimestamp">;

  const handleSort = (updatedSortKey: Types.SortKey) => {
    const currentKey: SortOptions = updatedSortKey.key as SortOptions;

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
    const sortedResults: Types.TimeEntry[] | Types.TeamMember[] = sortArray.sort(compareSort);

    setSortedResults(sortedResults);
  };

  useEffect(() => {
    handleSort(sortKey);
  }, [timeEntries, teamMembers]);

  return (
    <>
      <Styled.Select name="key" onChange={onChange}>
        {sortOptions[sortList].map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Styled.Select>
      {direction && (
        <Styled.Select name="direction" onChange={onChange}>
          {sortOrders.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </Styled.Select>
      )}
    </>
  );
};
