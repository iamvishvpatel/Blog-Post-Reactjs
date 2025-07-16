export type Category = {
  id: number;
  name: string;
};

export type CategoryProps = {
    categories: Category[]
    selectedCategoryId: number | null
    onSelectCategory: (categoryId: number | null) => void;
    loadingCategories?: boolean
}