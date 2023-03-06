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

const mockFetchResponse = Promise.resolve({
  json: () => Promise.resolve(mockedTimeEntries),
});

global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

it("If the time entries are fetched from the server", async () => {
  const response = getTimeEntries();

  expect(response).toEqual(mockFetchResponse);

  expect(global.fetch).toHaveBeenCalledTimes(1);
});

it("If the time entries are fetched using an environment variable", async () => {
  expect(global.fetch).toHaveBeenCalledWith(
    `${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`,
    expect.anything(),
  );
});
