export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-gray-900">AlbCarRent</h1>
          <p className="text-gray-600 text-sm">Rent your car with ease and confidence.</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-900 transition">Home</a>
          <a href="/about" className="hover:text-gray-900 transition">About</a>
          <a href="/cars" className="hover:text-gray-900 transition">Cars</a>
          <a href="/contact" className="hover:text-gray-900 transition">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-900 transition">Facebook</a>
          <a href="#" className="hover:text-gray-900 transition">Twitter</a>
          <a href="#" className="hover:text-gray-900 transition">Instagram</a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2025 AlbCarRent. All rights reserved.
      </div>
    </footer>
  );
}
