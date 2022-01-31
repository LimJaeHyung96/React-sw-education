import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import CalendarList from './CalendarList';
import CalendarTemplate from './CalendarTemplate';
import Save from './Save';
//location.state.awayScore
const Calendar = ({ history }) => {
  const location = useLocation();
  const homeScore = location.state.homeScore;
  const awayScore = location.state.awayScore;
  const [gameResults, setGameResults] = useState([]);
  const nextId = useRef(1);
  const onInsert = useCallback(
    (_date, _text) => {
      const gameResult = {
        id: nextId.current,
        date: _date,
        text: _text,
      };
      setGameResults(gameResults.concat(gameResult));
      nextId.current += 1;
    },
    [gameResults],
  );
  const onRemove = useCallback(
    (id) => {
      setGameResults(gameResults.filter((gameResult) => gameResult.id != id));
    },
    [gameResults],
  );
  return (
    <div>
      <button
        onClick={() => {
          history.push('/Scoreboard');
        }}
      >
        스코어보드
      </button>
      <CalendarTemplate>
        <Save onInsert={onInsert} homeScore={homeScore} awayScore={awayScore} />
        <CalendarList gameResults={gameResults} onRemove={onRemove} />
      </CalendarTemplate>
    </div>
  );
};

export default Calendar;
