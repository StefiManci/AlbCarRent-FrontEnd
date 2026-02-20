import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/login/store/authSlice";

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.userRole);
  const isAuthenticated = !!token;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "hover:text-gray-300 transition-colors";

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="text-2xl font-bold text-white">AlbCarRent</h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/cars" className={linkClasses}>
              Cars
            </NavLink>
            <NavLink to="/blog" className={linkClasses}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="bg-white text-gray-800 px-3 py-1 rounded hover:bg-gray-200 transition"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                {userRole === "Bussiness" && (
                  <button
                    onClick={() => navigate("/businessmanager")}
                    className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Business
                  </button>
                )}
                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A9 9 0 1118.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
