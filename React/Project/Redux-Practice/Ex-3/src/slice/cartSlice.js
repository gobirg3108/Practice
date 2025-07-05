import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((p) => p.id === item.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id); // ✅ fixed: state.item ➝ state.items
    },
    changeQty: (state, action) => {
      const { id, qty } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product && qty >= 1) {
        product.qty = qty;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, changeQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
