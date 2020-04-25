import React, { useState } from "react";

function useCustomerCounter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleIncrement,
  };
}

export default useCustomerCounter;
