
import { useSidebarData } from "../Hooks/useSidebarData";
import PostCard from "./PostCard";
import { RecentCommentsSidebar } from "./RecentCommentsSidebar";
import { TagFilterSidebar } from "./TagFilterSidebar";
import { CategoryFilterSidebar } from "./CategoryFilterSidebar";
import { useCategories } from "../Hooks/useCategories";

export const HomeCompo = () => {

  // const { posts, loading } = useRecentPosts();
  const {posts, tags, recentComments, selectedTagId, setSelectedTagId, fetchPosts, fetchByTag, fetchByCategory, loading} = useSidebarData() 

  const {categories, selectedCategoryId, setSelectedCategoryId, loading: loadingCategories} = useCategories()

  const handleTagClick = (id: number | null) => {
    if(id === null){
      setSelectedTagId(null)
      fetchPosts()
    }else{      
      setSelectedTagId(id);
      fetchByTag(id);
    }
  };

  const handleCategoryClick = (id: number | null)=>{
    setSelectedCategoryId(id);
    if (id === null) {
    fetchPosts();
  } else {
    fetchByCategory(id);
  }
  }
  return (
    <div className="px-4 py-8 max-w-[1300px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">       
          <CategoryFilterSidebar categories={categories} selectedCategoryId={selectedCategoryId} onSelectCategory={handleCategoryClick} loadingCategories={loadingCategories}/>
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
            <RecentCommentsSidebar comments= {recentComments} />
            <TagFilterSidebar tags={tags} selectedTagId={selectedTagId} onSelectTag={handleTagClick} />

            {selectedTagId !== null && (
              <button onClick={()=>{
                setSelectedTagId(null)
                fetchPosts()
              }}
              className="mt-3 text-sm text-blue-600 underline"
            >Clear Filter</button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
