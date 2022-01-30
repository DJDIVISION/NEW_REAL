import styled from "styled-components";

export const CardButton = styled.button`
  padding: 15px 2.4em;
  outline: none;
  border: none;
  margin-bottom: 25px;
  border-radius: 28px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  background-color: black;
  box-shadow: 0 2px 15px 1px whitesmoke;  
  background-color: linear-gradient(
    80deg,
    rgb(182, 199, 178) 0%,
    rgba(141, 167, 134, 1) 100%
  );
  cursor: pointer;
  transition: all 320ms ease-in-out;
  &:hover {
    background-color: whitesmoke;
    color: black;
    box-shadow: 0 2px 15px 1px black; 
  }
`;