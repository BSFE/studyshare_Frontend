import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const accessToken = atom({
    key: 'token',
    default: ''
})