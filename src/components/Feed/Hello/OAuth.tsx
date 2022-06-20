// 내 애플리케이션 > 앱 설정 > 요약정보 > REST API 키
const CLIENT_ID = "b9b41c6985b5210cd8f204aa01da6bc5";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;