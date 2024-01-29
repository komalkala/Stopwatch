import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const startStopHandler = () => {
    setIsRunning(!isRunning);
  };

  const resetHandler = () => {
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="time">{formatTime()}</div>
      <button onClick={startStopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Stopwatch;
