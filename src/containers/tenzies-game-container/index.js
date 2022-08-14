import React from "react";
import "./style.css";
import TenziesGameContentsContainer from "./tenzies-game-contents-container";

const TenziesGame = () => {
  return (
    <div className="primary-game-container">
      <div className="secondary-game-container">
        <TenziesGameContentsContainer />
      </div>
    </div>
  );
};

export default TenziesGame;
