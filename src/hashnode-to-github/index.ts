import { deleteArticle } from "./deleteArticle"
import { modifyArticle } from "./modifyArticle"
import { publishArticle } from "./publishArticle"

const hashnodeToGithubSync = async (parsedEvent: any) => {
    const eventType = parsedEvent.eventType
    const postId = parsedEvent.post.id

    switch (eventType) {
        case 'post_published':
            await publishArticle(postId)
            break;

        case 'post_updated':
            await modifyArticle(postId)
            break;
        
        case 'post_deleted':
            await deleteArticle(postId)
            break;
    }
}

export default hashnodeToGithubSync