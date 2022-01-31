import React from "react";
import "./ScoreboardTemplate.scss";

const ScoreboardTemplate = ({ children }) => {
  return (
    <div className="ScoreboardTemplate">
      <div className="content">{children}</div>
    </div>
  );
};

export default ScoreboardTemplate;
