import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    final_total: 0,
    original_total: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const { productId, originalPrice, finalPrice } = payload;
      const existingItem = state.items.find(
        (item) => item.productId == productId
      );
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.items.push({ productId: productId, qty: 1 });
      }
      state.final_total += finalPrice;
      state.original_total += originalPrice;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    lstoCart: (state) => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        state.items = cart.items;
        state.final_total = cart.final_total;
        state.original_total = cart.original_total;
      }
    },
    removeCart: (state, { payload }) => {
      const { productId, originalPrice, finalPrice } = payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      state.final_total -= finalPrice * payload.qty;
      state.original_total -= originalPrice * payload.qty;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    // increment: (state, { payload }) => {
    //   const { productId, originalPrice, finalPrice, qty } = payload;
    //   const product = state.items.find((item) => item.productId === productId);
    //   if (product) {
    //     product.qty = qty + 1;
    //   }
      
      // state.final_total += finalPrice * product.qty;
      // state.original_total += originalPrice * product.qty;

      // console.log(product.qty, "product"); 
      // console.log(product.qty, "qty");
      // console.log(finalPrice * qty);
    // },
  },
});

export const { addToCart, lstoCart, removeCart, increment } = cartSlice.actions;

export default cartSlice.reducer;
