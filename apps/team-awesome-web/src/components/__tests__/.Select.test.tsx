import React, { Dispatch, SetStateAction, useContext } from "react";

import { render, fireEvent } from "@testing-library/react";
import { StoreContext, StoreProvider } from "../store-context";
import { Select } from "../forms/select";
import * as Types from "../../types";

it("If the select updates its options", async () => {
  const { setTimeEntries } = useContext(StoreContext);
  const mockTimeEntries = [
    {
      client: "Samus Aran",
      date: "2023-12-01",
      from: "00:00",
      id: 1,
      startTimestamp: "2023-12-01T11:12:00.000Z",
      stopTimestamp: "2023-12-01T22:23:00.000Z",
      to: "00:00",
      activity: "Shooting",
    },
  ];

  const sortList = "timesheets";

  const utils = render(
    <StoreProvider>
      <Select
        sortList={sortList}
        setSortedResults={
          setTimeEntries as Dispatch<SetStateAction<Types.TimeEntry[] | Types.TeamMember[]>>
        }
        sortArray={mockTimeEntries}
      />
    </StoreProvider>,
  );

  expect((utils.getByRole("option", { name: "client" }) as HTMLOptionElement).selected).toBe(true);

  fireEvent.change(utils.getByRole("combobox"), {
    target: { name: sortList[1] },
  });

  expect((utils.getByRole("option", { name: "date" }) as HTMLOptionElement).selected).toBe(true);
});
