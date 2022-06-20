import { css } from "@emotion/react";

export const ChatTextEnter = css`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 11%;
  left: 0;
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  padding: 1rem;
  input {
    width: 80%;
    border: 1px solid #cecbcb;
    padding: 1.4rem 0.7rem;
    border-radius: 10px;
  }
  button {
    background: #2656ff;
    color: #fff;
    width: 18%;
    border-radius: 10px;
    font-size: 1.5rem;
  }
`;