import { useForm } from "react-hook-form";
import { useUpdatePost } from "../hooks/useUpdatePost";
import { useEffect } from "react";
import { usefetchData } from "../../createPost/hooks";
import type { updatedPostProps } from "../models";
import type { PostFromData } from "../../createPost/validation/createPost";

export const UpdatePostForm = ({
  postId,
  defaultValues,
  onClose,
  onPostUpdated
}: updatedPostProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PostFromData>({
    defaultValues: {
      title: defaultValues.title,
      content: defaultValues.content,
      categoryId: defaultValues.category?.id,
      tagIds: defaultValues.tags?.map((tag: any) => tag.id) || []
    }
  });

  const { handleUpdatePost, loading } = useUpdatePost();
  const { categories, tags } = usefetchData();

  useEffect(() => {
    reset({
      title: defaultValues.title,
      content: defaultValues.content,
      categoryId: defaultValues.category?.id,
      tagIds: defaultValues.tags?.map((tag: { id: any; }) => tag.id) || []
    });
  }, [defaultValues, reset]);

  const onSubmit = (formData: PostFromData) => {
    const cleanedData = {
    ...formData,
    tagIds: formData.tagIds
      ?.filter((id) => id !== null && id !== undefined && id !== "")
      .map(Number), 
  };

    handleUpdatePost(postId, cleanedData, () => {
      onPostUpdated(); 
      onClose(); 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Update Post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              {...register("title")}
              className="w-full px-4 py-2 border rounded-xl"
              placeholder="Enter your post title"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Content</label>
            <textarea
              {...register("content")}
              rows={5}
              className="w-full px-4 py-2 border rounded-xl"
              placeholder="Write your post content"
            />
            {errors.content && <p className="text-red-500">{errors.content.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              {...register("categoryId", { valueAsNumber: true })}
              className="w-full px-4 py-2 border rounded-xl"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.categoryId && <p className="text-red-500">{errors.categoryId.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Tags</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tags.map((tag) => (
                <label key={tag.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={tag.id}
                    {...register("tagIds", {
                      setValueAs: (v) => Number(v)
                    })}
                    defaultChecked={defaultValues.tags?.some((t: { id: number; }) => t.id === tag.id)}
                  />
                  <span>{tag.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
