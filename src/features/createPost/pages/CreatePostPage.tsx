import { CreatePostForm } from "../components";

const CreatePostPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
