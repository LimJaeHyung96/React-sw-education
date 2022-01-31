import React, { useState } from "react";
import "./Foul.scss";

const Foul = () => {
  const [homeFoul, setHomeFoul] = useState(0);
  const [awayFoul, setAwayFoul] = useState(0);
  const [homeBonus, setHomeBonus] = useState("");
  const [awayBonus, setAwayBonus] = useState("");
  const homeFoulPlus = (e) => {
    e.preventDefault();
    homeFoul <= 4 && setHomeFoul(homeFoul + 1);
    homeFoul === 4 && setHomeBonus("BONUS");
  };
  const awayFoulPlus = (e) => {
    e.preventDefault();
    awayFoul <= 4 && setAwayFoul(awayFoul + 1);
    awayFoul === 4 && setAwayBonus("BONUS");
  };
  return (
    <div className="Foul">
      <table className="FoulTable">
        <th className="HomeBonus">{homeBonus}</th>
        <th className="SpaceBonus">Space</th>
        <th className="AwayBonus">{awayBonus}</th>
        <tr className="FoulCount">
          <td className="HomeFoul">{homeFoul}</td>
          <td className="SpaceFoul"></td>
          <td className="AwayFoul">{awayFoul}</td>
        </tr>
        <tr className="ButtonTable">
          <td className="HomeButton">
            <button onClick={homeFoulPlus}>FOUL</button>
          </td>
          <td className="SpaceButton"></td>
          <td className="AwayButton">
            <button onClick={awayFoulPlus}>FOUL</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Foul;
