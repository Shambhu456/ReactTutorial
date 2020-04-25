import React, { useState } from "react";
function App() {
  const a = useState("Shambhu");
  const name = a[0];
  const [roll, setRoll] = useState(104);//destructing the array first one is value and second one is the function
  const handleClick = () => {
    a[1]("Manish");
    setRoll(110);
  };
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Roll: {roll}</h2>
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </>
  );
}

export default App;
