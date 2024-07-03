import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { QUERY } from "../shared/constants";
import { mapMarkdownToGqlInput } from "./mapMarkdownToGqlInput";
import { parseFile } from "../shared/parseFile";
import { makeSlug } from "../shared/makeSlug";

export const publishArticle = async ({
  file,
  hashnode_token,
  publicationId,
}: {
  file: string;
  hashnode_token: string;
  publicationId: string | number;
}) => {

  const slug = makeSlug(file);
  const parsedArticle = await parseFile(file);
  const input = await mapMarkdownToGqlInput({
    parsedArticle,
    publicationId,
    slug,
  });
  const response = await callGraphqlAPI({
    query: QUERY.publish,
    variables: {
      input,
    },
    token: hashnode_token,
  });
  return response;
};
