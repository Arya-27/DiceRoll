 import styled from "styled-components";
 
 export const Button = styled.button`
  color: white;
  padding: 10px 45px;
  background: blueviolet;
  border-radius: 10px;
  min-width: 20px;
  border: none;
  font-size: 51px;
  border: 3px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
    border: 3px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
 border:1px solid black;
 background-color: white;
 color: black;
&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
  `;