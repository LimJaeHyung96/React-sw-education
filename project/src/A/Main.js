import React from 'react';
import { BiNotepad, BiBasketball } from 'react-icons/bi';
import './Main.scss';

const Main = ({ history }) => {
  const homeScore = 0;
  const awayScore = 0;
  return (
    <div className="Main">
      <button
        className="note"
        onClick={() => {
          history.push({
            pathname: '/Calendar',
            state: { homeScore: homeScore, awayScore: awayScore },
          });
        }}
      >
        <BiNotepad />
        <br></br>
        경기 기록
      </button>
      <button
        className="score"
        onClick={() => {
          history.push('/Scoreboard');
        }}
      >
        <BiBasketball />
        <br></br>
        스코어보드
      </button>
    </div>
  );
};

export default Main;
