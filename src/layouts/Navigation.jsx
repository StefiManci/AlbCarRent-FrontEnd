export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-white">AlbCarRent</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="/cars" className="hover:text-gray-300 transition-colors">
              Cars
            </a>
            <a href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition">
              Login
            </button>
            <button className="bg-white text-gray-800 px-3 py-1 rounded hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
