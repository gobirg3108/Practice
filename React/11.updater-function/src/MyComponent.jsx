// updater function = A function passed as an argument to setState() usually
//                    export.setYear(year+1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

// Uses the current state to calculate the next state.
// set functions do not trigger an update.
// React batches together state updates for performance reasons .
// Next state becomes the Current state after an update

import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // Takes the Pending state to calculate next state
  // React puts puts updater function in a queue (waiting in line)
  // During the next render, it will call them in the same order

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount((c) => (c = 0));
  };
  return (
    <>
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="btn-display" onClick={increment}>
          Increase
        </button>
        <button className="btn-display" onClick={decrement}>
          Decrease
        </button>
        <button className="btn-display" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default MyComponent;
