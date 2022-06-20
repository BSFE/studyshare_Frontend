import { css } from "@emotion/react";

export const ProfileInfoStyle = css`
  display: grid;
  padding: 1.5em 1.5625em 2.8em;
  border-bottom: 1px solid rgb(219, 219, 219);
  grid-template-columns: 1fr 10fr 1fr;
  .myProfilePhoto {
    width: 8em;
    height: 8em;
    border-radius: 50%;
    background-color: rgb(228, 228, 228);
    position: relative;
    margin-right: 1.1875em;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .name {
    font-weight: 700;
  }
  span {
    font-size: 1.4em;
    color: rgb(0, 0, 0);
    margin-right: 0.5em;
  }
  h2 {
    font-size: 1.4em;
    display: inline-block;
    margin-right: 0.5em;
    margin-top: 0.3em;
  }
  .myself {
    color: rgb(38, 86, 255);
    margin: 1em 0px 0;
    font-size: 1.4em;
  }
  .birth {
    display: inline-block;
    font-size: 1.4em;
    color: rgb(153, 153, 153);
    margin: 0.6rem 0;
  }
  button {
    width: 8em;
    height: 2.7em;
    display: flex;
    img {
      width: 100%;
    }
  }
`;
