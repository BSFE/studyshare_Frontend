import { useState } from "react";
import { ProfileInfoStyle } from "./style";
import Image from "next/image";

type Props = {
  // 팔로워
  Follower: number;
  // 팔로잉
  Following: number;
};

const ProfileInfo = ({ Follower, Following }: Props) => {
  const [isFollow, setIsFollow] = useState<boolean>(false);

  /**
   * 팔로우, 팔로잉 토글버튼
   */
  const onClick = () => {
    setIsFollow((pre) => !pre);
  };
  return (
    <>
      <div css={ProfileInfoStyle}>
        <div className="myProfilePhoto">
          <Image
            src="/images/common/profile.jpeg"
            layout="fill"
            width={100}
            height={100}
            alt=""
          />
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
            <Image
              src="/images/common/following.svg"
              width={100}
              height={100}
              alt="팔로잉"
            />
          </button>
        ) : (
          <button type="button" onClick={onClick}>
            <Image
              src="/images/common/follow.svg"
              width={100}
              height={100}
              alt="팔로우"
            />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileInfo;
