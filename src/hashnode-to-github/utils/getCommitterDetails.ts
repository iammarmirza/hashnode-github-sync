import { context } from "@actions/github";
import { octokit } from "./octokit";

export const getCommitterDetails = async (): Promise<any> => {
  const { data } = await octokit.request("GET /users/{owner}", {
    owner: context.repo.owner,
  });
  return data
};
