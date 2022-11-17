import axios from 'utils/axios';

export interface ISignUpForm {
    username: String;
    password: String;
    passwordCheck: String;
    nickname: String;
    email: String;
    birth: string;
    sex: 'male' | 'famail';
}

export const postSignUp = async (request: ISignUpForm) => {
    const { username, password, nickname, email, birth, sex } = request;

    const res = await axios.post<any>('/api/v1/signup', {
        username,
        password,
        nickname,
        email,
        birth: 970707,
        sex
    });

    return res.data;
};
