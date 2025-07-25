import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
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

export default Counter;
