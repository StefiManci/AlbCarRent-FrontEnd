import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-[8rem] font-extrabold animate-bounce">404</h1>
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-lg mb-8 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 border border-black font-semibold rounded-lg shadow hover:scale-105 transform transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
