import {
  ProfileImg,
  ProfileWrap,
  InputWrap,
  ProfileWrapPadding,
} from "./style";
import FooterNav from "../../components/Common/FooterNav";
import Header from "../../components/Common/Header";

const Profile = () => {
  return (
    <>
      <Header />

      <div css={ProfileWrapPadding}>
        <div css={ProfileWrap}>
          <button css={ProfileImg}>
            <img src="/images/common/btn_photo.svg" alt="" />
          </button>
        </div>

        <form css={InputWrap}>
          <div>
            <h5>이름</h5>
            <input
              type="text"
              placeholder="5글자 이내로 작성해주세요."
              maxLength={5}
            />
          </div>

          <div>
            <h5>생년월일</h5>
            <input type="number" placeholder="예시) 970521" maxLength={6} />
          </div>

          <div>
            <h5>인증 이메일</h5>
            <input type="email" placeholder="예시) abc@studyshare.com" />
          </div>

          <div className="separation">
            <h5>자기 소개</h5>
            <textarea
              placeholder="40글자 이내로 간단하게 작성해주세요."
              maxLength={40}
            />
          </div>
        </form>
      </div>

      <FooterNav />
    </>
  );
};

export default Profile;