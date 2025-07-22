import { Link } from "react-router-dom";
import type { PostCardProps } from "../../post/models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser, faLayerGroup, faPenNib, faComment, faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatDistanceToNow } from "date-fns";
import { useDeletePost } from "../Hooks/useDeletePost";
import { useUpdatePostModal } from "../../updatePost/hooks";
import { UpdatePostModal } from "../../../components/modals";

const PostCard = ({ post, onDelete }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  const { handleDelete } = useDeletePost()
  const { selectedPost, openEditModal, isEditOpen, closeEditModal } = useUpdatePostModal()
  const deleteHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    const deleted = await handleDelete(post.id);
    if (deleted && onDelete) onDelete(post.id);
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition flex flex-col justify-between h-full">
        <Link to={`/posts/${post.id}`} className="block space-y-2">
          <h3 className="text-xl font-bold text-orange-600">{post.title}</h3>

          {post.content && (
            <p className="text-gray-700 text-sm line-clamp-3">{post.content}</p>
          )}

          <div className="mt-2 text-sm text-gray-500 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-orange-600 text-xs" />
              </div>
              <span className="text-gray-700 font-medium">{post.author?.username}</span>
            </span>

            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="text-gray-600" />
              {new Date(post.createdAt).toLocaleDateString()}
            </span>

            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLayerGroup} className="text-gray-600" />
              {post.category?.name}
            </span>

            {post.updatedBy && (
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faPenNib} className="text-gray-600" />
                Last updated by {post.updatedBy.username}
              </span>
            )}

            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faComment} className="text-gray-600" />
              {post.comments?.length || 0} Comments
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {(post.tags || []).map((tag) => (
              <span
                key={tag.name}
                className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs font-medium"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {post.comments?.length > 0 && (
            <div className="mt-3 bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="font-medium text-sm text-gray-700 mb-2">💬 Recent Comments:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {post.comments.slice(0, 2).map((comment) => (
                  <li key={comment.id} className="flex flex-col">
                    <span className="text-gray-800 font-medium">@{comment.user?.username}</span>
                    <span className="text-gray-600">
                      {comment.content.length > 80
                        ? comment.content.slice(0, 80) + "..."
                        : comment.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Link>


        <div className="border-t border-dashed mt-4 pt-3 flex justify-between items-center text-sm text-gray-500">
          <span>Last published {timeAgo}</span>
          <div>
            <button onClick={() => openEditModal(post)} className="text-blue-600 mr-3">Edit</button>
            <button
              className="text-red-500 hover:text-red-700 transition"
            >
              <FontAwesomeIcon icon={faTrash} onClick={deleteHandler} />
            </button>
          </div>
        </div>
      </div>
      {isEditOpen && selectedPost && (
        <UpdatePostModal
          isOpen={isEditOpen}
          onClose={closeEditModal}
          postData={selectedPost}
          postId={selectedPost.id}
          onPostUpdated={() => {
            console.log("Post updated");
          }}
        />
      )}
    </>
  );
};

export default PostCard;
