"use client";
import React, { useState } from "react";

export default function CheckoutPage() {
  const [addresses] = useState([
    {
      id: 1,
      name: "Lokesh Kumar",
      phone: "+91 9876543210",
      address: "123, MG Road, Jaipur, Rajasthan",
      zip: "302001",
    },
    {
      id: 2,
      name: "Ravi Sharma",
      phone: "+91 9988776655",
      address: "45, Connaught Place, Delhi",
      zip: "110001",
    },
    {
      id: 3,
      name: "Amit Verma",
      phone: "+91 9123456789",
      address: "67, Park Street, Kolkata, West Bengal",
      zip: "700016",
    },
  ]);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - Address + Payment */}
        <div className="md:col-span-2 space-y-6">
          {/* Address Section */}
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Select Address</h2>
            <div className="space-y-4">
              {addresses.map((addr) => (
                <label
                  key={addr.id}
                  className="flex items-start gap-3 border border-blue-300 p-4 rounded-lg cursor-pointer hover:shadow"
                >
                  <input type="radio" name="address" value={addr.id} />
                  <div>
                    <p className="font-medium">{addr.name}</p>
                    <p className="text-sm text-gray-600">{addr.phone}</p>
                    <p className="text-sm text-gray-600">{addr.address}</p>
                    <p className="text-sm text-gray-600">Zip: {addr.zip}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 border border-blue-300 p-3 rounded-lg cursor-pointer">
                <input type="radio" name="payment" />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3 border border-blue-300 p-3 rounded-lg cursor-pointer">
                <input type="radio" name="payment" />
                <span>UPI / Netbanking</span>
              </label>
              <label className="flex items-center gap-3 border border-blue-300 p-3 rounded-lg cursor-pointer">
                <input type="radio" name="payment" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="space-y-6">
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Product 1</span>
                <span>₹1200</span>
              </div>
              <div className="flex justify-between">
                <span>Product 2</span>
                <span>₹800</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-3">
                <span>Total</span>
                <span>₹2000</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md hover:bg-gray-800 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
