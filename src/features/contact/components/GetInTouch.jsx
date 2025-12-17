export default function GetInTouch() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-700 mb-6">
              Reach out to AlbCarRent for any inquiries related to rentals,
              partnerships, or general support. We aim to respond as quickly as
              possible.
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <span className="font-semibold">📍 Address:</span>
                <p>Tirana, Albania</p>
              </div>

              <div>
                <span className="font-semibold">📞 Phone:</span>
                <p>+355 69 000 0000</p>
              </div>

              <div>
                <span className="font-semibold">✉️ Email:</span>
                <p>support@albcarent.com</p>
              </div>

              <div>
                <span className="font-semibold">⏰ Working Hours:</span>
                <p>Mon – Sun: 08:00 – 22:00</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-800"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
