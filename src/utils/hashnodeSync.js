import { getPostSlug } from "../api/getPostSlug";
import { deleteSync } from "./deleteSync";
import { modifySync } from "./modifySync";
import { publishSync } from "./publishSync"

export const hashnodeSync = async (hashnode_event) => {
    const eventType = hashnode_event.data.eventType
    const postId = hashnode_event.data.post.id
    const publicationId = hashnode_event.data.publication.id
    const postSlug = await getPostSlug(postId)

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