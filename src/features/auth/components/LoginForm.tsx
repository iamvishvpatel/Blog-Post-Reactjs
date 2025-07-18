import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context";
import { toast } from "react-hot-toast";
import { loginSchema, type LoginFormData } from "../validation/loginSchema";
import { loginUser } from "../../../api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data);
      console.log(response, "asfff");
      
      const { access_token, user } = response;
      login(access_token, user);
      toast.success("Login successful!");
      navigate("/");
    } catch (err: any) {
      console.log(err, "-------");
      
      const msg =
        err?.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-xl">
        <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-1">
          MyBlogPosts Platform
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please login to continue.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>


          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loader border-white w-5 h-5 border-2 rounded-full animate-spin"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-orange-600 font-medium hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};
