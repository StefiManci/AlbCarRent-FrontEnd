export default function SuccessBooking({ message }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-100 p-20">
      <div className="flex flex-col items-center justify-center p-20 h-20 w-200 border-2 border-green-500 bg-green-100">
        <h1 className="text-2xl font-bold text-green-700">
          Booking Successful!
        </h1>
        <p className="text-green-600">
          {message ||
            "Your booking has been successfully created. Thank you for choosing our service!"}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
