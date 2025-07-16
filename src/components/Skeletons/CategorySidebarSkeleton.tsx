export const CategorySidebarSkeleton = () => {
  return (
    <aside className="bg-white p-4 shadow rounded-md sticky top-[100px]">
      {/* Heading Skeleton */}
      <div className="h-6 w-32 mb-6 px-2 py-1 bg-gray-200 rounded animate-pulse"></div>

      {/* Category List Skeleton */}
      <ul className="space-y-2">
        {/* All button skeleton */}
        <li>
          <div className="px-2 py-1 rounded-md mb-5 w-full h-6 bg-gray-200 animate-pulse"></div>
        </li>

        {/* Placeholder category items */}
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <div className="px-2 py-1 rounded-md w-full h-5 bg-gray-200 animate-pulse"></div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
