import React, { useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning && timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const start = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    const seconds = parseInt(input);
    if (!isNaN(seconds)) {
      setTimeLeft(seconds);
      setIsRunning(false);
    }
  };

  return (
    <div>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isRunning}
      /> <br />  <br />

      <div>
        <button onClick={start} disabled={isRunning || timeLeft === 0}>Start</button> 
        <button onClick={stop} disabled={!isRunning}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h3>{timeLeft > 0 ? `Time Left: ${timeLeft}s` : "Time's up!"}</h3>
    </div>
  );
};

export default App;
