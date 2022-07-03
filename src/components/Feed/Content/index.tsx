import { css } from "@emotion/react";
import FeedBoxHead from "../BoxHead";
import CommentHead from "../CommentHead";
import FeedDesc from "../Desc";
import FeedBoxInput from "../BoxInput";
import { Carousel } from "antd";
import Image from "next/image";

// 하나의 피드 게시글
const FeedContent: React.FC = () => {
  return (
    <article css={Feed}>
      <FeedBoxHead nickname="apeach" />

      <Carousel>
        <div>
          <Image
            src="/images/feed/slider01.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <Image
            src="/images/feed/slider01.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <Image
            src="/images/feed/slider01.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </Carousel>

      <CommentHead
        like={1000}
        time={50}
        text="내일부터 시월 십칠일까지 고1 쎈 끝낼수 있을까 무조건 해야된다"
      />
      <FeedDesc />

      <FeedBoxInput />
    </article>
  );
};

export default FeedContent;

const Feed = css`
  padding: 0.6em 1.5625em;
  margin-top: 3em;
`;
