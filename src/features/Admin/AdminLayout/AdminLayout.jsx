import AdminFooter from "./AdminFooter";
import AdminNavigation from "./AdminNavigation";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavigation />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <AdminFooter />
    </div>
  );
}
