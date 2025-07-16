export const PostDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back link placeholder */}
      <div className="mb-6 h-4 w-24 bg-gray-200 rounded animate-pulse"></div>

      {/* Title */}
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>

      {/* Author info */}
      <div className="h-4 w-1/3 bg-gray-200 rounded mb-6 animate-pulse"></div>

      {/* Category */}
      <div className="h-4 w-24 bg-gray-200 rounded mb-4 animate-pulse"></div>

      {/* Content area */}
      <div className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-6 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"
          ></div>
        ))}
      </div>

      {/* Comments heading */}
      <div className="h-5 w-32 bg-gray-200 rounded mt-10 mb-3 animate-pulse"></div>

      {/* Comments placeholder */}
      <div className="space-y-2">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};
