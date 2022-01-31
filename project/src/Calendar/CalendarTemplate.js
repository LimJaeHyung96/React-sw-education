import React from "react";
import "./CalendarTemplate.scss";

const CalendarTemplate = ({ children }) => {
  return (
    <div className="CalendarTemplate">
      <div className="app-title">결과 목록</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default CalendarTemplate;
