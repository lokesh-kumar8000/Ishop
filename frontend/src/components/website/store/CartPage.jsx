"use client";
import { increment, removeCart } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage({ products }) {
  const router = useRouter();
  const dispatcher = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data);

  function checkoutHandler() {
    if (user) {
      router.push("/checkout");
    } else {
      router.push("/user-login");
    }
  }

  // useEffect(() => {
  //   if (user === null ) {
  //     router.push("/user-login");
  //   } else {
  //     router.push("/checkout");
  //   }
  // }, [user]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section - Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart?.items?.map((item) => {
            const product = products.find(
              (prod) => prod._id === item.productId
            );
            return (
              <div
                key={product._id}
                className="flex items-center gap-4 bg-white rounded-2xl shadow p-4"
              >
                {/* Image + Tag */}
                <div className="relative">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API__BASE_URL}/image/product/${product.thumbnail}`}
                    alt={product.name}
                    className="w-24 h-28 object-contain rounded-lg"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className=" flex justify-between items-center ">
                    <div>
                      <h3 className="font-semibold text-sm text-gray-700">
                        {product.name}
                      </h3>
                      <p className="text-red-600 font-bold text-lg">
                        ₹{product.finalPrice*item.qty}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mt-2">
                        <button className="w-7 h-7 flex items-center justify-center border rounded-md hover:bg-gray-100">
                          <FaMinus size={12} />
                        </button>
                        <span className="px-2"> {item.qty} </span>
                        <button
                          onClick={() =>
                            dispatcher(
                              increment({
                                productId: product._id,
                                finalPrice: product.finalPrice,
                                originalPrice: product.originalPrice,
                                qty: item.qty,
                              })
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center border rounded-md hover:bg-gray-100"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        dispatcher(
                          removeCart({
                            productId: product._id,
                            finalPrice: product.finalPrice,
                            originalPrice: product.originalPrice,
                            qty: item.qty,
                          })
                        );
                      }}
                      className=" bg-red-600 text-white px-3 py-2 rounded-[10px] cursor-pointer "
                    >
                      {" "}
                      Remove{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Section - Order Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit border border-green-500">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Total:</span>
              <span className="font-medium">₹ {cart.original_total} </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saving:</span>
              <span className="font-medium">
                {" "}
                ₹ {cart.original_total - cart.final_total}
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-4 font-bold text-lg">
            <span>ORDER TOTAL:</span>
            <span>₹ {cart.final_total} </span>
          </div>
          <button
            onClick={checkoutHandler}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
