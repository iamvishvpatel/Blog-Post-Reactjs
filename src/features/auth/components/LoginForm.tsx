import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"
import { loginSchema, type LoginFormData } from "../validation/loginSchema"
import { loginUser } from "../slices"

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (data: LoginFormData) => {
        setLoading(true);
        const resultAction = await dispatch(loginUser(data))

        if (loginUser.rejected.match(resultAction)) {
            const rawMessage = resultAction.payload;
            const message = typeof rawMessage === "string" ? rawMessage : "Login failed";
            toast.error(message);
        } else {
            toast.success("Login successful!");
            navigate("/"); // Redirect to home/dashboard
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-1">MyBlogPosts Platform</h2>
        <p className="text-center text-gray-500 mb-6">Welcome back! Log in to continue.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email")}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full flex justify-center"
          >
            {loading ? (
              <span className="loader border-white w-5 h-5 border-2 rounded-full animate-spin"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-orange-600 font-medium hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
    )

}