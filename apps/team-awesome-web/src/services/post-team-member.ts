import * as Types from "../types";

export const postTeamMember = async (data: string): Promise<Types.TeamMember> => {
  const baseUrl = process.env.NEXT_PUBLIC_DB_HOST;

  return fetch(`${baseUrl}/team-members`, {
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
