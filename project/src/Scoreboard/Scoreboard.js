import React, { useCallback, useEffect, useRef, useState } from 'react';
import GameTimer from './GameTimer';
import Score from './Score';
import ScoreboardTemplate from './ScoreboardTemplate';
import ShotClockTimer from './ShotclockTimer';
import Foul from './Foul';
import ControlButton from './ControlButton';
import ScoreList from './ScoreList';

const Scoreboard = ({ history }) => {
  const [timerOn, setTimerOn] = useState(1);
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState('00');
  const count = 600;
  const time = useRef(count);
  const timerId = useRef(null);
  const [shotclockSec, setshotclockSec] = useState(24);
  const shotclockCount = 24;
  const shotclockTime = useRef(shotclockCount);
  const shotclockTimerId = useRef(null);
  const [showScores, setShowScores] = useState([]);
  const nextId = useRef(1);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const onInsert = useCallback(
    (_text, _home, _away) => {
      const showScore = {
        id: nextId.current,
        text: _text,
      };
      setShowScores(showScores.concat(showScore));
      nextId.current += 1;
      setHomeScore(_home);
      setAwayScore(_away);
    },
    [showScores],
  );

  const onSwitch = () => {
    timerOn === 0 ? setTimerOn(1) : setTimerOn(0);
    gameTimer();
    shotclockTimer();
  };

  const gameTimer = () => {
    if (timerOn === 1) {
      timerId.current = setInterval(() => {
        setMin(
          parseInt(time.current / 60) < 10
            ? '0' + parseInt(time.current / 60)
            : parseInt(time.current / 60),
        );
        setSec(
          time.current % 60 < 10
            ? '0' + (time.current % 60)
            : time.current % 60,
        );
        time.current -= 1;
      }, 1000);
      return () => clearInterval(timerId.current);
    } else {
      setMin(min);
      setSec(sec);
      clearInterval(timerId.current);
    }
  };

  const shotclockTimer = () => {
    if (timerOn === 1) {
      shotclockTimerId.current = setInterval(() => {
        setshotclockSec(
          shotclockTime.current % 60 < 10
            ? '0' + (shotclockTime.current % 60)
            : shotclockTime.current % 60,
        );
        shotclockTime.current -= 1;
      }, 1000);
      return () => clearInterval(shotclockTimerId.current);
    } else {
      setshotclockSec(shotclockSec);
      clearInterval(shotclockTimerId.current);
    }
  };

  useEffect(() => {
    if (time.current < 0) {
      console.log('타임아웃');
      clearInterval(timerId.current);
      clearInterval(shotclockTimerId.current);
      setTimerOn(1);
      setMin(
        parseInt(count / 60) < 10
          ? '0' + parseInt(count / 60)
          : parseInt(count / 60),
      );
      setSec(count % 60 < 10 ? '0' + (count % 60) : count % 60);
      time.current = count;
    }

    if (shotclockTime.current < 0) {
      console.log('샷클락아웃');
      setshotclockSec(
        shotclockCount % 60 < 10
          ? '0' + (shotclockCount % 60)
          : shotclockCount % 60,
      );
      shotclockTime.current = shotclockCount;
    }
  }, [sec]);

  const setShotclock14 = () => {
    shotclockTime.current = 14;
    timerOn === 0 ? setTimerOn(1) : setTimerOn(0);
    setMin(min);
    setSec(sec);
    setshotclockSec(14);
    clearInterval(shotclockTimerId.current, timerId.currnet);
    gameTimer();
    shotclockTimer();
  };

  const setShotclock24 = () => {
    shotclockTime.current = 24;
    timerOn === 0 ? setTimerOn(1) : setTimerOn(0);
    setMin(min);
    setSec(sec);
    setshotclockSec(24);
    clearInterval(shotclockTimerId.current, timerId.currnet);
    gameTimer();
    shotclockTimer();
  };

  return (
    <div>
      <button
        onClick={() => {
          history.push({
            pathname: '/Calendar',
            state: { homeScore: homeScore, awayScore: awayScore },
          });
        }}
      >
        결과 저장하기
      </button>
      <ScoreboardTemplate>
        <GameTimer min={min} sec={sec} />
        <Score onInsert={onInsert} />
        <ShotClockTimer shotclockSec={shotclockSec} />
        <Foul />
        <ControlButton
          onSwitch={onSwitch}
          setShotclock14={setShotclock14}
          setShotclock24={setShotclock24}
        />
        <ScoreList showScores={showScores} />
        <div>space</div>
      </ScoreboardTemplate>
    </div>
  );
};

export default Scoreboard;
