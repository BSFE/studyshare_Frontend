import { loginForm, Logo, Input, Button, LoginLink, CloseButton, loginWrap, Signup } from './styles';
import Link from 'next/link';
import { KAKAO_AUTH_URL } from 'utils/OAuth';
import * as API from 'services';
import { useState } from 'react';
// import { accessToken } from 'states/LoginState';
// import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { setCookies } from 'utils/cookie';

interface Props {
    username: string;
    password: string;
}

const Login = () => {
    // const [token, setToken] = useRecoilState(accessToken);
    const [login, setLogin] = useState<Props>({
        username: '',
        password: ''
    });
    const router = useRouter();

    const handleChange = (e: any) => {
        setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    /**
     * 로그인 버튼 클릭 했을 때
     * @param data : any
     */
    const loginSubmit = async (e: any) => {
        e.preventDefault();

        const response = await API.postLogin(login);
        if (response) {
            // 상태관리에 accessToken을 받아온다.
            // setToken(response.accessToken.token);
            setCookies('access_token', response.accessToken.token, {
                path: '/',
                secure: true
            });
            setCookies('refresh_token', response.accessToken.refreshToken, {
                path: '/',
                secure: true
            });
            // 로컬 스토리지에는 refresh_token을 받아온다. setItem('키값', 받아올 값);

            router.push('./feed');
        }
    };

    return (
        <>
            <main css={loginWrap}>
                <form css={loginForm} onSubmit={loginSubmit}>
                    <h1 css={Logo}>
                        <img src="/images/common/logo.svg" alt="스터디쉐어 로고" />
                    </h1>

                    <input css={Input} placeholder="아이디 입력" name="username" type="username" className="id" onChange={handleChange} />

                    <input css={Input} placeholder="비밀번호 입력" name="password" type="password" onChange={handleChange} />

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
