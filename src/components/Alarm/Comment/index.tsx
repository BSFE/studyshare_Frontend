import { alarm, Icon } from "../style";
import Image from 'next/image'

type Props = {
  date: any;
  nickname: string;
  text: string;
};

export const AlarmComment = ({ date, nickname, text }: Props) => {
  return (
    <button css={alarm} type="button">
      <h2 css={Icon}>
        <Image src="/images/alarm/alarm_comment.svg" alt="좋아요" />
      </h2>

      <section>
        <h4>{nickname}님이 내 게시물에 단 댓글</h4>
        <p>{text}</p>
        <span>{date}</span>
      </section>
    </button>
  );
};
