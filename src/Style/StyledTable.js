import styled from 'styled-components';

export const StyledListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Times New Roman", sans-serif;
  margin-top: 7%;

  table {
    width: 80%;
    border-collapse: collapse;
    border-radius: 10px;
    text-align: left;
    margin-bottom: 5%;
    margin-top: 4%;
  }

  h1 {
    background-color: #f7f7f7;
    padding: 10px 5px 5px 10px;
    box-shadow: 5px 4px #c7bca1;
    border-radius: 10px;
    text-align: center;
    color: black;
    font-size: 30pt;
    font-style: italic;
    width: 80%;
  }

  table td,
  table th {
    padding: 10px 10px 10px 10px;
    border-radius: 2px;
  }

  table tr {
    background-color: #f7f7f7;
    font-size: 14pt;
    @media (min-width: 360px) {
      margin-left: 280px;
      font-size: 12pt;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 14pt;
  }
  a:hover {
    color: white;
  }

  table tr:hover {
    background-color: #fcf9be;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #e8f3d6;
    color: black;
    font-size: 14pt;
  }

  div > a {
    underline: none;
    color: black;
    font-size: 20pt;
    text-decoration: none;
    background-color: transparent;
    border-radius: 20px;
    padding: 10px 10px 10px 10px;
    border: 3px solid rgb(36, 206, 200);
    margin-bottom: 10px;
  }

  a:hover {
    transition: all 0.6s ease;
    -webkit-transition: all 0.7s ease;
    background-color: rgb(36, 206, 200);
    color: white;
  }
  @media (min-width: 360px) {
    margin-top: 100px;
    margin-right: 100px;
    margin-left: 100px;
    font-size: 12pt;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;









