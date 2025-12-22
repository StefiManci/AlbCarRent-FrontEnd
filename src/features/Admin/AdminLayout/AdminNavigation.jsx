import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminNavigation() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/admin" },
    { label: "Fleet", path: "/admin/fleet" },
    { label: "Reservations", path: "/admin/reservations" },
    { label: "Customers", path: "/admin/customers" },
    { label: "Payments", path: "/admin/payments" },
    { label: "Reports", path: "/admin/reports" },
    { label: "CMS", path: "/admin/cms" },
    { label: "Settings", path: "/admin/settings" },
  ];

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div
          className="text-xl font-bold cursor-pointer tracking-wide"
          onClick={() => navigate("/admin")}
        >
          AlbCarRent Admin
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            + Add Car
          </button>
          <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
              3
            </span>
            🔔
          </button>
          <div className="relative">
            <button
              onClick={() => setOpenMenu((p) => !p)}
              className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            >
              Admin
            </button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate("/admin/profile")}
                >
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  onClick={() => console.log("Logout")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpenMenu((p) => !p)}
          >
            ☰
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden border-t bg-white">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpenMenu(false)}
              className="block px-6 py-3 border-b hover:bg-gray-50"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
