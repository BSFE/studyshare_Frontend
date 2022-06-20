import React from "react";
import { Avatar } from "antd";
import { ChatBubble } from "./style";
import { UserOutlined } from "@ant-design/icons";

const SpeechBubble = () => {
  return (
    <>
      <div css={ChatBubble}>
        <div className="wrap">
          <div className="profile">
            <Avatar size={40} icon={<UserOutlined />} />
          </div>

          <div className="textRigth">
            <p className="text">안녕 ㅎㅇㅎㅇ</p>
            <p>PM 3:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeechBubble;