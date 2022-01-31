import React, { useState } from "react";
import "./Game.scss";
import CardList from "./CardList";
import GameFooter from "./GameFooter";
import GameHeader from "./GameHeader";

const Game = () => {
  const [mode, setMode] = useState("waiting");
  const onMode = (_mode) => {};

  return (
    <div className="Game">
      <GameHeader mode={mode} />
      <CardList mode={mode} onMode={onMode} />
      <GameFooter mode={mode} onMode={onMode} />
    </div>
  );
};

export default Game;
