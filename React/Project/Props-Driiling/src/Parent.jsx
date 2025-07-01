import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [name, setName] = useState("Guest");

  const handleUpdate = () => {
    setName("Gobi");
  };
  return (
    <>
      <p>Parent:{name}</p>
      <button onClick={handleUpdate}>Click Me !</button>
      <Child name={name} />
    </>
  );
}

export default Parent;
