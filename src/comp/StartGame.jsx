import React from "react";
import "./StartGame.css";


const StartGame = ({toggle}) => {
  return (
    <div className="container">
      <div>
        <img src="/dice-game/images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <div>
        <h1>DICE GAME</h1>
        </div>
        <div className="end">
        <button
        onClick={toggle}>Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
