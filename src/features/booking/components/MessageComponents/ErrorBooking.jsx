export default function ErrorBooking({ message }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-100 p-20">
      <div className="flex flex-col items-center justify-center p-20 h-20 w-200 border-2 border-red-500 bg-red-100">
        <h1 className="text-2xl font-bold text-red-700">Booking Failed</h1>
        <p className="text-red-600">
          {message ||
            "Sorry, there was an issue with your booking. Please try again."}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
