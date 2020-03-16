import styled from 'styled-components';

export const Container = styled.div`
  height: 189px;
  width: 100%;
  border-bottom: 2px solid #fab8a1;
`;

export const UpperHeader = styled.div`
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #fab49b;

  ul {
    margin-right: 17.1%;
    display: flex;

    li:first-of-type {
      margin-right: 30px;
    }

    button {
      background: none;
      border: none;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
`;

export const MainHeader = styled.div`
  margin: 0 auto;
  padding: 36px 0 15px;
  height: calc(100% - 25px);
  max-width: 1260px;
`;

export const Content = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;

    li {
      button {
        border: none;
        background: none;
      }

      svg {
        vertical-align: middle;
      }

      span {
        margin-left: 10px;
        vertical-align: middle;
        font-size: 12px;
      }

      & + li {
        margin-left: 43px;
      }
    }
  }
`;

export const InputControl = styled.form`
  display: inline-block;
  position: relative;

  input {
    padding: 10px;
    padding-right: 40px;
    padding-top: 1px;
    height: 32px;
    min-width: 231px;
    font-size: 12px;
    background: none;
    border: none;
    border-bottom: 1px solid #d2d2d2;
  }

  button {
    right: 10px;
    position: absolute;
    border: none;
    background: none;
  }
`;

export const LowerNav = styled.nav`
  margin-top: 28px;
  display: flex;
  justify-content: center;

  a {
    font-family: Georgia, serif;
    text-transform: uppercase;
    font-size: 15px;
    color: #666;
  }

  a:last-of-type {
    border-top: 1px solid #fab8a1;
    border-bottom: 1px solid #fab8a1;
    color: #fab49b;
  }

  a + a {
    margin-left: 45px;
  }
`;
