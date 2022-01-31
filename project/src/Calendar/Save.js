import React, { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './save.scss';
import { HiOutlineSave } from 'react-icons/hi';
import moment from 'moment';

const Save = ({ onInsert, homeScore, awayScore }) => {
  const [gameDate, setGameDate] = useState(new Date());
  const [value, setValue] = useState(
    homeScore > awayScore
      ? `${homeScore} : ${awayScore} 승!`
      : homeScore < awayScore
      ? `${homeScore} : ${awayScore} 패ㅠㅠ`
      : `${homeScore} : ${awayScore} 무승부`,
  );
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(moment(gameDate).format('YYYY/MM/DD'), value);
      setValue('');
    },
    [onInsert, value],
  );
  return (
    <form className="SaveForm" onSubmit={onSubmit}>
      <div className="inputDiv">
        <input className="input" value={value} onChange={onChange} />
      </div>
      <div className="Save">
        날짜&nbsp;
        <DatePicker
          className="DatePicker"
          dateFormat="yyyy/MM/dd"
          selected={gameDate}
          onChange={(date) => setGameDate(date)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="SaveButton">
          <HiOutlineSave />
        </button>
      </div>
    </form>
  );
};

export default Save;
