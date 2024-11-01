import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addCOunt = () => {
    setCount(count + 1);
  };
  const disAppCOunt = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={addCOunt}>Add Count</button>
      <button onClick={disAppCOunt}>Subtract Count</button>
    </>
  );
}
