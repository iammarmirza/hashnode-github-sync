import { assertErrorIsNotNull } from "./assertions"
import { HASHNODE_ENDPOINT } from "./constants"
import { getInput } from "./getInput"

export const callGraphqlAPI = async ({query, variables}: {
    query: string,
    variables: any
}): Promise<any> => {
    const {hashnode_token} = getInput()
    const response = await fetch(HASHNODE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: hashnode_token
        },
        body: JSON.stringify({
            query,
            variables,
        })
    })

    const result = await response.json()
    assertErrorIsNotNull(result)
    return result
}