import { getPostSlug } from "./getPostSlug"
import { deleteSync } from "./deleteSync";
import { modifySync } from "./modifySync";
import { publishSync } from "./publishSync";

export const hashnodeToGithubSync = async (parsedEvent) => {
    const eventType = parsedEvent.eventType
    const postId = parsedEvent.post.id
    const publicationId = parsedEvent.publication.id
    const postSlug = await getPostSlug(postId)
    console.log('postSlug', postSlug)

    switch (eventType) {
        case 'post_published':
            publishSync(publicationId, postSlug)
            break;

        case 'post_updated':
            modifySync(hashnode_event)
            break;
        
        case 'post_deleted':
            deleteSync(hashnode_event)
            break;
    }
}