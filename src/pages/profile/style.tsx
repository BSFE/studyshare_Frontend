import { css } from "@emotion/react";

export const ProfileImg = css`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: #e4e4e4;
  position: relative;
  padding: 1.25em 0;
  margin-top: 2em;
  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const ProfileWrap = css`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const InputWrap = css`
  margin-top: 7em;
  div {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    margin: 0 0 20px 0;
    align-items: center;
    h5 {
      font-size: 1.2rem;
      width:100%;
      text-align: left;
    }
    &.separation {
      display: flex;
      flex-direction: column;
      label {
        margin-top: 0.5em;
      }
      textarea {
        margin-top: 0.7em;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        resize: none;
        padding: 0.7em;
        box-sizing: border-box;
        font-size: 1.2rem;
        height: 200px;
      }
    }
  }
  label {
    font-size: 1.2rem;
    width: 100%;
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 1.2rem;
    height: 1.875em;
    padding: 1em;
    box-shadow: none;
    text-shadow: none;
  }

  .submitButton {
    background-color: #2656ff;
    margin-top: 2em;
    font-size: 1.2rem;
    width: 100%;
    grid-template-columns: auto;
    border-radius: 5px;
    button {
      width: 100%;
      color:#fff;
      padding: 1rem;
    }
  }
`;

export const ProfileWrapPadding = css`
  padding: 20px;
`;