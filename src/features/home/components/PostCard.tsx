type Post = {
  id: number;
  title: string;
  content?: string | null;
  createdAt: string;
  updatedAt: string;
  author: {
    username: string;
  };
  updatedBy?: {
    username: string;
  };
  category: {
    name: string;
  };
  tags: { name: string }[];
  comments: {
    id: number;
    content: string;
    user: {
      username: string;
    };
  }[];
};
const PostCard = ({ post }: { post: Post }) => {
  console.log(post);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
      <h3 className="text-xl font-bold text-orange-600">{post.title}</h3>
      {post.content && (
        <p className="text-gray-700 text-sm line-clamp-3">{post.content}</p>
      )}
      <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-3">
        <span>{post.author?.username}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <span>{post.category?.name}</span>
        {post.updatedBy && (
          <span>Last updated by {post.updatedBy.username}</span>
        )}
        <span>{post.comments.length} Comments</span>
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
  )
}

export default PostCard;