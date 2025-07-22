
export const ProfileCardSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto mt-25 p-8 bg-white/90 backdrop-blur-md shadow-xl rounded-3xl border-2 border-dashed border-gray-300 animate-pulse">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gray-300" />
        <div className="flex-1">
          <div className="h-6 bg-gray-300 rounded w-40 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-64 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-52" />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
        <div className="h-6 bg-gray-300 rounded w-48 mb-2" />
        <div className="h-5 bg-gray-200 rounded w-72" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-9 bg-gray-200 rounded-full border border-gray-300"
          />
        ))}
      </div>
    </div>
  );
};


