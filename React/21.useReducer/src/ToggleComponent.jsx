import React, { useReducer } from "react";

function ToggleComponent() {
  const reducer = (state) => !state;

  const [isOn, toggle] = useReducer(reducer, false);

  return (
    <>
      <h1>Toggle Component</h1>
      <button onClick={toggle}>{isOn ? "Dark Mode" : "Light Mode"}</button>
    </>
  );
}

export default ToggleComponent;
