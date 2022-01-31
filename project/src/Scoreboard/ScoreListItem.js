import React from "react";
import "./ScoreListItem.scss";
import { BiBasketball } from "react-icons/bi";

const ScoreListItem = ({ showScore }) => {
  const { text } = showScore;
  return (
    <div className="ScoreListItem">
      <div className="icon">
        <BiBasketball />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default ScoreListItem;
