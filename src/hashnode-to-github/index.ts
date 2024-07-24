import { deleteArticle } from "./deleteArticle"
import { modifyArticle } from "./modifyArticle"
import { publishArticle } from "./publishArticle"


const hashnodeToGithubSync = async (parsedEvent: any) => {
    const eventType = parsedEvent.eventType
    const postId = parsedEvent.post.id
    const publicationId = parsedEvent.publication.id

    switch (eventType) {
        case 'post_published':
            await publishArticle({publicationId, postId})
            break;

        case 'post_updated':
            await modifyArticle({publicationId, postId})
            break;
        
        case 'post_deleted':
            await deleteArticle({postId})
            break;
    }
}

export default hashnodeToGithubSync