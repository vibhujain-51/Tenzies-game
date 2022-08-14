import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import GameDie from "../../../components/tenzies-game-components/die";
import "./style.css";

const TenziesGameContentsContainer = () => {
  const [tenzies, setTenzies] = useState(false);
  const generateNewDie = () => {
    let dieProperties = {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
    return dieProperties;
  };

  const generateRandomNumbers = () => {
    let diceNumber = [];
    for (let i = 0; i < 10; i++) {
      diceNumber.push(generateNewDie());
    }
    // console.log(diceNumber);
    return diceNumber;
  };
  const [diceNumbers, setDiceNumbers] = useState(generateRandomNumbers());

  const handleRollDice = () => {
    setDiceNumbers((prevState) => {
      return prevState.map((item) => {
        return item.isHeld ? item : generateNewDie();
      });
    });
  };

  const handleDieClick = (id) => {
    setDiceNumbers((prevState) => {
      return prevState.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      });
    });
  };

  useEffect(() => {
    // let temp = diceNumbers[0].value;
    // for (let i = 0; i < 10; i++) {
    //   if (diceNumbers[i].isHeld && diceNumbers[i].value === temp) {
    //     count++;
    //   }
    // }
    // if (count === 10) {
    //   setTenzies(true);
    // }

    // this can be other way of giving winning condition
    let allHeld = diceNumbers.every((item) => {
      return item.isHeld;
    });
    let temp = diceNumbers[0].value;
    let allSameNumber = diceNumbers.every((item) => {
      return item.value === temp;
    });

    if (allHeld && allSameNumber) {
      setTenzies(true);
    }
  }, [diceNumbers]);

  const handlePlayAgain = () => {
    setTenzies(false);
    setDiceNumbers(generateRandomNumbers());
  };

  return (
    <div className="game-content-container">
      {tenzies ? <Confetti width="550px" height="400px" /> : <></>}
      <div className="game-intro-text-wrapper">
        <div className="game-name-wrapper">Tenzies Game</div>

        <div className="info-text-wrapper">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </div>
      </div>
      <div className="dice-container">
        {diceNumbers.map((item, index) => {
          return (
            <GameDie
              key={index}
              id={item.id}
              value={item.value}
              isHeld={item.isHeld}
              handleDieClick={handleDieClick}
            />
          );
        })}
      </div>
      <div className="die-roll-btn-container">
        <button
          className="roll-die-btn"
          onClick={!tenzies ? handleRollDice : handlePlayAgain}
        >
          {tenzies ? "Play Again" : "Roll"}
        </button>
      </div>
    </div>
  );
};

export default TenziesGameContentsContainer;
