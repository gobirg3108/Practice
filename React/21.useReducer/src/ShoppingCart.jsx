import { useReducer } from "react";

const initialCart = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addItem = () => {
    dispatch({ type: "ADD", item: { id: Date.now(), name: "Shoes" } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={addItem}>Add Shoes</button>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
