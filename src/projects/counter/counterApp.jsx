import React, { useState } from 'react'

export default function CounterApp () {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <p>count</p>
      <button onclick={() => setCount(count + 1)}>Increase</button>
      <button onclick={() => setCount(count - 1)}>Decrease</button>
      <button onclick={() => setCount(0)}>Reset</button>
    </div>
  )

}