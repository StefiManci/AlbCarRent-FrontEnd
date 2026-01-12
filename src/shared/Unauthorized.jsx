export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-[8rem] font-extrabold animate-bounce">401</h1>
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        Unauthorized Access
      </h2>
      <p className="text-lg mb-8 text-center max-w-md">
        You do not have permission to view this page. Please log in with
        appropriate credentials.
      </p>
      <a
        href="/"
        className="px-6 py-3 border border-black font-semibold rounded-lg shadow hover:scale-105 transform transition-all duration-300"
      >
        Go to Home
      </a>
    </div>
  );
}
