import * as Types from "../types";

export const postTimeEntry = async (data: string): Promise<Types.TimeEntry> => {
  const baseUrl = process.env.NEXT_PUBLIC_DB_HOST;

  return fetch(`${baseUrl}/timeEntries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
