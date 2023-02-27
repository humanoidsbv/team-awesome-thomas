import * as Types from "../types";
import { NotFoundError, ServerError } from "../classes/errors";

export const getTeamMembers = async (): Promise<Types.TeamMember[]> => {
  return fetch("http://localhost:3004/team-members", {
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
