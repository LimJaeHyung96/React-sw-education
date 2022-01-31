import React, { useEffect, useState } from "react";

const GameFooter = ({ mode, onMode }) => {
  const [text, setText] = useState("START");

  const onClick = () => {};
  return (
    <div className="GameFooter" onClick={onClick}>
      {text}
    </div>
  );
};

export default GameFooter;
