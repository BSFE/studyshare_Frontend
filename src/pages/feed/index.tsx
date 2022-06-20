import Header from "../../components/Common/Header";
import FooterNav from "../../components/Common/FooterNav";
import { FeedWrap } from "./style";
import WriteButton from "../../components/Feed/WriteButton";
import FeedContent from "../../components/Feed/Content";
import NonMember from "../../components/Feed/Hello/NonMember";

const Feed = () => {
  return (
    <>
      <Header />
      <main css={FeedWrap}>
        {/* <HelloGoal user="이현주" /> */}
        <NonMember />
        <FeedContent />
        <FeedContent />
        <WriteButton />
      </main>
      <FooterNav />
    </>
  );
};

export default Feed;