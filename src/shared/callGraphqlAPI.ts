import { assertErrorIsNotNull } from "./assertions"
import { HASHNODE_ENDPOINT } from "./constants"

export const callGraphqlAPI = async ({query, variables, token}: {
    query: string,
    variables: any,
    token: string
}): Promise<any> => {
    const response = await fetch(HASHNODE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: token
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