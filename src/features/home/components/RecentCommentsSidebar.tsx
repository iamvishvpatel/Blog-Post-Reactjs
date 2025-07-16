import type { Comment } from "../models"

export const RecentCommentsSidebar = ({comments} : {comments: Comment[]}) => {
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 px-2 py-1 bg-gray-100 rounded">
        Recent Comments
      </h2>
      <ul className="text-gray-700 space-y-3 text-sm">
        {comments.length === 0 ? (
          <li className="text-gray-400 italic">No recent comments.</li>
        ) : (
          comments.slice(0, 5).map((comment) => (
            <li key={comment.id} className="border-b border-gray-100 pb-2">
              <span className="font-semibold">@{comment.user.username}</span>:{" "}
              {comment.content.length > 60
                ? comment.content.slice(0, 60) + "..."
                : comment.content}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
