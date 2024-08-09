import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Dice from "./Dice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(0);
  };

  const resetScore = () => {
    setScore(0);
  }
  return (
    <MainConatiner>
      <div className="top-section">
        <TotalScore score={score} />

        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
        />
      </div>
      <Dice rollDice={rollDice} currentDice={currentDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/> }
    </MainConatiner>
  );
};

export default GamePlay;

const MainConatiner = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    /* flex-direction: column; */
    border: 1px;
    border-radius: 5px;
    
  }
`;
