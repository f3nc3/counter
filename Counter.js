// src/Counter.js
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [running]); // Run effect when 'running' changes

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetCount = () => {
    setCount(0);
    setRunning(false); // Stop the timer when resetting
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={startTimer} disabled={running}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!running}>
        Stop
      </button>
      <button onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
