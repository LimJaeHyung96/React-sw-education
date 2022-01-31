import React, { useEffect, useRef, useState } from 'react';
import { getInitialRandomArray } from '../util/makeTile';
import Tile from './Tile';
import cn from 'classnames';

const Tiles = ({ mode }) => {
  const [tiles, setTiles] = useState(getInitialRandomArray());
  const [GameStart, setGameStart] = useState(false);
  const nowNum = useRef(1);
  const onClicked = (_tile) => {
    if (_tile.number === nowNum.current) {
      nowNum.current += 1;
      const newArr = tiles.map((tile) => {
        return tile.number === _tile.number ? { ...tile, clicked: true } : tile;
      });
      setTiles(newArr);
    }
  };
  useEffect(() => {
    mode === 'playing' ? setGameStart(true) : setGameStart(false);
  }, [mode]);
  return (
    <div className={cn('Tiles', { GameStart })}>
      {tiles.map((tile) => (
        <Tile key={tile.number} tile={tile} onClicked={onClicked}></Tile>
      ))}
    </div>
  );
};

export default Tiles;
