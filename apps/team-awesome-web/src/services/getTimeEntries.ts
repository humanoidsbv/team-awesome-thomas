import * as Types from "../types";
import { NotFoundError, ServerError } from "../classes/errors";

export const getTimeEntries = async (endpoint: string): Promise<Types.TimeEntry[]> => {
  return fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError();
      }
      if (response.status === 500) {
        throw new ServerError();
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};