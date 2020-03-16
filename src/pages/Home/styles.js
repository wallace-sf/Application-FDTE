import styled, { css } from 'styled-components';

export const DeskPromoBanner = styled.div`
  margin: 10px 0;
  height: 88px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f8f8;

  span {
    vertical-align: middle;
    margin-left: 10px;
    font-family: 'Georgia Pro Cond', serif;
    font-size: 14px;
    color: #636363;
    text-transform: uppercase;
  }

  svg,
  img {
    color: #676767;
    margin-left: 23px;
    vertical-align: middle;
  }
`;

export const DeskSecondary = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;

  ${props =>
    props.numberOfCards &&
    css`
      margin: 0 auto;
      margin-bottom: 88px;
      max-width: 1260px;
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 10px;
    `}

  div {
    min-height: 100%;
    position: relative;

    ${props =>
      props.grow &&
      css`
        grid-row-end: span 2;
      `}

    img {
      display: block;
      width: 100%;
    }

    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      padding: 14px 23px;
      transform: translateX(-50%);
      background: #f2f2f2;
      font-size: 20px;
      text-transform: uppercase;
    }
  }
`;

export const DeskBuyLook = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;

  div {
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      padding: 14px 23px;
      transform: translateX(-50%);
      background: #f2f2f2;
      font-size: 20px;
      text-transform: uppercase;
    }
  }
`;

export const DeskRings = styled.div`
  margin: 0 auto;
  margin-bottom: 47px;
  max-width: 1260px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    border: 1px solid #dfdfdf;

    img {
      width: 70%;
      display: block;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: none;

      span {
        margin-bottom: 14px;
        font-family: Georgia, sans-serif;
        font-size: 24px;
        text-transform: uppercase;
        color: #636363;
      }

      button {
        padding: 4px 8px;
        background: none;
        border: 1px solid #efefef;
        text-transform: uppercase;
      }
    }
  }
`;

export const DeskLaunch = styled.div`
  margin: 0 auto;
  margin-bottom: 36px;
  max-width: 1260px;
  display: flex;
  flex-direction: column;

  header {
    position: relative;
    margin-bottom: 20px;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 300;
      font-size: 26px;
      text-transform: uppercase;
    }

    img {
      display: block;
      width: 100%;
    }
  }
`;

export const CarouselContainer = styled.div`
  margin-left: 66px;
  max-width: 1128px;
`;

export const Divider = styled.div`
  border: 1px solid #d3d3d3;
`;

export const DeskInstagram = styled.nav`
  margin: 0 auto;
  margin-top: 63px;
  margin-bottom: 90px;
  max-width: 1260px;
  text-align: center;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */

  button {
    margin: 0 auto;
    display: block;
    margin-bottom: 12px;
    background: none;
    border: none;
  }

  span {
    display: inline-block;
    margin-bottom: 63px;
    padding-bottom: 12px;
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 3px;
    color: #676767;
    border-bottom: 2px solid #b3b3b3;
  }
`;
