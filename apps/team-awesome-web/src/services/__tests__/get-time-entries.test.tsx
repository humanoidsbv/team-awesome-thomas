import { waitFor } from "@testing-library/react";

import { getTimeEntries } from "../get-time-entries";

const mockedTimeEntries = [
  {
    activity: "Developing",
    client: "Humanoids",
    startTimestamp: "2023-23-01T09:00:00.000Z",
    stopTimestamp: "2026-01-02T00:00:00.000Z",
    id: 0,
  },
];

it("If the time entries are fetched from the server", async () => {
  const mockFetchResponse = Promise.resolve({
    json: () => Promise.resolve(mockedTimeEntries),
  });

  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  const response = getTimeEntries();

  expect(response).toEqual(mockFetchResponse);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  waitFor(() =>
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`),
  );
});
