import { useState, useRef, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  console.log("Rendered");

  const display = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Input</h1>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <p>State : My name is {input}</p>
      <p>useRef : My name is {inputRef.current}</p>
      <button onClick={display}> Show Input</button>
    </>
  );
}

export default App;
