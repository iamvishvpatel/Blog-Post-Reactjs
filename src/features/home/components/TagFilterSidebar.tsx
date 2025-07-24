import type { Props } from "../models"

export const TagFilterSidebar = ({tags, selectedTagId, onSelectTag} : Props) => {
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 px-2 py-1 bg-gray-100 rounded">
        Tags
      </h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectTag(null)}
          className={`px-3 py-1 text-sm rounded-full border transition-all
            ${
              selectedTagId === null 
                ? "bg-orange-500 text-white border-orange-600"
                : "bg-gray-100 text-gray-700 hover:bg-orange-100"
            }`}
        >
          All
        </button>

        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onSelectTag(tag.id)}
            className={`px-3 py-1 text-sm rounded-full border transition-all
              ${
                selectedTagId === tag.id
                  ? "bg-orange-500 text-white border-orange-600"
                  : "bg-gray-100 text-orange-500 hover:bg-orange-100"
              }`}
          >
            #{tag.name}
          </button>
        ))}
      </div>
    </div>
  )
}
 