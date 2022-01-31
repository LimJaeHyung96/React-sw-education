import React from "react";
import "./ShotclockTimer.scss";

const ShotClockTimer = ({ shotclockSec }) => {
  return (
    <div className="ShotclockTimer">
      <div className="Title">SHOTCLOCK</div>
      <div className="Timer">{shotclockSec}</div>
    </div>
  );
};

export default ShotClockTimer;
