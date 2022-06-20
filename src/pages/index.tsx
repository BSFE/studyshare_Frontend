import Head from "next/head";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StartLoading from "./start_loading";
import FooterNav from "components/Common/FooterNav";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function Home() {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    // 3초 후 페이지 전환
    const timeOut = setTimeout(() => setLoading(loading + 1), 3000);

    if (timeOut) {
      Router.push("/feed");
    }
  }, [loading]);

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