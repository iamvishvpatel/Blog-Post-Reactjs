import { useEffect, useState } from "react";
import type { Category } from "../models";
import { getAllCategory } from "../../../api/category";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=> {
    getAllCategory()
        .then((res) => setCategories(res))
        .catch((err) => console.error("Failed to fetch categories", err))
        .finally(() => setLoading(false));
  }, [])
  return {categories, selectedCategoryId, setSelectedCategoryId, loading}
};
