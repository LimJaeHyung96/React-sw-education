import React from "react";
import CalendarListItem from "./CalendarListItem";
import "./CalendarList.scss";

const CalendarList = ({ gameResults, onRemove }) => {
  return (
    <div className="CalendarList">
      {gameResults
        .map((gameResult) => (
          <CalendarListItem
            key={gameResult.id}
            gameResult={gameResult}
            onRemove={onRemove}
          />
        ))
        .reverse()}
    </div>
  );
};

export default CalendarList;
