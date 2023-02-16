import * as Types from "../types";

export const deleteTimeEntry = async (endpoint: string, id: number): Promise<Types.TimeEntry> => {
  return fetch(`${endpoint}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
