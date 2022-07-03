import { useState } from "react";
import { ProfileInfoStyle } from "./style";
import Image from "next/image";

type Props = {
  Follower: number;
  Following: number;
};

const ProfileInfo = ({ Follower, Following }: Props) => {
  const [isFollow, setIsFollow] = useState(false);

  const onClick = () => {
    setIsFollow((pre) => !pre);
    alert("좋아요를 누르셨습니다.");
  };
  return (
    <>
      <div css={ProfileInfoStyle}>
        <div className="myProfilePhoto">
          <Image src="/images/common/profile.jpeg" alt="" />
        </div>
        <div className="info">
          <div>
            <h2 className="name">이현주</h2>
            <p className="birth">20210108</p>

            <div className="follower">
              <span>Follower {Follower} </span>
              <span> | </span>
              <span>Following {Following} </span>
            </div>
          </div>

          <p className="myself">안녕하세요 반갑습니다.</p>
        </div>

        {isFollow ? (
          <button type="button" onClick={onClick}>
            <Image src="/images/common/following.svg" alt="팔로잉" />
          </button>
        ) : (
          <button type="button" onClick={onClick}>
            <Image src="/images/common/follow.svg" alt="팔로우" />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileInfo;
