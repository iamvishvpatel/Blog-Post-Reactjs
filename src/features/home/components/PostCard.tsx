import { Link } from "react-router-dom";
import type { Post } from "../../post/models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <h3 className="text-xl font-bold text-orange-600">{post.title}</h3>
        {post.content && (
          <p className="text-gray-700 text-sm line-clamp-3">{post.content}</p>
        )}
        <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-3">
          <span><FontAwesomeIcon icon="user" className="text-gray-600 mr-1"/>{post.author?.username}</span>
          <span><FontAwesomeIcon icon="clock" className="text-gray-600 mr-1"/>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span><FontAwesomeIcon icon="layer-group" className="text-gray-600 mr-1"/>{post.category?.name}</span>
          {post.updatedBy && (
            <span><FontAwesomeIcon icon="pen-nib" className="text-gray-600 mr-1"/>Last updated by {post.updatedBy.username}</span>
          )}
          <span><FontAwesomeIcon icon="comment" className="text-gray-600 mr-1"/>{post.comments.length} Comments</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag.name} className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs font-medium">
              #{tag.name}
            </span>
          ))}
        </div>

        {post.comments.length > 0 && (
          <div className="mt-2 bg-gray-50 p-3 rounded-md border border-gray-200">
            <p className="font-medium text-sm text-gray-700 mb-1">💬 Recent Comments:</p>
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
      </div>
    </Link>
  )
}

export default PostCard;