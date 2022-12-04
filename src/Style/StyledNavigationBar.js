import styled from 'styled-components';
export const StyledNavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100px;
  background-color: #e8f3d6;
  font-family: "Times New Roman", sans-serif;

  p {
    margin-left: auto;
    margin: 0px;
    color: black;
    font-size: 20pt;
    background-color: transparent;
    @media (min-width: 957px) {
      font-size: 25pt;
    }

    @media (min-width: 1672px) {
      font-size: 30pt;
    }
  }
  a {
    underline: none;
    color: black;
    font-size: 20pt;
    text-decoration: none;
    background-color: transparent;
    margin-right: 7px;
    border-radius: 20px;
    padding: 3px 3px 3px 3px;
    border: 2px solid rgb(36, 206, 200);
  }

  a:hover {
    transition: all 0.6s ease;
    -webkit-transition: all 0.7s ease;
    background-color: rgb(36, 206, 200);
    color: white;
  }
`;