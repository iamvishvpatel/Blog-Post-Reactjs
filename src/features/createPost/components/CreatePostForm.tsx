import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { postSchema, type PostFromData } from "../validation/createPost"
import { usefetchData } from "../hooks"
import { createPost } from "../../../api"
import toast from "react-hot-toast"
import { useAuth } from "../../../context"
import type { CreatePostFormProps } from "../models"

export const CreatePostForm = ({ onClose, onPostCreated }: CreatePostFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<PostFromData>({
    resolver: zodResolver(postSchema)
  })

  const { user } = useAuth()

  const { categories, tags } = usefetchData()

  const onSubmit = async (data: PostFromData) => {
    if (!user) return toast.error("User not logged in");


    const formattedData = {
      ...data,
      authorId: user.id,
      commentIds: [],
      tagIds: (data.tagIds as any[]).map(Number),
    }
    try {
      const newPost = await createPost(formattedData);
      onPostCreated(newPost)
      toast.success("Post created successfully!");
      reset();
      onClose()
    } catch (error) {
      toast.error("Failed to create post.");
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
        <input
          {...register("title")}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your post title"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Content</label>
        <textarea
          {...register("content")}
          rows={5}
          placeholder="Write your post content here..."
          className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {errors.content && (
          <p className="text-sm text-red-500 mt-1">{errors.content.message}</p>
        )}
      </div>


      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
        <select
          {...register("categoryId", { valueAsNumber: true })}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          {categories.map((cat: any) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <p className="text-sm text-red-500 mt-1">{errors.categoryId.message}</p>
        )}
      </div>


      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Tags</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {tags.map((tag: any) => (
            <label
              key={tag.id}
              className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <input type="checkbox" value={tag.id} {...register("tagIds", {
                setValueAs: (v) => Number(v)
              })} />
              <span className="text-sm text-gray-700">{tag.name}</span>
            </label>
          ))}

        </div>
        {errors.tagIds && (
          <p className="text-sm text-red-500 mt-1">{(errors.tagIds as any).message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 text-white font-medium py-2.5 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Create Post"}
      </button>
    </form>

  )
}
