import React from "react";

function HelpAndSupport() {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-white mb-4">Help & Support</h1>
      <p className="text-gray-300 mb-6">
        Find answers to common questions or get in touch with our support team.
      </p>

      {/* FAQ Section */}
      <div className="space-y-4">
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">
            How can I track my order?
          </h2>
          <p className="text-gray-400 mt-2">
            You can track your order by visiting the "My Orders" section in your
            account and clicking on the tracking link.
          </p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">
            What is your return policy?
          </h2>
          <p className="text-gray-400 mt-2">
            We offer a 30-day return policy for unused items in their original
            packaging. Visit our Returns page for more details.
          </p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">
            How can I contact customer support?
          </h2>
          <p className="text-gray-400 mt-2">
            You can reach us via email at support@example.com or call us at
            (123) 456-7890. Our support team is available 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpAndSupport;
