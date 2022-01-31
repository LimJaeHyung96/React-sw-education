import React from "react";
import ScoreListItem from "./ScoreListItem";
import "./ScoreList.scss";

const ScoreList = ({ showScores }) => {
  return (
    <div className="ScoreList">
      {showScores
        .map((showScore) => (
          <ScoreListItem key={showScore.id} showScore={showScore} />
        ))
        .reverse()}
    </div>
  );
};

export default ScoreList;
