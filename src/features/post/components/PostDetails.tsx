import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostDetails } from "../hooks";
import { PostDetailsCard } from "../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostDetailsSkeleton } from "../../../components/Skeletons";


export const  PostDetails: FC = () => {
  const { id } = useParams()
  const postId = Number(id);
  const { post, loading, fetchPost } = usePostDetails(postId)


  if (loading) return <PostDetailsSkeleton />;
  if (!post) return <p className="p-8 text-red-500">Post not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-6 text-sm text-orange-600 hover:underline transition"
      >
        <FontAwesomeIcon icon="arrow-left" className="text-orange-600"/> Back to Home
      </Link>
      <PostDetailsCard post={post} refreshPost={fetchPost}/>
    </div>
  );
};
