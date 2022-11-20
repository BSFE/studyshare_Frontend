import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookies = (name: string, value: string, options?: any) => {
    console.log(name, value, options);
    return cookies.set(name, value, options);
};

export const getCookies = (name: string) => {
    return cookies.get(name);
};
