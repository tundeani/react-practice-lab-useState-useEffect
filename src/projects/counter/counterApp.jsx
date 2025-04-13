import React, { useState } from 'react';
import './CounterApp.css';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
