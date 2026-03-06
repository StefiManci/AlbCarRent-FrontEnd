const validateBooking = (bookingDetails) => {
  const errors = {};

  if (!bookingDetails.pickupDate) {
    errors.pickupDate = "Pickup date is required.";
  }
  if (!bookingDetails.dropoffDate) {
    errors.dropoffDate = "Dropoff date is required.";
  }

  if (bookingDetails.pickupDate && bookingDetails.dropoffDate) {
    const pickup = new Date(bookingDetails.pickupDate);
    const dropoff = new Date(bookingDetails.dropoffDate);
    if (isNaN(pickup.getTime())) {
      errors.pickupDate = "Pickup date is invalid.";
    }
    if (isNaN(dropoff.getTime())) {
      errors.dropoffDate = "Dropoff date is invalid.";
    }
  }

  if (bookingDetails.pickupDate && bookingDetails.dropoffDate) {
    const pickup = new Date(bookingDetails.pickupDate);
    const dropoff = new Date(bookingDetails.dropoffDate);
    if (pickup >= dropoff) {
      errors.dateRange = "Pickup date must be before dropoff date.";
    }
  }

  if (bookingDetails.customerName.trim() === "") {
    errors.customerName = "Customer name cannot be empty.";
  }

  if (bookingDetails.customerEmail.trim() === "") {
    errors.customerEmail = "Customer email cannot be empty.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingDetails.customerEmail)) {
    errors.customerEmail = "Customer email is invalid.";
  }

  if (bookingDetails.customerPhone.trim() === "") {
    errors.customerPhone = "Customer phone cannot be empty.";
  }

  if (isNaN(bookingDetails.driverAge) || bookingDetails.driverAge < 18) {
    errors.driverAge = "Driver age must be a number and at least 18.";
  }

  return errors;
};

export default validateBooking;
