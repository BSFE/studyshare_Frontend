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
  import Axios from 'utils/axios'
import { useEffect } from "react";
import * as API from 'services';

  const Login = () => {

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  /**
   * 로그인 버튼 클릭 했을 때
   * @param data : any
   */
  const loginSubmit = async (data:any) => {
    try {
      const response = await API.postLogin(data);
      if (response) {
        alert('로그인을 성공하셨습니다.')
      } else {
        alert('로그인을 실패하셨습니다.')
      }
    } catch (error) {
      console.log(error);
    }
  }


    return (
      <>
        <main css={loginWrap}>
          <form css={loginForm} onSubmit={loginSubmit}>
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