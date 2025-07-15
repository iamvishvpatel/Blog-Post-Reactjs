import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostDetailsCard = ({ post }: { post: any }) => {
   
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-orange-600">{post[0].title}</h1>

      {post[0].content && <p className="text-gray-700 text-lg leading-7">{post[0].content}</p>}

      <div className="text-sm text-gray-500 space-x-4">
        <span><FontAwesomeIcon icon="user" className="text-orange-600"/> {post[0].author?.username}</span>
        <span><FontAwesomeIcon icon="layer-group" className="text-gray-600"/> {post[0].category?.name}</span>
        <span><FontAwesomeIcon icon="clock" className="text-gray-600"/> {new Date(post[0].createdAt).toLocaleString()}</span>
        {post[0].updatedBy && (
          <span><FontAwesomeIcon icon="pen-nib" className="text-gray-600"/> Updated by {post[0].updatedBy.username}</span>
        )}
        <span><FontAwesomeIcon icon="comment" className="text-gray-600"/> {post[0].comments.length} Comments</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {post[0].tags.map((tag: any) => (
          <span key={tag.id} className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
            #{tag.name}
          </span>
        ))}
      </div>

      {post[0].comments && post[0].comments.length > 0 && (
        
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mt-4">
          <h2 className="text-lg font-semibold mb-2">💬 Comments ({post[0].comments.length})</h2>
          <ul className="space-y-2 text-sm">
            {post[0].comments.map((comment: any) => (
              <li key={comment.id}>
                <span className="font-medium text-gray-800">@{comment.user?.username}</span>:{" "}
                {comment.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
