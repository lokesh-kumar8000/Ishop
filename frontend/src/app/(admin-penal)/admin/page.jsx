"use client";
import { axioIsnstance } from "@/library/helper";
import React, { useEffect, useRef, useState } from "react";

export default function ContentPage() {
  const [orders, setOrders] = useState([]);
  const inputRef = useRef();
  const [search, setSearch] = useState('');
  function getOrder() {
    axioIsnstance
      .get(`order/get/${search}`)
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getOrder();
  }, [search]); 

  function getInput(e) {
    e.preventDefault();
     console.log("Search Value:", inputRef.current.value);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white hover:scale-103 duration-150 shadow rounded-lg p-5">
          <h2 className="text-gray-600 text-sm">Total Users</h2>
          <p className="text-2xl font-bold mt-2">1,250</p>
        </div>
        <div className="bg-white shadow rounded-lg hover:scale-103 duration-150 p-5">
          <h2 className="text-gray-600 text-sm">Total Products</h2>
          <p className="text-2xl font-bold mt-2">340</p>
        </div>
        <div className="bg-white shadow rounded-lg hover:scale-103 duration-150 p-5">
          <h2 className="text-gray-600 text-sm">Sales</h2>
          <p className="text-2xl font-bold mt-2">$12,500</p>
        </div>
        <div className="bg-white shadow rounded-lg hover:scale-103 duration-150 p-5">
          <h2 className="text-gray-600 text-sm">Revenue</h2>
          <p className="text-2xl font-bold mt-2">$8,200</p>
        </div>
      </div>
      {/* sreaching option  */}
      <div>
        <form onSubmit={getInput} className=" w-full flex gap-1 sm:gap-10 ">
          <input
            type="text"
            placeholder=" Search order Order Id...."
            className=" border py-2 px-3 flex-1 "
             ref={inputRef}
          />
          <button
            type="submit"
            className=" py-2 px-5 bg-blue-500 text-white font-semibold "
          >
            {" "}
            Search{" "}
          </button>
        </form>
      </div>
      {/* Table Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3">Order ID</th>
              {/* <th className="p-3">Product</th> */}
              <th className="p-3">Customer</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{order._id}</td>

                {/* Product Image + Name */}
                {/* <td className="p-3 flex items-center gap-3">
                  <img
                    src={order.productImg}
                    alt={order.product}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <span>{order.product}</span>
                </td> */}

                {/* Customer Name */}
                <td className="p-3">{order?.user_id?.name}</td>

                {/* Amount */}
                <td className="p-3">{order.order_total}</td>

                {/* Status with color */}
                <td
                  className={`p-3 font-medium ${
                    order.order_status === 0
                      ? "text-green-600"
                      : order.status === 1
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.order_status === 0
                    ? "Completed"
                    : order.status === 1
                    ? "pandding"
                    : "Cancelled"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
