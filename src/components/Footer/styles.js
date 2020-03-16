import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 22px;
`;

export const NewsLetter = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #626161;

  strong {
    margin-left: 13px;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
  }

  form {
    margin-left: 21px;
    display: flex;

    input {
      height: 44px;
      width: 482px;
      padding: 14px;
      font-size: 12px;
      border: 1px solid #e0e0e0;
    }

    button {
      width: 44px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #626161;
      border: none;
      color: #fff;
    }
  }

  ul {
    margin-left: 50px;

    svg {
      margin-left: 31px;
    }
  }
`;

export const Main = styled.div`
  margin-top: 22px;
  padding: 41px 0 16px 0;
  display: flex;
  justify-content: space-evenly;
  background: #fab49b;
  font-size: 12px;
`;

export const HelpCenter = styled.nav`
  display: flex;
  flex-direction: column;

  span {
    font-family: Georgia, serif;
    text-transform: uppercase;
  }

  a {
    margin-top: 20px;
  }
`;
export const Institutional = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: Georgia, serif;
    text-transform: uppercase;
  }

  a {
    margin-top: 20px;
  }
`;
export const Attendence = styled.div`
  display: flex;
  flex-direction: column;

  span:first-of-type {
    font-family: Georgia, serif;
    text-transform: uppercase;
  }

  div {
    margin-top: 12px;
    display: flex;

    svg {
      margin-right: 12px;
    }

    div {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      span {
        margin-bottom: 5px;
      }
    }
  }
`;
export const Certificates = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: Georgia, serif;
    text-transform: uppercase;
  }

  img {
    margin-top: 12px;
    display: block;
  }
`;

export const PaymentMethods = styled.div`
  padding: 14px 0;
  background: #fbc7b4;

  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1260px;

    span {
      margin-right: 17px;
      font-family: Georgia, serif;
      text-transform: uppercase;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      margin-left: 3px;
      height: 30px;
      width: 49px;
      background: #fff;
    }

    img {
      display: block;
    }
  }
`;

export const Signature = styled.div`
  padding: 26px 0 30px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1260px;
    font-size: 12px;

    div {
      margin: 0;
      display: block;

      p {
        display: block;
      }
    }
  }
`;
