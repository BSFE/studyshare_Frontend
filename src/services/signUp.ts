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

    try {
        const resData = await axios
            .post<any>('/api/v1/signup', {
                username,
                password,
                nickname,
                email,
                birth,
                sex
            })
            .then(({ status, data }) => (status === 200 || status === 201 ? data : false));
        console.log({ resData });
        return resData;
    } catch (error) {
        return false;
    }
};
