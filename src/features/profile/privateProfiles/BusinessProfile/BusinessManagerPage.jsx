import { useState } from "react";
import CarsManager from "./components/CarsManager";
import ReservationsManager from "./components/ReservationsManager";
import Statistics from "./components/Statistics";

export default function BusinessOwnerDashboard() {
  const [selectedTab, setSelectedTab] = useState("cars");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <button
            onClick={() => handleTabChange("cars")}
            className="text-left py-2 px-4 rounded hover:bg-gray-200"
          >
            Cars
          </button>
          <button
            onClick={() => handleTabChange("bookings")}
            className="text-left py-2 px-4 rounded hover:bg-gray-200"
          >
            Bookings
          </button>
          <button
            onClick={() => handleTabChange("statistics")}
            className="text-left py-2 px-4 rounded hover:bg-gray-200"
          >
            Statistics
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {selectedTab === "cars" && <CarsManager />}
        {selectedTab === "bookings" && <ReservationsManager />}
        {selectedTab === "statistics" && <Statistics />}
      </main>
    </div>
  );
}
