import React, { useRef, useState, useEffect } from 'react';

export default function Seconds({ mode, onMinuteChange }) {
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState();
  const intervalRef = useRef(null);
  const TIME = 1000;

  useEffect(() => {
    console.log('sec: ', seconds);
    if (seconds === 0 && started) {
      onMinuteChange();
    }
  }, [seconds, started]);

  const count = () => {
    setSeconds((prevState) => (prevState + 1 < 10 ? prevState + 1 : 0));
    setStarted(true);
  };

  const play = () => {
    intervalRef.current = setInterval(count, TIME);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
  };

  const stop = () => {
    setStarted(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
    onMinuteChange(true);
  };

  useEffect(() => {
    console.log('mode change: ', mode);
    if (mode === 'play') {
      play();
    } else if (mode === 'pause') {
      pause();
    } else if (mode === 'reset') {
      stop();
    }
  }, [mode]);

  return <div className="seconds">{seconds}</div>;
}
