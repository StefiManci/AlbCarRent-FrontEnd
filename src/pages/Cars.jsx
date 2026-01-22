import AllCars from "../features/cars/components/AllCars";
import CarFilter from "../features/cars/components/CarFilter";
import { useState } from "react";

export default function Cars() {
  const [filter, setFilter] = useState({
    search: "",
    lowPrice: "",
    highPrice: "",
    fuelType: "",
  });

  return (
    <div className="min-h-screen px-6 py-10 space-y-16">
      <CarFilter filter={filter} setFilter={setFilter} />

      <AllCars filter={filter} />
    </div>
  );
}
