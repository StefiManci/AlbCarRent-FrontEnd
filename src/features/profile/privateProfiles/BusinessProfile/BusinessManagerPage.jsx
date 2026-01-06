import { NavLink, Outlet } from "react-router-dom";

export default function BusinessOwnerDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="cars"
            className={({ isActive }) =>
              `py-2 px-4 rounded ${
                isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
              }`
            }
          >
            Cars
          </NavLink>

          <NavLink
            to="bookings"
            className={({ isActive }) =>
              `py-2 px-4 rounded ${
                isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
              }`
            }
          >
            Bookings
          </NavLink>

          <NavLink
            to="statistics"
            className={({ isActive }) =>
              `py-2 px-4 rounded ${
                isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
              }`
            }
          >
            Statistics
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
