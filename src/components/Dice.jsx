import styled from "styled-components";

const Dice = ({
  rollDice,
  currentDice,
}) => {
  

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p className="instruction">Click to roll the Dice.</p>
    </DiceContainer>
  );
};
export default Dice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 90px;
  flex-direction: column;
  .dice{
    cursor: pointer;
  }
  .instruction{
    font-weight: 600;
    font-size: 50px;
    margin-bottom: 70px;
  }
`;
