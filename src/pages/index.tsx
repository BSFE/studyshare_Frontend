import Head from "next/head";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StartLoading from "./start_loading";
import FooterNav from "components/Common/FooterNav";
import { useEffect, useState } from "react";
import Router, {useRouter} from "next/router";
import {KAKAO_BASE_URL} from '../utils/OAuth';
import Axios from 'axios';

export default function Home() {
  const [loading, setLoading] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // 3초 후 페이지 전환
    const timeOut = setTimeout(() => setLoading(loading + 1), 3000);


    if (timeOut) {
      Router.push("/feed");
    }
  }, [loading]);

  useEffect(() => {
      const kakaoCode = router.asPath.split('=')[1];
      console.log({kakaoCode});
      if(kakaoCode) {
          const customAxios = Axios.create({
              baseURL: '/',
              timeout: 10000,
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              }
          })
          customAxios.post(`${KAKAO_BASE_URL}/oauth/token`,{
              grant_type: 'authorization_code',
              client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
              redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
              code: kakaoCode,
          }).then(response => {
              console.log('1111', response)
          });
      }


  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>스터디쉐어</title>
        <meta
          name="description"
          content="스터디 공유하는 플랫폼 프로젝트입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StartLoading />
        <FooterNav />
      </main>
    </div>
  );
}
