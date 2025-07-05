import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";

// Load cart from localStorage
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: savedCart,
    },
  },
});

// Save cart to localStorage on every change
store.subscribe(() => {
  const cartItems = store.getState().cart.items;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});

export default store;
