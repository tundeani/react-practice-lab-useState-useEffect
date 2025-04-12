import { useState } from 'react'

export default function counterApp () {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>count</p>
      <button onclick={() => setCount(count + 1)}>Increase</button>
      <button onclick={() => setCount(count - 1)}>Decrease</button>
      <button onclick={() => setCount(0)}>Reset</button>
    </div>
  )

}