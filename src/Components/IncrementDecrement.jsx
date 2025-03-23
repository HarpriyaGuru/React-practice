import React, { useEffect, useState } from 'react';

function IncrementDecrement() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const storedCounter = localStorage.getItem("storeCounter");
    if (storedCounter) {
      setCounter(Number(storedCounter));
    }
  }, [counter]);

  const handleIncrement = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    localStorage.setItem("storeCounter", newCounter);
  };

  const handleDecrement = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
    localStorage.setItem("storeCounter", newCounter);
  };

  const handleReset = () => {
    const newCounter = 0;
    setCounter(newCounter);
    localStorage.setItem("storeCounter", newCounter);
  };

  return (
    <div>
      <b>IncrementDecrement</b>
      <h1>counter: {counter}</h1>

      <button
        className="m-2 bg-amber-200"
        onClick={handleIncrement}
      >
        Increment
      </button>

      <button
        className="m-2 bg-red-200"
        onClick={handleDecrement}
      >
        Decrement
      </button>

      <button className="m-2 bg-blue-300" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default IncrementDecrement;
