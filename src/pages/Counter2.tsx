import React, { useState } from "react";

const LimitedCounter: React.FC = () => {
  // Define tu estado aquí
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if(counter + 1 > 10)
        setError(true);
    else
        setError(false);
    setCounter((counter) => counter < 10 ? counter + 1: counter)
  }

  const decrement = () => {
    if(counter - 1 < 0)
        setError(true);
    else
        setError(false);
    setCounter((counter) => counter > 0 ? counter - 1: counter)
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {/* Aquí va el mensaje de advertencia si el usuario excede los límites */}
      {error && <p style={{color: 'yellow'}}>Warning: the counter should be between 10 and 0</p>}
    </div>
  );
};

export default LimitedCounter;
