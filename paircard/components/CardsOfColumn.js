import React from "react";
import Card from "./Card";

const CardsOfColumn = ({ cards, onSelected }) => {
  return (
    <div className="CardsOfColumn">
      {cards.map((card) => (
        <Card card={card} key={card.id} onSelected={onSelected}></Card>
      ))}
    </div>
  );
};

export default CardsOfColumn;
