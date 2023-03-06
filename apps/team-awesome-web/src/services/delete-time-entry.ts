import * as Types from "../types";

export const deleteTimeEntry = async (id: number): Promise<Types.TimeEntry> => {
  const baseUrl = process.env.NEXT_PUBLIC_DB_HOST;
  return fetch(`${baseUrl}/time-entries/${id}`, {
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
