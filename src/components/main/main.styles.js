import styled from "styled-components";

export const MainContainer = styled.div`
  width: 30vw;
  margin: auto;

  .accordionContainer {
    width: 30vw;
    border: 1px solid lightgray;
    border-radius: 8px;
    margin: 10px 0 0 0;
  }

  .nameTag {
    display: flex;
  }

  img {
    border-radius: 40px;
    border: 1px solid lightgray;
  }
  h3 {
    margin: 20px 0 0 30px;
  }

  .subHead {
    display: flex;
    justify-content: left;

    div {
      flex: 1;
    }
  }

  label {
    color: gray;
  }

  .descriptionSec {
    margin: 20px 0 0 0;
  }

  .searchInputs {
    display: flex;
    margin: 20px 0 20px 0;
  }

  .search input {
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    font-size: 18px;
    padding: 10px;
    height: 30px;
    width: 30vw;
  }

  .searchIcon {
    background-color: transparent;
    display: grid;
    cursor: pointer;
    margin: 0px 0 0 -40px;
    place-items: center;
  }

  input:focus {
    outline: none;
  }
  .searchIcon svg {
    font-size: 35px;
  }

  #clearBtn {
    cursor: pointer;
  }
`;
