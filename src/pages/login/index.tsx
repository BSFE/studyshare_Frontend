import {
    loginForm,
    Logo,
    Input,
    Button,
    LoginLink,
    CloseButton,
    loginWrap,
    Signup
  } from "./styles";
  import Link from "next/link";
  import { KAKAO_AUTH_URL } from "../../utils/OAuth";
  
  const Login = () => {

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };


    return (
      <>
        <main css={loginWrap}>
          <form css={loginForm}>
            <h1 css={Logo}>
              <img src="/images/common/logo.svg" alt="스터디쉐어 로고" />
            </h1>
  
            <input
              css={Input}
              placeholder="아이디 입력"
              name="id"
              type="id"
              className="id"
            />
  
            <input
              css={Input}
              placeholder="비밀번호 입력"
              name="password"
              type="password"
            />
  
            <button type="submit" css={Button}>
              로그인
            </button>
  
            <ul css={LoginLink}>
              <li>
                <Link href="/">아이디 찾기</Link>
              </li>
              <li className="center">
                <Link href="/">비밀번호 찾기</Link>
              </li>
              <li>
                <Link href="/signUp">회원가입</Link>
              </li>
            </ul>

            <div css={Signup}>
              <button type="button" onClick={handleLogin}>
                <img
                  src="https://asp.pointpark.com/PlusPointMember/resources/images/mobileHomePage/btn_kakao.png"
                  alt="카카오로 로그인하기"
                />
              </button>
            </div>
  
            <button type="button" css={CloseButton}>
              <img src="/images/common/btn_close.svg" alt="화면닫기 버튼" />
            </button>
          </form>
        </main>
      </>
    );
  };
  
  export default Login;