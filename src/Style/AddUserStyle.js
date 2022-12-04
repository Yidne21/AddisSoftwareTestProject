import styled from "styled-components";
import { width, fontSize, margin, padding, layout } from "styled-system";

export const AddEmployee = styled.div`
  ${layout}
  ${width}
  ${margin}
  ${fontSize}
  ${padding}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Times New Roman", sans-serif;

  input,
  select {
    width: 100%;
    margin-left: 50%;
    margin-right: 50%;
    padding: 10px 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: medium;
  }

  span {
    color: red;
    font-size: 14pt;
  }
  h1 {
    margin-top: 120px;
    background-color: #f7f7f7;
    padding: 10px 5px 5px 10px;
    box-shadow: 5px 4px #c7bca1;
    border-radius: 10px;
    text-align: center;
    color: black;
    font-size: 30pt;
    font-style: italic;
    width: 34%;
  }

  form {
    padding: 30px 30px 30px 30px;
    background-color: #f7f7f7;
    font-size: 18pt;
    border-radius: 10px;
    width: 30%;
    height: 520px;
  }

  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }

  input {
    border: 1px solid black;
    padding: 14px 20px;
    color: black;
    border-radius: 4px;
    cursor: pointer;
  }

  select {
    background-color: white;
    border: 1px solid black;
    font-size: 18pt;
  }
`;
