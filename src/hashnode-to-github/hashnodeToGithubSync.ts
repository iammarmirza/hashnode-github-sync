import { getPostSlug } from "./getPostSlug"
import { deleteSync } from "./deleteSync";
import { modifySync } from "./modifySync";
import { publishSync } from "./publishSync";

export const hashnodeToGithubSync = async (parsedEvent: any) => {
    const eventType = parsedEvent.eventType
    const postId = parsedEvent.post.id
    const publicationId = parsedEvent.publication.id

    switch (eventType) {
        case 'post_published':
            publishSync({publicationId, postId})
            break;

        case 'post_updated':
            modifySync({publicationId, postId})
            break;
        
        case 'post_deleted':
            deleteSync()
            break;
    }
}