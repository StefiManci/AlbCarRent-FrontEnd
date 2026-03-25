export default function BusinessProfileManager() {
  return (
    <>
      <div className="w-full h-60  bg-white">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Business Profile"
          className="w-full h-60 object-cover"
        />
        <h1 className="absolute top-50 left-4 text-2xl font-bold text-white">
          Business Name
        </h1>
        <button className="absolute top-20 right-4 flex items-center gap-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20 transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          Change Cover
        </button>
      </div>
      <div className="p-5 w-full flex flex-col gap-4 justify-start items-center">
        <h2 className="text-xl font-semibold mb-2">About Us</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>

      <div className="p-5 w-full flex flex-col gap-4 justify-start items-center">
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <div className="w-full p-8 grid grid-cols-3 gap-5 grid-rows-1 auto">
          <div className="border shadow-md rounded-xl">
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Wide Selection
              </h3>
              <p className="text-gray-700 text-sm">
                Choose from a wide range of vehicles to suit your needs and
                preferences.
              </p>
            </div>
          </div>
          <div className="border shadow-md rounded-xl">
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Competitive Pricing
              </h3>
              <p className="text-gray-700 text-sm">
                Enjoy unbeatable prices on our rental services without
                compromising on quality.
              </p>
            </div>
          </div>

          <div className="border shadow-md rounded-xl">
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                24/7 Support
              </h3>
              <p className="text-gray-700 text-sm">
                Our dedicated support team is always ready to assist you with
                any inquiries or issues.
              </p>
            </div>
          </div>
          <div className="border shadow-md rounded-2xl bg-white">
            <div className="p-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Cars on the road
              </h3>
              <p className="text-4xl font-bold text-blue-600 mt-2">0</p>
            </div>
          </div>

          <div className="border shadow-md rounded-2xl bg-white">
            <div className="p-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Happy Clients
              </h3>
              <p className="text-4xl font-bold text-green-600 mt-2">0</p>
            </div>
          </div>

          <div className="border shadow-md rounded-2xl bg-white">
            <div className="p-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Days in Business
              </h3>
              <p className="text-4xl font-bold text-purple-600 mt-2">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 w-full flex flex-col gap-4 justify-start items-center">
        <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
        <p className="text-gray-700 mb-4">What our customers say about us.</p>
        <div className="w-full p-8 grid grid-cols-3 gap-5 grid-rows-1 auto">
          <div className="border-b-4 shadow-md rounded-xl">
            <div className="p-4">
              <p className="text-gray-700 text-sm">
                "Great service and a fantastic selection of cars! Highly
                recommend."
              </p>
              <h3 className="text-sm font-medium text-gray-500 mt-4">
                - John Doe
              </h3>
            </div>
          </div>

          <div className="border-b-4 shadow-md rounded-xl">
            <div className="p-4">
              <p className="text-gray-700 text-sm">
                "The booking process was smooth and the staff was very helpful."
              </p>
              <h3 className="text-sm font-medium text-gray-500 mt-4">
                - Jane Smith
              </h3>
            </div>
          </div>
          <div className="border-b-4 shadow-md rounded-xl">
            <div className="p-4">
              <p className="text-gray-700 text-sm">
                "I had a wonderful experience renting from this company. Will
                definitely use them again!"
              </p>
              <h3 className="text-sm font-medium text-gray-500 mt-4">
                - Alex Johnson
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
