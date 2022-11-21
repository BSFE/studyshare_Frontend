import { css } from '@emotion/react';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyles } from 'styles/global-styles';
import 'antd/dist/antd.css';
import { useRef } from 'react';
import { RecoilRoot } from 'recoil';
import cookies from 'next-cookies';
import { setCookies } from 'utils/cookie';

function MyApp({ Component, pageProps }: AppProps) {
    const queryClientRef = useRef<QueryClient>();
    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient();
    }

    return (
        <QueryClientProvider client={queryClientRef.current}>
            {GlobalStyles}
            <RecoilRoot>
                <div css={layout}>
                    <Component {...pageProps} />
                </div>
            </RecoilRoot>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    const { ctx } = appContext;

    const allCookies = cookies(ctx);
    const accessTokenByCookie = allCookies['accessToken'];

    if (accessTokenByCookie !== undefined) {
        const refreshTokenByCookie = allCookies['refreshToken'] || '';

        setCookies('access_token', accessTokenByCookie, {
            path: '/',
            secure: true
        });
        setCookies('refresh_token', refreshTokenByCookie, {
            path: '/',
            secure: true
        });
    }

    return { ...appProps };
};

export default MyApp;

const layout = css`
    width: 100%;
    height: 100vh;
    border: 1px solid #dbdbdb;
    background: #fff;
    overflow-y: scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        display: none;
    }
`;
