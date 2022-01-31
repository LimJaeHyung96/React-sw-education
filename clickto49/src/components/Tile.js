import React from 'react';
import cn from 'classnames';

const Tile = ({ tile, onClicked }) => {
  const { number, clicked } = tile;
  const onClick = () => {
    onClicked(tile);
  };
  return (
    <div className={cn('Tile', { clicked })} onClick={onClick}>
      {number}
    </div>
  );
};

export default Tile;
