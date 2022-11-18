import { atom } from "recoil";

export const accessToken = atom({
    key: 'token',
    default: ''
})