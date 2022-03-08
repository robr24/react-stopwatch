import React, { useEffect, useState } from 'react';
import Minutes from './minutes';
import Seconds from './seconds';

export default function Stopwatch() {
  const [mode, setMode] = useState('reset');
  const [minutes, setMinutes] = useState(0);

  const togglePlay = (event) => {
    event.preventDefault();
    if (mode === 'pause' || mode === 'reset') {
      setMode('play');
    } else {
      setMode('pause');
    }
  };

  const onReset = (event) => {
    event.preventDefault();
    setMode('reset');
  };

  const onMinuteChange = (clear) => {
    if (clear) {
      return setMinutes(0);
    }
    setMinutes((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <Minutes minutes={minutes} />
        <Seconds mode={mode} onMinuteChange={onMinuteChange} />
      </div>
      <form>
        <button onClick={togglePlay}>Play / Pause</button>
        <button onClick={onReset}>Reset</button>
      </form>
    </div>
  );
}
