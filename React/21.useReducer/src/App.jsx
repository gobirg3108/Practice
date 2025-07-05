// useReducer is a React Hook used to manage complex state logic inside functional components.
// It works like Redux — we use a reducer function and a dispatch method to update the state.

// Uses:
// 1. The state has multiple values
// 2. Updates depend on previous state
// 3. You want clean and organized logic

import React, { useReducer } from "react";
import Form from "./Form";
import ToggleComponent from "./ToggleComponent";
import ShoppingCart from "./ShoppingCart";
import APIRequest from "./APIRequest";

function App() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  return (
    <>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
      <br />

      <Form />
      <ToggleComponent />
      <ShoppingCart />
      <APIRequest />
    </>
  );
}

export default App;
