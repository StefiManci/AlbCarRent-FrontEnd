export default function AdminFooter() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} CarRental Admin Dashboard. All Rights
          Reserved.
        </p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="hover:text-black cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-black cursor-pointer">Terms</span>
          <span className="hover:text-black cursor-pointer">Support</span>
          <span className="text-green-600">System Status: Operational</span>
        </div>
      </div>
    </footer>
  );
}
