import React, { useRef, useState } from 'react';
import './Game.scss';
import GameHeader from './GameHeader';
import GameFooter from './GameFooter';
import Tiles from './Tiles';

const Game = () => {
  const [mode, setMode] = useState('waiting');
  const [reqTime, setReqTime] = useState(0);
  const startTime = useRef(null);
  const endTime = useRef(null);
  const timerID = useRef(null);
  const [best, setBest] = useState('best score');

  const onBest = () => {
    const text = (reqTime / 1000).toFixed(2).toString();
    if (best >= text) {
      setBest(text);
    }
  };
  const onMode = (_mode) => {
    setMode(_mode);
    if (_mode === 'ending') {
      onTimer(false);
    }
  };
  const onTimer = (start) => {
    if (start) {
      startTime.current = Date.now();
      timerID.current = setInterval(() => {
        tick();
      }, 100);
    } else {
      clearInterval(timerID.current);
    }
  };
  const tick = () => {
    endTime.current = Date.now();
    setReqTime(endTime.current - startTime.current);
  };
  return (
    <div className="Game">
      <GameHeader />
      <Tiles onBest={onBest} onMode={onMode} mode={mode}></Tiles>
      <GameFooter
        onTimer={onTimer}
        onMode={onMode}
        mode={mode}
        reqTime={reqTime}
      />
    </div>
  );
};

export default Game;
