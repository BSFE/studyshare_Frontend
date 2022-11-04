export const KAKAO_BASE_URL = `https://kauth.kakao.com`
export const KAKAO_AUTH_URL = `${KAKAO_BASE_URL}/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
