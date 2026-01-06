export const validateCar = (car) => {
  const errors = {};

  if (!car.make) errors.make = "Make is required";
  if (!car.model) errors.model = "Model is required";
  if (!car.year) errors.year = "Year is required";
  if (!car.color) errors.color = "Color is required";
  if (!car.licensePlate) errors.licensePlate = "License Plate is required";
  if (!car.dailyRentalPrice)
    errors.dailyRentalPrice = "Daily Rental Price is required";
  if (car.availability === "") errors.availability = "Availability is required";
  if (!car.transmission) errors.transmission = "Transmission is required";
  if (!car.fuelType) errors.fuelType = "Fuel Type is required";
  if (!car.mileage) errors.mileage = "Mileage is required";
  return errors;
};
