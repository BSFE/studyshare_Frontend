import React from "react";
import { ChatTextEnter } from "./style";

const ChatEnter = () => {
  return (
    <>
      <div css={ChatTextEnter}>
        <input type="text" />
        <button type="submit">보내기</button>
      </div>
    </>
  );
};

export default ChatEnter;