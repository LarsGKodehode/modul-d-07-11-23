import { useState } from "react"

export function Counter() {
  // Statefull Variables
  const [count, setCount] = useState(0)

  // Event Handlers
  function reset() {
    // Setting the reactive variabel to a concrete value
    setCount(0)
  }

  function increment() {
    // We have to use a function when using the previous value to calculate the new
    setCount(oldCount => oldCount + 1)
  }

  function decrement() {
    setCount(oldCount => oldCount - 1)
  }

  // Keep the returned JSX free from non HTML and CSS stuff
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}