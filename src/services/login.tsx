import axios from 'utils/axios';

export interface ILoginForm {
    username: String;
    password: String;
}

export const postLogin = async (request: ILoginForm) => {
    const { username, password } = request;

    const res = await axios.post<any>('/api/v1/login', {
        username,
        password
    });

    return res.data;
};
