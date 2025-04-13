import React, { useState } from 'react'

export default function CounterApp () {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <p>count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )

}