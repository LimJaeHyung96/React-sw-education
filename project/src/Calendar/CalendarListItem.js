import React from "react";
import { MdRemoveCircle } from "react-icons/md";
import "./CalendarListItem.scss";

const CalendarListItem = ({ gameResult, onRemove }) => {
  const { id, date, text } = gameResult;
  const onClick = () => {
    onRemove(id);
  };
  return (
    <div className="CalendarListItem">
      <div className="First">
        <div className="text">{text}</div>
        <div className="remove" onClick={onClick}>
          <MdRemoveCircle />
        </div>
      </div>
      <div className="date">{date}</div>
    </div>
  );
};

export default CalendarListItem;
