import React from "react";
import { Card, Hello, Signup } from "./style";
import Link from "next/link";
import { KAKAO_AUTH_URL } from "./OAuth";
import Image from "next/image";

const NonMember = () => {
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
        <Link href={KAKAO_AUTH_URL}>
          <a>
            <Image
              src="https://asp.pointpark.com/PlusPointMember/resources/images/mobileHomePage/btn_kakao.png"
              alt="카카오로 로그인하기"
            />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default NonMember;