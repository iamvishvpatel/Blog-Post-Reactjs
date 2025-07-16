import type { CategoryProps } from "../models"

export const CategoryFilterSidebar = ({categories, selectedCategoryId, onSelectCategory , loadingCategories}: CategoryProps) => {
  
    if (loadingCategories) return <p>Loading categories...</p>;
  return (
    <aside className="bg-white p-4 shadow rounded-md sticky top-[100px]">
      <h2 className="text-xl font-semibold mb-4 px-2 py-1 bg-gray-100 rounded">
        Categories
      </h2>

      <ul className="space-y-2 text-gray-700">
        <li>
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-2 py-1 rounded-md w-full text-left transition-all ${
              selectedCategoryId === null
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500"
            }`}
          >
            All
          </button>
        </li>

        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onSelectCategory(category.id)}
              className={`px-2 py-1 rounded-md w-full text-left transition-all ${
                selectedCategoryId === category.id
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
