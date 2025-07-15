import { useEffect, useState } from "react"
import { getAllPosts } from "../../../api/posts"

export const useRecentPosts = ()=>{
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{        
        getAllPosts()
            .then((res) => setPosts(res.data))
            .catch((err) => console.error("Post fetch error:", err))
            .finally(() => setLoading(false));
    }, []); 
    
    return {posts, loading} 
}