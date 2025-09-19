"use client";
import { addToCart } from "@/redux/features/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

function CartBtn({ finalPrice, originalPrice, productId }) {
  const dispatcher = useDispatch();
  return (
    <button
      onClick={() => {
        dispatcher(
          addToCart({
            productId,
            finalPrice,
            originalPrice,
          })
        );
      }}
      className="w-full mt-3 bg-[#1ABA1A] hover:bg-[#068506] text-white text-[14px] py-2 rounded-lg font-medium"
    >
      Add to Cart
    </button> 
  );
}

export default CartBtn;
