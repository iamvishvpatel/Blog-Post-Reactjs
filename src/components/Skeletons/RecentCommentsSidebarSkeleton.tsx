export const RecentCommentsSidebarSkeleton = () => {
  return (
    <div className="mt-10">
      {/* Heading */}
      <div className="h-8 w-44 mb-4 px-2 py-3 bg-gray-200 rounded animate-pulse"></div>

      {/* Comment placeholders */}
      <ul className="space-y-3 text-sm">
        {[...Array(4)].map((_, i) => (
          <li
            key={i}
            className="h-5 mt-2 bg-gray-200 rounded w-full animate-pulse"
          ></li>
        ))}
      </ul>
    </div>
  );
};

