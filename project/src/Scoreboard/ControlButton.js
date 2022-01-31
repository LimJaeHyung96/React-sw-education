import React from "react";
import "./ControlButton.scss";

const ControlButton = ({ onSwitch, setShotclock14, setShotclock24 }) => {
  const onStart = () => {
    onSwitch();
  };

  const set14 = () => {
    setShotclock14();
  };

  const set24 = () => {
    setShotclock24();
  };

  return (
    <div className="ControlButton">
      <div className="StartStop">
        <button onClick={onStart} className="Button">
          START/STOP
        </button>
      </div>
      <table className="ShotclockSetting">
        <th className="Setting24">
          <button onClick={set24}>SHOTCLOCK 24 SETTING</button>
        </th>
        <th className="Setting14">
          <button onClick={set14}>SHOTCLOCK 14 SETTING</button>
        </th>
      </table>
    </div>
  );
};

export default ControlButton;
