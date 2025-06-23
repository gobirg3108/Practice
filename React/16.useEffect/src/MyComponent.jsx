// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function,[dependencies])

// useEffect(()=>{})            // Runs after every re-render
// useEffect(()=>{},[])         // Runs only on mount
// useEffect(()=>{},[value])    // Runs on mount + when values change

// USES:
// 1. Event Listeners
// 2. DOM manipulation
// 3. Subscriptions (real-time updates )
// 4. Fetching Data from an API
// 5. Clean up when a component unmounts

import { useEffect, useState } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    console.log("Event listener added");

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed");
    };
  }, []); // Empty dependency array = runs only on mount/unmount

  useEffect(() => {
    document.title = `Size: ${width} * ${height}`;
  }, [width, height]);
  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
}

export default MyComponent;
