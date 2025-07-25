import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar({ ...car, year: event.target.value }); // this also correct
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value })); // this is arrow function for update object better one
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <>
      <div>
        <p>
          Your favorite car is : {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
        <br />
      </div>
    </>
  );
}

export default MyComponent;
