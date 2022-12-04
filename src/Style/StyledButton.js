import styled, {css} from "styled-components";

export const StyledButton = styled.span`
  button {
    border: none;
    margin-left: 5px;
    font-size: large;
    border-radius: 10px;
    background-color: #e8f3d6;
    padding: 15px 15px 15px 15px;
    :hover {
      background-color: rgb(36, 206, 200);
      color: white;
      ${(props) =>
        props.danger &&
        css`
          background-color: #dc3535;
        `}
    }
  }
`;