import React from "react";
import Link from "next/link";
import { HeaderLayout, HeaderWrap, Logo, Buttons } from "./style";

const Header: React.FC = () => {
  return (
    <header css={HeaderLayout}>
      <div css={HeaderWrap}>
        <Link href="/feed">
          <a>
            <h1 css={Logo}>
              <img src="/images/header/logo_header.png" alt="로고" />
            </h1>
          </a>
        </Link>

        <div css={Buttons}>
          <Link href="/alarm">
            <button type="button">
              <img src="/images/header/btn_alarm.svg" alt="알림" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
