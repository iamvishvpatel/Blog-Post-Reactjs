import { useEffect, useState} from "react"
import { getPostById } from "../../../api/posts"


export const usePostDetails = (id: string | undefined) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(id){
      getPostById(id)
            .then((res) => setPost(res))
            .catch((err) => console.log("Error loading post:", err))
            .finally(() => setLoading(false));
    }
  }, [id])
  return {post, loading}
}