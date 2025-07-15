import { useRecentPosts } from "../Hooks/useRecentPosts";
import PostCard from "./PostCard";

export const HomeCompo = () => {

  const { posts, loading } = useRecentPosts();
  
  return (
    <div className="px-4 py-8 max-w-[1300px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="bg-white p-4 shadow rounded-md sticky top-[100px]">
            <h2 className="text-xl font-semibold mb-4 px-2 py-1 bg-gray-100 rounded">Categories</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-orange-500 px-2">Tech</a></li>
              <li><a href="#" className="hover:text-orange-500 px-2">News</a></li>
              <li><a href="#" className="hover:text-orange-500 px-2">Design</a></li>
              <li><a href="#" className="hover:text-orange-500 px-2">AI</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-6 col-span-12">
          <h1 className="text-2xl font-bold mb-4">Latest Blog Posts</h1>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-1  gap-6">
                {posts.map((post) => (                  
                  <PostCard post={post} />
                ))}
            </div>
          )}
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="bg-white p-4 shadow rounded-md sticky top-[100px]">
            <h2 className="text-xl font-semibold mb-4  px-2 py-1 bg-gray-100 rounded">Recent Comments</h2>
            <ul className="text-gray-600 space-y-3 text-sm">
              <li>“Great read!” – User1</li>
              <li>“Thanks for sharing!” – DevMan</li>
              <li>“Interesting points.” – Sara</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4 px-2 py-1 bg-gray-100 rounded">Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-sm px-2 py-1 rounded">#React</span>
              <span className="bg-gray-100 text-sm px-2 py-1 rounded">#Design</span>
              <span className="bg-gray-100 text-sm px-2 py-1 rounded">#News</span>
              <span className="bg-gray-100 text-sm px-2 py-1 rounded">#AI</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
