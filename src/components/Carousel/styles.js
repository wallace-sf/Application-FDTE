import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  max-width: 100%;
`;

export const ItemImage = styled.div`
  font-family: 'Georgia Pro', serif;
  color: #676767;
  font-size: 14px;

  &:hover {
    ${props =>
      props.isSecondary &&
      css`
        padding: 21px;
        border: 1px solid #e7e7e7;
      `}
  }

  ${props =>
    props.isSecondary &&
    css`
      padding: 21px;

      p {
        margin: 0 auto;
        margin-top: 20px;
        max-width: 292px;
        text-align: center;

        strong {
          margin-left: 15px;
        }
      }

      p:last-of-type {
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
      }

      button {
        display: block;
        margin: 0 auto;
        margin-top: 32px;
        padding: 10px 50px;
        color: #fff;
        text-transform: uppercase;
        background: #fab49b;
        border: none;
      }
    `}

  img {
    width: 100%;
  }
`;

export const DiscountSeal = styled.div`
  position: relative;

  strong {
    z-index: 2;
    position: absolute;
    right: 21px;
    padding: 10px;
    color: #fab49b;
    background: rgba(0, 0, 0, 0.6);
  }

  div {
    position: relative;

    button {
      display: none;
      position: absolute;
      z-index: 1;
      padding: 10px 75px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7);
      font-size: 16px;
      color: #fab49b;
      text-transform: uppercase;

      svg {
        vertical-align: middle;
      }

      span {
        margin-left: 10px;
        vertical-align: middle;
      }
    }

    img {
      display: block;
    }

    &:hover {
      div {
        display: block;
      }

      button {
        display: block;
      }
    }

    div {
      display: none;
      content: '';
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      height: 100%;
      width: 100%;
    }
  }
`;
