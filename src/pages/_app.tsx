import { css } from "@emotion/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyles } from "styles/global-styles";
import "antd/dist/antd.css";
import { useRef } from "react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {GlobalStyles}
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
        <div css={layout}>
          <Component {...pageProps} />
        </div>
        </RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
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
