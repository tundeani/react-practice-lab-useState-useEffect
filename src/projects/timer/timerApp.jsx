import React, { useState, useEffect } from 'react'
import './TimerApp.css';

export default function TimerApp() {
  const [seconds, setSeconds ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      // Increase time every second when running
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isRunning && seconds !==0) {
      // clear interval if not running
      clearInterval(interval);
    }

    // Cleanup on unmount or when dependencies change
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  return (
    <div className="timer-container">
      <h2>Timer App</h2>
      <p>Timer: {seconds} seconds</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => {setIsRunning(false); setSeconds(0)} }>Reset</button>
    </div>
  )
}