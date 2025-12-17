import GetInTouch from "../features/contact/components/GetInTouch";

export default function Contact() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-gray-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Have questions or need assistance? Our team is here to help you with
          bookings, pricing, and support.
        </p>
      </section>
      <GetInTouch />
      <section className="bg-gray-100 py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Check Out Our Partners Locations
        </h2>
        <p className="text-gray-700 mb-8">
          We are located all around Albania and ready to assist you.
        </p>

        <div className="max-w-4xl mx-auto h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
          Map Placeholder
        </div>
      </section>
    </div>
  );
}
