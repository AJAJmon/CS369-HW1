import React, { useState } from "react";
import "./App.css";
const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button className="btn" onClick={() => setCount((p) => p - 1)}>
        -
      </button>
      <button className="btn" onClick={() => setCount((p) => p + 1)}>
        +
      </button>
    </div>
  );
};
export default Counter;
