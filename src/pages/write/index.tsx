import Header from "../../components/Common/Header";
import FooterNav from "../../components/Common/FooterNav";
import { WriteWrap, TextAdd } from "./style";

// 글쓰기 페이지
const Write = () => {
  return (
    <>
      <Header />
      <main css={WriteWrap}>
        <section css={TextAdd}>
          <h3>feed text</h3>
          <textarea placeholder="내용을 입력해 주세요." />
        </section>
      </main>
      <FooterNav />
    </>
  );
};

export default Write;