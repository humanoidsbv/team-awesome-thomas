import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Select } from "../forms/select";

it("If the select updates its options", async () => {
  const sortList = "timesheets";

  const utils = render(<Select sortList={sortList} />);

  expect((utils.getByRole("option", { name: "client" }) as HTMLOptionElement).selected).toBe(true);

  fireEvent.change(utils.getByRole("combobox"), {
    target: { name: sortList[1] },
  });

  expect((utils.getByRole("option", { name: "date" }) as HTMLOptionElement).selected).toBe(true);
});
