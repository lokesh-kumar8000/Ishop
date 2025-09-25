"use client";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function ThankYouPage({ params }) {
  const { orderId } = params;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <FaCheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Thank You for Your Order! 🎉
        </h1>

        <p className="text-gray-600 mb-4">
          Your order <span className="font-semibold">#{orderId}</span> has been
          placed successfully.
        </p>

        {/* <p className="text-gray-700 mb-6">
          Amount Paid: <span className="font-bold">₹{amount}</span>
        </p> */}

        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
