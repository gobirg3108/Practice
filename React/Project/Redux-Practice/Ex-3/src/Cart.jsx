import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, changeQty } from "./slice/cartSlice";
import { toast } from "react-toastify";

const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Pants", price: 800 },
  { id: 3, name: "Shoes", price: 1200 },
];

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(`${product.name} added to cart`);
            }}
          >
            Add
          </button>
        </div>
      ))}

      <hr />

      <h2>🧺 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            {item.name} - ₹{item.price} ×
            <input
              type="number"
              value={item.qty}
              onChange={(e) =>
                dispatch(
                  changeQty({ id: item.id, qty: Number(e.target.value) })
                )
              }
              style={{ width: "50px", marginLeft: 10 }}
            />
            = ₹{item.qty * item.price}
            <button
              onClick={() => {
                dispatch(removeFromCart(item.id));
                toast.error(`${item.name} removed from cart`);
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr />
      <h3>Total Items: {totalQty}</h3>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;
