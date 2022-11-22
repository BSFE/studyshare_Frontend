import axios from 'utils/axios';

export interface ILoginForm {
    username: String;
    password: String;
}

interface LoginProps {
    username: string;
    name: null | string;
    accessToken: {
        token: string;
        refreshToken: string;
    };
}

/**
 * 로그인
 * @param request 
 * @returns 
 */
export const postLogin = async (request: ILoginForm) => {
    const { username, password } = request;

    try {
        const resData = await axios
            .post<LoginProps>('/api/v1/login', {
                username,
                password
            })
            .then(({ status, data }) => (status === 200 || status === 201 ? data : false));

        return resData;
    } catch (error) {
        return false;
    }
};
