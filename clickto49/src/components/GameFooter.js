import React, { useEffect, useState } from 'react';

const GameFooter = ({ onTimer, onMode, mode, reqTime }) => {
  const [text, setText] = useState('start');

  useEffect(() => {
    mode === 'waiting'
      ? setText('start')
      : mode === 'playing'
      ? setText((reqTime / 1000).toFixed(2).toString())
      : setText('restart');
  }, [mode]);
  const onClick = () => {
    if (text === 'start') {
      onMode('playing');
      onTimer(true);
    } else if (text === 'restart') {
      onMode('waiting');
      onTimer(true);
    } else {
      onMode('ending');
      onTimer(false);
    }
  };
  return (
    <div className="GameFooter" onClick={onClick}>
      {text}
    </div>
  );
};

export default GameFooter;
