// 내 애플리케이션 > 앱 설정 > 요약정보 > REST API 키
const CLIENT_ID = "8ce70d45d3a4e4cc399cb287c4f2f963";
const REDIRECT_URI = "http://localhost:8080/login/oauth2/code/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
