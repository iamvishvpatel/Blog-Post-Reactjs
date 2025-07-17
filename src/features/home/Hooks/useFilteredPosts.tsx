import { useSelector } from "react-redux"
import type { RootState } from "../../../store";
import type { Post } from "../../post/models";

export const useFilterdPosts = (allPosts: Post[]) => {
    const query = useSelector((state: RootState) => state.search.query ?? "");

    if (!query.trim()) return allPosts;
    const lowerQuery = query.toLowerCase();
    return allPosts.filter(
        (post) => {
            return (post.title.toLowerCase().includes(lowerQuery) ||
                post.content?.toLowerCase().includes(lowerQuery)) || 
                post.author?.username?.toLowerCase().includes(lowerQuery)
        }
    )
}