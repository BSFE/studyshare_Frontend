import React from "react";
import { Progress } from "antd";
import { Card, Hello, Goal } from "./style";

type Props = {
  user?: string;
};

const HelloGoal = ({ user }: Props) => {
  return (
    <section css={Card}>
      <div css={Hello}>
        안녕하세요 {user}님,
        <br />
        <strong className="highlight">오늘 목표한 스터디</strong>를<br />
        달성해보세요!
      </div>
    </section>
  );
};

export default HelloGoal;