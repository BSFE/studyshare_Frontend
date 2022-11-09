import { css } from "@emotion/react";

export const SignUpFormWrap = css`
  padding: 2rem; 
  
  h2 {
    margin: 2rem 0px;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const SignUpFormHeader = css`
  display: flex;
  justify-content: space-between;
  align-item: center;
`

export const SignUpForm = css`
  text-align: center;
  place-items: center;
  min-height: 100vh;
  position: relative;
  padding: 0.6em 1.5625em;
`;

export const FormItem = css`
  display: flex;
  border-radius: 4px;
  margin-bottom: 2rem;
`
export const InputStyle = css`
  border: 1px solid #2656ff;
  -moz-border-radius-bottomleft: 4px;
  -moz-border-radius-topleft: 4px;
  color: #a6a6a6;
  font-size: 1.3rem;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
`;