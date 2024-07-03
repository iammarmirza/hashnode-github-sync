import { assertErrorIsNotNull, assertPublicationIsNotNull } from "./assertions"
import { HASHNODE_ENDPOINT, PUBLICATION_ID_QUERY } from "./constants"

export const getPublicationId = async (host: string | undefined) => {
        const response = await fetch(HASHNODE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: `${process.env.HASHNODE_KEY}`
            },
            body: JSON.stringify({
                query: PUBLICATION_ID_QUERY,
                variables: {
                    host
                }
            })
        })
        
        const result = await response.json()
        assertErrorIsNotNull(result)
        assertPublicationIsNotNull(result)
        return result.data.publication.id
}