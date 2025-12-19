import AllCars from "../features/cars/components/AllCars";
import CarFilter from "../features/cars/components/CarFilter";

export default function Cars() {
  return (
    <div className="min-h-screen px-6 py-10 space-y-16">
      <CarFilter />

      <AllCars />
    </div>
  );
}
