import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Start = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1> Dice Game </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  /* background-color: aliceblue; */

  .content {
    h1 {
      font-size: 200px;
      font-weight: 500px;
      white-space: nowrap;
    }
  }
`;

