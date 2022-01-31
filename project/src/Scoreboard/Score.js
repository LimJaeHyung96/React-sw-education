import React, { useState } from 'react';
import './Score.scss';

const Score = ({ onInsert }) => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTwoContent = [
    '홈 팀이 깔끔한 2점을 성공시킵니다.',
    '홈 팀의 2점 득점',
    '화려한 플레이! 홈 팀이 2점을 가져갑니다.',
    '멋진 돌파! 홈 팀의 2점!',
    '좋은 팀플레이로 홈 팀이 2점을 득점합니다.',
    '홈 팀 점프슛! 깔끔한 2점',
    '홈 팀의 선수 빙글 돌아서 2점을 성공시킵니다',
  ];
  const homeThreeContent = [
    '홈 팀이 깔끔한 3점을 성공시킵니다.',
    '홈 팀의 3점 득점',
    '화려한 플레이! 홈 팀이 3점을 가져갑니다',
    '오픈 찬스! 홈 팀의 3점!',
    '홈 팀의 멋진 플레이 3점을 얻어냅니다.',
    '홈 관중들을 열광시키는 멋진 3점을 만들어냅니다.',
    '홈 팀의 3점이 깔끔하게 그물을 가릅니다.',
  ];
  const awayTwoContent = [
    '원정 팀이 깔끔한 2점을 성공시킵니다.',
    '원정 팀의 2점 득점',
    '화려한 플레이! 원정 팀이 2점을 가져갑니다',
    '상대를 꼼짝 못하게하는 원정 팀의 2점 득점!',
    '원정 팀 2점을 손쉽게 성공시킵니다.',
    '2점을 얻어내는 원정 팀의 좋은 플레이',
    '원정 팀 멋진 2점을 성공시킵니다.',
  ];
  const awayThreeContent = [
    '원정 팀이 깔끔한 3점을 성공시킵니다.',
    '원정 팀의 3점 득점',
    '화려한 플레이! 원정 팀이 3점을 가져갑니다',
    '홈 코드를 도서관으로 만드는 멋진 3점!',
    '원정 팀의 3점이 림을 통과합니다.',
    '응원 와준 원정 팬들을 위한 3점을 성공시킵니다.',
    '원정 팀 좋은 플레이입니다. 3점을 얻습니다.',
  ];
  const homeMinus = (e) => {
    e.preventDefault();
    setHomeScore(homeScore - 1);
  };
  const homeOne = (e) => {
    e.preventDefault();
    setHomeScore(homeScore + 1);
    onInsert('홈 팀이 자유투를 성공시킵니다.', homeScore, awayScore);
  };
  const homeTwo = (e) => {
    e.preventDefault();
    setHomeScore(homeScore + 2);
    onInsert(
      homeTwoContent[Math.floor(Math.random() * 7)],
      homeScore,
      awayScore,
    );
  };
  const homeThree = (e) => {
    e.preventDefault();
    setHomeScore(homeScore + 3);
    onInsert(
      homeThreeContent[Math.floor(Math.random() * 7)],
      homeScore,
      awayScore,
    );
  };
  const awayMinus = (e) => {
    e.preventDefault();
    setAwayScore(awayScore - 1);
  };
  const awayOne = (e) => {
    e.preventDefault();
    setAwayScore(awayScore + 1);
    onInsert('원정 팀이 자유투를 성공시킵니다.', homeScore, awayScore);
  };
  const awayTwo = (e) => {
    e.preventDefault();
    setAwayScore(awayScore + 2);
    onInsert(
      awayTwoContent[Math.floor(Math.random() * 7)],
      homeScore,
      awayScore,
    );
  };
  const awayThree = (e) => {
    e.preventDefault();
    setAwayScore(awayScore + 3);
    onInsert(
      awayThreeContent[Math.floor(Math.random() * 7)],
      homeScore,
      awayScore,
    );
  };
  return (
    <div className="Score">
      <table className="ScoreTable">
        <th className="home">HOME</th>
        <th className="space"></th>
        <th className="away">AWAY</th>
        <tr>
          <td className="HomeScore">{homeScore}</td>
          <td className="ScoreSpace">:</td>
          <td className="AwayScore">{awayScore}</td>
        </tr>
      </table>
      <table className="ScoreButton">
        <tr>
          <td className="h_1">
            <button type="submit" onClick={homeMinus}>
              -1points
            </button>
          </td>
          <td className="h1">
            <button type="submit" onClick={homeOne}>
              1points
            </button>
          </td>
          <td className="h2">
            <button type="submit" onClick={homeTwo}>
              2points
            </button>
          </td>
          <td className="h3">
            <button type="submit" onClick={homeThree}>
              3points
            </button>
          </td>
          <td className="ButtonSpace"></td>
          <td className="a_1">
            <button type="submit" onClick={awayMinus}>
              -1points
            </button>
          </td>
          <td className="a1">
            <button type="submit" onClick={awayOne}>
              1points
            </button>
          </td>
          <td className="a2">
            <button type="submit" onClick={awayTwo}>
              2points
            </button>
          </td>
          <td className="a3">
            <button type="submit" onClick={awayThree}>
              3points
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Score;
