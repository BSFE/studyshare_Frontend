import { useEffect, useState } from "react";
import Header from "../../components/Common/Header";
import FooterNav from "../../components/Common/FooterNav";
import { FeedWrap } from "./style";
import WriteButton from "../../components/Feed/WriteButton";
import FeedContent from "../../components/Feed/Content";
import NonMember from "../../components/Feed/Hello/NonMember";
import HelloGoal from "../../components/Feed/Hello/Goal";
import { KAKAO_AUTH_URL } from "../../utils/OAuth";
import axios from "axios";

const Feed = () => {
  const [dataList, setDataList] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  // useEffect(() => {
  //   axios
  //     .post(KAKAO_AUTH_URL, {
  //       headers: {
  //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setLogin(true);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <main css={FeedWrap}>
        {/*  
          로그인 성공시 나의 목표 나오기
          로그인이 아닐 경우 카카오 로그인 나오기
        */}
        {login ? (
          <HelloGoal user="이현주" />
        ) : (
          <NonMember handleLogin={handleLogin} />
        )}
        <FeedContent />
        <FeedContent />
        {login && <WriteButton />}
      </main>
      <FooterNav />
    </>
  );
};

export default Feed;
