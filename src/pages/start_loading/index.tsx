import { css } from "@emotion/react";
import Image from 'next/image'

const StartLoading = () => {
  return (
    <>
      <main css={startLoadingWrap}>
        <h1>
          <Image src="/images/common/logo.svg" alt="로고" />
        </h1>
      </main>
    </>
  );
};

export default StartLoading;

export const startLoadingWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    text-align: center;
    img {
      width: 50%;
    }
  }
`;