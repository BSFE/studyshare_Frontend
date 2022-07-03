import {useEffect, useState} from 'react'
import Header from "../../components/Common/Header";
import FooterNav from "../../components/Common/FooterNav";
import { FeedWrap } from "./style";
import WriteButton from "../../components/Feed/WriteButton";
import FeedContent from "../../components/Feed/Content";
import NonMember from "../../components/Feed/Hello/NonMember";
import axios from 'axios';

const Feed = () => {
  const [dataList, setDataList] = useState<string>('')

  useEffect(() => {
    (async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/board/2');
            setDataList(data.data);
            console.log('성공입니다.')
        } catch (error) {
            alert(error);
        }
    })();
}, []);
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