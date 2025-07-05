import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./slice/cartSlice";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Cart />

      <ToastContainer position="top-right" autoClose={1500} />

      {cartItems.length > 0 && (
        <div style={{ padding: 10 }}>
          <button
            onClick={() => {
              dispatch(clearCart());
              toast.info("Cart cleared");
            }}
          >
            Clear Cart
          </button>

          <button
            onClick={() => {
              toast.success("✅ Order placed successfully!");
              dispatch(clearCart());
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
}

export default App;
