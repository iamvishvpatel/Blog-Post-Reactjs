import { useForm } from "react-hook-form";
import { useUpdatePost } from "../hooks/useUpdatePost";
import { useEffect } from "react";
import { usefetchData } from "../../createPost/hooks";
import type { PostFromData } from "../../createPost/validation/createPost";
import { usePostUpdateContext } from "../../../context";

export const UpdatePostForm = () => {
  const { postData: defaultValues, onClose } = usePostUpdateContext();
  const { handleUpdatePost, loading } = useUpdatePost();
  const { categories, tags } = usefetchData();
  
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
      authorId: defaultValues.author.id

    };
    handleUpdatePost(cleanedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 scroll-y-auto">

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 ">Title</label>
        <input
          {...register("title")}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your post title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>


      <div>
        <label className="lock text-sm font-semibold text-gray-700 mb-1">Content</label>
        <textarea
          {...register("content")}
          rows={5}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your post content"
        />
        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
      </div>


      <div>
        <label className="lock text-sm font-semibold text-gray-700 mb-1">Category</label>
        <select
          {...register("categoryId", { valueAsNumber: true })}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <label className="block text-sm font-semibold text-gray-700 mb-2">Tags</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {tags.map((tag) => (
            <label key={tag.id} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition">
              <input
                type="checkbox"
                value={tag.id}
                {...register("tagIds")}
              />
              <span>{tag.name}</span>
            </label>
          ))}
        </div>
        {errors.tagIds && (
          <p className="text-red-500">
            {(errors.tagIds as any)?.message || "Please select tags"}
          </p>
        )}
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
  );
};
