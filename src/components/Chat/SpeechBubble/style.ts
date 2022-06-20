import { css } from "@emotion/react";

export const ChatBubble = css`
  width: 90%;
  margin: 2rem auto;
  .wrap {
    border-radius: 10px;
    background-color: #f0f0f099;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    .textRigth {
      margin-left: 1rem;
      font-size: 1.2rem;
      line-height: 1.2;
      font-weight: 600;
    }
  }
`;