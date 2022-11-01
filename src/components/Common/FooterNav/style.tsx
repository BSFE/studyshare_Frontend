import { css } from "@emotion/react";

export const FooterWrap = css`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
  li {
    text-align: center;
    display: inline-block;
    &.active {
      path {
        fill: #2656ff;
      }
      p {
        color: #2656ff;
      }
    }
    p {
      text-align: center;
      font-size: 1.3rem;
      color: #999999;
      font-weight: 500;
      line-height: 1.5rem;
      margin-top: 0.5em;
    }
    .chat {
      font-size: 3rem;
      color: #999999;
    }
  }
`;

export const Footer = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: -1px;
  z-index: 100;
  background: #fff;
  padding: 1.2em 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.04);
`;