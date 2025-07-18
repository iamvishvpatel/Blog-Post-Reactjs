import { useEffect, useState } from "react";
import { getAllCategory } from "../../../api/category";
import { getAllTags, type Tag } from "../../../api";
import type { Category } from "../../home/models";

export const usefetchData =  ()=>{
    const [categories, setCategories] = useState<Category[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        getAllCategory()
            .then((res)=> setCategories(res))
            .catch((err) => console.error("Failed to fetch categories", err))
            .finally(() => setLoading(false));
        
        getAllTags()
            .then((res)=> setTags(res))
            .catch((err) => console.error("Failed to fetch tags", err))
            .finally(() => setLoading(false));
    }, [])

    

    return {categories, tags, setCategories, setTags, loading}
}