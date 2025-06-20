import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");

  const [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Gobi");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const employerStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name : {name}</p>
        <button onClick={updateName}>SetName</button>

        <p>Age : {age}</p>
        <button onClick={incrementAge}>incrementAge</button>

        <p>isEmployed {isEmployed ? "Yes" : "No"}</p>
        <button onClick={employerStatus}>Employer Status</button>
      </div>
    </>
  );
}

export default MyComponent;
