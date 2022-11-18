import axios from 'utils/axios';

export interface ILoginForm {
    username: String;
    password: String;
}

interface LoginProps {
    username: string,
    name: null | string,
    accessToken : {
        token: string,
        refreshToken: string
    }
}

export const postLogin = async (request: ILoginForm) => {
    const { username, password } = request;

    const res = await axios.post<LoginProps>('/api/v1/login', {
        username,
        password
    });

    return res.data;
};
