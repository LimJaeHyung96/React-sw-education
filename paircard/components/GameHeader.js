import React, { useEffect, useState } from "react";

const GameHeader = ({ mode }) => {
  const [text, setText] = useState("Pair Card");
  return <div className="GameHeader">{text}</div>;
};

export default GameHeader;
