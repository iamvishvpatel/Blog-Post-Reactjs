import { useAuth } from "../../context";
import { useEffect, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  const [showUnauthorized, setShowUnauthorized] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowUnauthorized(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAuthenticated]);

  if (!isAuthenticated && showUnauthorized) {
    return (
      <div className="fixed inset-0 z-50 bg-white/60 backdrop-blur-md flex items-center justify-center overflow-hidden">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-3">Unauthorized</h2>
          <p className="text-gray-700 mb-5">Please login to access this page.</p>
          <a
            href="/auth/login"
            className="inline-block bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Go to Login
          </a>
        </div>
      </div>

    );
  }

  return <>{children}</>;
};
