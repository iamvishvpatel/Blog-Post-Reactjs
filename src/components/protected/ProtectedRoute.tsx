import { useAuth } from "../../context";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowOverlay(true);
      document.body.style.overflow = "hidden"; // Prevent scroll
    } else {
      setShowOverlay(false);
      document.body.style.overflow = "auto";
    }
  }, [isAuthenticated]);

  return (
    <div className="relative">
      {/* Always show the main layout */}
      <Outlet />

      {/* Unauthorized overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blur + semi-white background */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10" />

          {/* Centered popup */}
          <div className="relative z-20 bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Unauthorized</h2>
            <p className="text-gray-700 mb-5">Please login to access this page.</p>
            <a
              href="/auth/login"
              className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition duration-200"
            >
              Go to Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
