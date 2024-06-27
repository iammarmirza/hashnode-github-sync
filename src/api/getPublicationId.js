import { HASHNODE_ENDPOINT } from "../utils/constants"
import { PUBLICATION_ID_QUERY } from "../utils/constants"

export const getPublicationId = async (host) => {
    try {
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
        
        const data = await response.json()
        return data.data.publication.id
    } catch {
        
    }
}