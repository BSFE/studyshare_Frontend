import Header from "components/Common/Header";
import FooterNav from "components/Common/FooterNav";
import ProfileInfo from "components/Todo/ProfileInfo";
import TodoList from "components/Todo/List";
import { css } from "@emotion/react";

// 마이페이지 (내가 쓴 글, 나의 소개)
const Mypage = () => {
  return (
    <>
      <Header />
      <ProfileInfo Follower={33} Following={11} />

      <section css={todoWrap}>
        <TodoList />
      </section>
      <FooterNav />
    </>
  );
};

export default Mypage;

const todoWrap = css`
  padding: 1.5em 0.5em 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 7vh;
  place-items: center;
`;
