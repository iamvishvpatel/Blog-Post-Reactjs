import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <nav className="backdrop-blur-md bg-gray/80 shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-50 border-b border-gray-200">
       <div className="flex items-center gap-2 text-2xl font-bold text-orange-500">
        <span><img className="w-11" src="./blog-posts-logo2.png" alt="" /></span>
        <span className="text-gray-900"><img className="w-45 mt-1" src="./MyBlogPosts.svg" alt="" /></span>
      </div>


      <div className="flex gap-6 font-medium text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 underline underline-offset-4"
              : "hover:text-orange-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 underline underline-offset-4"
              : "hover:text-orange-500"
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 underline underline-offset-4"
              : "hover:text-orange-500"
          }
        >
          About
        </NavLink>
      </div>

      <form onSubmit={handleSearch} className="w-full md:w-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="bg-white border border-gray-300 px-4 py-2 rounded-md w-full md:w-64 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </form>
    </nav>
  );
};

export default Navbar;
