import { useRouter } from "next/router";
import { AlarmHeaderWrap, AlarmWrap, Back, Title } from "./style";
import Image from 'next/image'

const AlarmHeader = () => {
  const router = useRouter();

  return (
    <header css={AlarmHeaderWrap}>
      <div css={AlarmWrap}>
        <button type="button" onClick={() => router.back()} css={Back}>
          <Image src="/images/common/header_back.svg" alt="뒤로가기" />
        </button>

        <h1 css={Title}>알림</h1>
      </div>
    </header>
  );
};

export default AlarmHeader;