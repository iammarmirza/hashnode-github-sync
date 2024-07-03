import { getPostSlug } from "./getPostSlug"
import { deleteSync } from "./deleteSync";
import { modifySync } from "./modifySync";
import { publishSync } from "./publishSync";

export const hashnodeToGithubSync = async (parsedEvent: any) => {
    const eventType = parsedEvent.eventType
    const postId = parsedEvent.post.id
    const publicationId = parsedEvent.publication.id
    const postSlug = await getPostSlug(postId)


    switch (eventType) {
        case 'post_published':
            publishSync({publicationId, postSlug})
            break;

        case 'post_updated':
            modifySync({publicationId, postSlug})
            break;
        
        case 'post_deleted':
            deleteSync()
            break;
    }
}