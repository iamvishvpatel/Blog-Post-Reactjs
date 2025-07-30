import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../context";
import { signupSchema, type SignupFormData } from "../validation/signupSchema";
import { signupUser } from "../../../api";

export const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    try {
      const response = await signupUser(data);
      toast.success("Signup successful!");
      login(response.access_token, response.created);
      navigate("/auth/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-xl">
        <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-1">
          MyBlogPosts Platform
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Welcome! Create your account below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Username</label>
            <input
              {...register("name")}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="Your Username"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>


          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              {...register("email")}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>


          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>


          <div>
            <label className="block text-sm font-semibold mb-1">Bio</label>
            <input
              {...register("bio")}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="Short bio about you"
            />
            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
          </div>


          <div>
            <label className="block text-sm font-semibold mb-1">Role</label>
            <select
              {...register("roleId", { valueAsNumber: true })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            >
              <option value="2">User</option>
              <option value="1">Admin</option>
            </select>
            {errors.roleId && <p className="text-red-500 text-sm mt-1">{errors.roleId.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="loader border-white w-5 h-5 border-2 rounded-full animate-spin"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-orange-600 font-medium hover:underline">
            Login as User
          </Link>
        </p>
      </div>
    </div>
  );
};
