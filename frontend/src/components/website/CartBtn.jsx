"use client";
import { axioIsnstance } from "@/library/helper";
import { addToCart } from "@/redux/features/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CartBtn({ finalPrice, originalPrice, productId }) {
  const dispatcher = useDispatch();

  const user = useSelector((state) => state.user.data);

  function addToCartHandler() {
    console.log('hello cart ');
    if (user != null) {
      axioIsnstance.post("cart/add-to-cart", {
        productId: productId,
        qty: 1,
        userId: user._id,
      });
    } return
    dispatcher(
      addToCart({
        productId,
        finalPrice,
        originalPrice,
      })
    );
  } 

  return (
    <button
      onClick={addToCartHandler}
      className="w-full mt-3 bg-[#1ABA1A] hover:bg-[#068506] text-white text-[14px] py-2 rounded-lg font-medium"
    >
      Add to Cart
    </button>
  );
}

export default CartBtn;
