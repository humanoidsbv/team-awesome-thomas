import * as Types from "../types";

export const deleteTimeEntry = async (endpoint: string, id: string): Promise<Types.TimeEntry> => {
  return fetch(`${endpoint}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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
