import React from "react";
import Custom from "./Custom";

function App() {
  const data = Custom();

  return (
    <>
      <h1>Count up : {data.count}</h1>
      <button type="button" onClick={data.handleIncrement}>
        Increment
      </button>
    </>
  );
}

export default App;
