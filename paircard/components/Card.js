import React, { useEffect, useState } from "react";
import cn from "classnames";

const Card = ({ card, onSelected }) => {
  const [clicked, setClicked] = useState(false);
  const [opened, setOpened] = useState(false);

  const { number, state } = card;

  const onClick = () => {};
  return (
    <div className={cn("Card", { clicked, opened })} onClick={onClick}>
      {number}
    </div>
  );
};

export default Card;
