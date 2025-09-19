import React from "react";

export default function ContentPage() {
  const orders = [
    {
      id: "#1001",
      product: "Laptop",
      productImg:
        "https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500",
      customer: "John Doe",
      amount: "$250", 
      status: "Completed", 
    },
    {
      id: "#1002",
      product: "Smartphone",
      productImg: "https://m.media-amazon.com/images/I/51AHHmX-17L.jpg",
      customer: "Jane Smith",
      amount: "$120",
      status: "Pending",
    },
    {
      id: "#1003",
      product: "Headphones",
      productImg:
        "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      customer: "Mike Johnson",
      amount: "$90",
      status: "Cancelled",
    },
    {
      id: "#1004",
      product: "Tablet",
      productImg:
        "https://media.wired.com/photos/649b2dbfc859c4a1cdecc412/4:3/w_960,c_limit/Amazon-Fire-Max-11-Review--Stand-Gear.jpg",
      customer: "Emily Davis",
      amount: "$300",
      status: "Completed",
    },
  ];

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
      {/* Table Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3">Order ID</th>
              <th className="p-3">Product</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.id}</td>

                {/* Product Image + Name */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={order.productImg}
                    alt={order.product}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <span>{order.product}</span>
                </td>

                {/* Customer Name */}
                <td className="p-3">{order.customer}</td>

                {/* Amount */}
                <td className="p-3">{order.amount}</td>

                {/* Status with color */}
                <td
                  className={`p-3 font-medium ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
