"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function AccountInfoPage() {
  const [toggle, setToggle] = useState("account");

  function Button({ text, tab }) {
    return (
      <button
        onClick={() => setToggle(tab)}
        className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-sm sm:text-base transition-colors
          ${
            toggle === tab
              ? "bg-teal-600 text-white"
              : "bg-gray-100 text-black hover:bg-gray-200"
          }`}
      >
        {text} <FaArrowRight className="ml-2" />
      </button> 
    );
  }

  return (
    <div className=" flex items-center justify-center bg-gray-50 p-3 sm:p-6">
      <div className="w-full  bg-white rounded-2xl shadow-md flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r p-4 sm:p-6 flex flex-col items-center">
          <img
            src="/images/profile.png"
            alt="Profile"
            className=" rounded-xl object-cover"
          />
          <h2 className="mt-3 font-semibold text-base sm:text-lg">Mark Cole</h2>
          <p className="text-xs sm:text-sm text-gray-500">swoo@gmail.com</p>

          <div className="mt-4 sm:mt-6 w-full flex flex-col gap-2 sm:gap-3">
            <Button text={"Account info"} tab="account" />
            <Button text={"My Order"} tab="order" />
            <Button text={"My Address"} tab="address" />
            <Button text={"Change Password"} tab="password" />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 p-4 sm:p-8">
          {toggle === "account" && (
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Account Info
              </h1>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    defaultValue="Mark"
                    className="border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div> 

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    defaultValue="Cole"
                    className="border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label className="text-sm font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    defaultValue="swoo@gmail.com"
                    className="border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label className="text-sm font-medium mb-1">
                    Phone Number{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 0231 4554 452"
                    defaultValue="+1 0231 4554 452"
                    className="border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2 rounded-lg text-sm sm:text-base"
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          )}

          {toggle === "order" && (
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                My Orders
              </h1>
              <div className="flex flex-col gap-4 sm:gap-6">
                {["Delivered", "Shipped", "Cancelled"].map((status, i) => (
                  <div
                    key={i}
                    className="border rounded-xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div>
                      <h2 className="font-semibold text-base sm:text-lg">
                        Order #{12345 + i}
                      </h2>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Placed on: {10 - i} Sep 2025
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Status:{" "}
                        <span
                          className={`font-medium ${
                            status === "Delivered"
                              ? "text-green-600"
                              : status === "Shipped"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {status}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{1499 + i * 500}</p>
                      <button className="mt-1 sm:mt-2 text-xs sm:text-sm text-teal-600 hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {toggle === "address" && (
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                My Address
              </h1>
              <div className="flex flex-col gap-4 sm:gap-6">
                {[
                  {
                    title: "Home",
                    address:
                      "123, Green Park Colony, New Delhi, India - 110016",
                    phone: "+91 98765 43210",
                  },
                  {
                    title: "Office",
                    address:
                      "45, Tech Park Building, Bangalore, India - 560100",
                    phone: "+91 99887 77665",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border rounded-xl p-4 sm:p-6 shadow-sm text-sm sm:text-base"
                  >
                    <h2 className="font-semibold text-base sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{item.address}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Phone: {item.phone}
                    </p>
                    <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
                      <button className="text-xs sm:text-sm bg-teal-600 text-white px-3 sm:px-4 py-1 rounded-lg">
                        Edit
                      </button>
                      <button className="text-xs sm:text-sm bg-red-500 text-white px-3 sm:px-4 py-1 rounded-lg">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <button className="mt-3 sm:mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base self-start">
                  + Add New Address
                </button>
              </div>
            </div>
          )}

          {toggle === "password" && (
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Change Password
              </h1>
              <form className="flex flex-col gap-4 sm:gap-6 max-w-lg">
                {["Current", "New", "Confirm"].map((label, i) => (
                  <div key={i} className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      {label} Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder={`Enter ${label.toLowerCase()} password`}
                      className="border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                ))}
                <div>
                  <button
                    type="button"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2 rounded-lg text-sm sm:text-base"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
