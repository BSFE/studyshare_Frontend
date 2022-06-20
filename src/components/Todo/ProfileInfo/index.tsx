import { useState } from "react";
import { ProfileInfoStyle } from "./style";

type Props = {
  Follower: number;
  Following: number;
};

const ProfileInfo = ({ Follower, Following }: Props) => {
  const [isFollow, setIsFollow] = useState(false);

  const onClick = () => {
    setIsFollow((pre) => !pre);
  };
  return (
    <>
      <div css={ProfileInfoStyle}>
        <div className="myProfilePhoto">
          <img src="/images/common/profile.jpeg" alt="" />
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
            <img src="/images/common/following.svg" alt="팔로잉" />
          </button>
        ) : (
          <button type="button" onClick={onClick}>
            <img src="/images/common/follow.svg" alt="팔로우" />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileInfo;