import React from "react";
import "./GameTimer.scss";

const GameTimer = ({ min, sec }) => {
  return (
    <div className="GameTimer">
      <div className="Time">TIME</div>
      <div className="Timer">
        {min}:{sec}
      </div>
    </div>
  );
};

export default GameTimer;
