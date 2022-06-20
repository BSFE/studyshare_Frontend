import { css } from "@emotion/react";

export const TodoListStyle = css`
  width: 95%;
  height: 24em;
  border-radius: 10px;
  margin-bottom: 2.3em;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://studyshaer.vercel.app/images/sky.jpg");
  .todolistInfo {
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 0.375em 0.875em;
    &-text {
      padding: 2rem 0 1rem;
      h4 {
        font-weight: 700;
        font-size: 1.4rem;
      }
      p {
        padding: 0.3rem 0 0 0;
        font-size: 1.2rem;
      }
    }
  }
  p {
    font-size: 0.8em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 30vw;
  }
`;