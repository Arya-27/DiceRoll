import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play dice game</h1>
      <div className="text">
        <h2>1. Select any number</h2>
        <h2>2. Click on dice image</h2>
        <h2>
          3. After clicking on the dice, if the selected number is equal to the dice number, you
          will get the same points as the dice.
        </h2>
        <h2>4. If you guess wrong, 2 points will be deducted.</h2>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 1000px;  /* Increased width */
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 40px;  /* Increased padding */
  margin-top: 60px;  /* Increased margin-top */
  border-radius: 10px;

  h1 {
    font-size: 28px;  /* Increased font size */
  }

  .text {
    margin-top: 32px;  /* Increased margin-top */
    h2 {
      margin-bottom: 16px;  /* Added margin-bottom for spacing between paragraphs */
      line-height: 1.6;  /* Improved readability with line-height */
    }
  }
`;
