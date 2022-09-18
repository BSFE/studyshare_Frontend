import React from "react";
import { Card, Hello, Signup } from "./style";

interface Props {
  handleLogin: () => void;
}
const NonMember = ({ handleLogin }: Props) => {
  return (
    <section css={Card}>
      <div css={Hello}>
        안녕하세요.
        <br />
        <strong className="highlight">로그인 하여</strong> 스터디를
        <br />
        계획하고 공유해보세요!
      </div>

      <div css={Signup}>
        <button type="button" onClick={handleLogin}>
          <img
            src="https://asp.pointpark.com/PlusPointMember/resources/images/mobileHomePage/btn_kakao.png"
            alt="카카오로 로그인하기"
          />
        </button>
      </div>
    </section>
  );
};

export default NonMember;
