import { QUERY } from "../../shared/constants";
import { callGraphqlAPI } from "../../shared/callGraphqlAPI";
import { assertPostIsNotNull } from "../../shared/assertions";
import { PostData } from "src/shared/types";

export const getPostData = async (id: string) : Promise<PostData> => {
  const result = await callGraphqlAPI({
    query: QUERY.getPostById,
    variables: {
      id,
    }
  });

  assertPostIsNotNull(result)
  return result.data;
};
