import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/**
 * 쿠키를 저장한다
 * @param name {string}
 * @param value {string}
 * @param options {any}
 * @returns 
 */
export const setCookies = (name: string, value: string, options?: any) => {
    console.log(name, value, options);
    return cookies.set(name, value, options);
};

/**
 * 쿠키를 가져온다
 * @param name {string}
 * @returns 
 */
export const getCookies = (name: string) => {
    return cookies.get(name);
};
