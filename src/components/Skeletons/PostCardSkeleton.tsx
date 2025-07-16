export const PostCardSkeleton = () => {
  return (
    <div className="border border-gray-50 rounded-md p-4 shadow-sm animate-pulse space-y-4 bg-white">

      <div className="h-5 bg-gray-200 rounded w-3/4"></div>


      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
      </div>


      <div className="flex gap-2">
        <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-12 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
      </div>


      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};