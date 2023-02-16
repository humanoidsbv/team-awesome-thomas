import * as Types from "../types";

export const postTimeEntry = async (endpoint: string, data: string): Promise<Types.TimeEntry> => {
  return fetch(endpoint, {
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
