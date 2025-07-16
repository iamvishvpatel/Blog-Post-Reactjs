export const TagFilterSidebarSkeleton = () => {
  return (
    <div className="mt-6">
      {/* Heading */}
      <div className="h-8 w-44 mb-4 px-2 py-1 bg-gray-200 rounded animate-pulse"></div>

      {/* Tag pills */}
      <div className="flex flex-wrap gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-7 w-18 bg-gray-200 rounded-full animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};
