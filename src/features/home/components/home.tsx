import { useSidebarData } from "../Hooks/useSidebarData";
import PostCard from "./PostCard";
import { RecentCommentsSidebar } from "./RecentCommentsSidebar";
import { TagFilterSidebar } from "./TagFilterSidebar";
import { CategoryFilterSidebar } from "./CategoryFilterSidebar";
import { useCategories } from "../Hooks/useCategories";
import { CategorySidebarSkeleton, PostCardSkeleton, RecentCommentsSidebarSkeleton, TagFilterSidebarSkeleton } from "../../../components/Skeletons";
import { useFilterdPosts } from "../Hooks/useFilteredPosts";
import type { HomeCompoProps } from "../models";
import { useAuth } from "../../../context";
import { useState } from "react";
import { CreatePostModal } from "../../../components/modals";
import type { Post } from "../../post/models";



export const HomeCompo = ({ myPostsOnly = false }: HomeCompoProps) => {

  const { user } = useAuth();
  const { posts: FinalPosts, setPosts, tags, recentComments, selectedTagId, setSelectedTagId, fetchPosts, fetchByTag, fetchByCategory, fetchByTagAndCategory, loading } = useSidebarData()
  const allposts = useFilterdPosts(FinalPosts)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const unsortedposts = myPostsOnly && user ? allposts.filter((post) => post.author.id === user.id) : allposts

  const posts = [...unsortedposts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )


  const { categories, selectedCategoryId, setSelectedCategoryId, loading: loadingCategories } = useCategories()
  const handlePostCreated = (newPost: any) => {
    setPosts((prevPosts) => [newPost.data, ...prevPosts]);
  };

  const fetchPostswithFilter = (tagId: number | null, categoryId: number | null) => {
    if (tagId && categoryId) {
      fetchByTagAndCategory(tagId, categoryId);
    } else if (tagId) {
      fetchByTag(tagId);
    } else if (categoryId) {
      fetchByCategory(categoryId);
    } else {
      fetchPosts();
    }
  }

  const handleTagClick = (id: number | null) => {
    setSelectedTagId(id);
    fetchPostswithFilter(id, selectedCategoryId);
  };

  const handleCategoryClick = (id: number | null) => {
    setSelectedCategoryId(id);
    fetchPostswithFilter(selectedTagId, id);
  };

  const handlePostDelete = (deletedId: number) => {
    setPosts(prev => prev.filter(post => post.id !== deletedId))
  }
  const handlePostUpdated = (updatedPost: any) => {
    console.log(updatedPost, "sdgsgsd");
    setPosts((prevPosts: Post[]) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };
  return (
    <div className="px-4 py-8 max-w-[1300px] mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 hidden lg:block top-20">
          {loadingCategories ? (
            <CategorySidebarSkeleton />
          ) : (
            <>
              <CategoryFilterSidebar categories={categories} selectedCategoryId={selectedCategoryId} onSelectCategory={handleCategoryClick} loadingCategories={loadingCategories} />

              <button
                onClick={() => setIsModalOpen(true)}
                className="sticky top-130 mt-6 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition"
              >
                + Create Post
              </button>
            </>
          )}
        </aside>

        <main className="lg:col-span-6 col-span-12">
          <h1 className="text-2xl font-bold mb-4">
            {myPostsOnly ? "My Posts" : "Latest Blog Posts"}</h1>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {[...Array(4)].map((_, i) => (
                <PostCardSkeleton key={i} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-gray-500">
              {myPostsOnly ? "No posts found for your account." : "No posts found."}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-1  gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} onDelete={handlePostDelete} onPostUpdated={handlePostUpdated} />
              ))}
            </div>
          )}
        </main>


        <aside className="lg:col-span-3 hidden lg:block">
          <div className="bg-white p-4 shadow rounded-md sticky top-[100px]">
            {loading ? (
              <TagFilterSidebarSkeleton />
            ) : (
              <TagFilterSidebar tags={tags} selectedTagId={selectedTagId} onSelectTag={handleTagClick} />
            )}

            {selectedTagId !== null && (
              <button onClick={() => {
                setSelectedTagId(null)
                setSelectedCategoryId(null)
                fetchPosts()
              }}
                className="mt-3 text-sm text-blue-600 underline"
              >Clear Filter</button>
            )}
            {loading ? (
              <RecentCommentsSidebarSkeleton />
            ) : (
              <RecentCommentsSidebar comments={recentComments} />
            )}

          </div>
        </aside>
      </div>
      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onPostCreated={handlePostCreated} />


    </div>
  );
};
