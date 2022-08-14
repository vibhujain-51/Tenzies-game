import React, { useEffect, useState } from "react";
import "./style.css";

const GameDie = (_props) => {
  const { id, value, isHeld, handleDieClick } = _props;
  const [classname, setClassname] = useState();

  const generateClassname = () => {
    if (value === 1) {
      setClassname("one");
    }
    if (value === 2) {
      setClassname("two");
    }
    if (value === 3) {
      setClassname("three");
    }
    if (value === 4) {
      setClassname("four");
    }
    if (value === 5) {
      setClassname("five");
    }
    if (value === 6) {
      setClassname("six");
    }
  };

  useEffect(() => {
    generateClassname();
  }, [value]);

  return (
    <div
      className={isHeld ? "die-wrapper-held" : "die-wrapper"}
      onClick={() => handleDieClick(id)}
    >
      <ul className={`number-${classname}-wrapper`}>
        {Array.from(Array(value).keys()).map((item) => {
          return <li></li>;
        })}
      </ul>
    </div>
  );
};

export default GameDie;
