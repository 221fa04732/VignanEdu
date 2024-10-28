import {atom} from 'recoil';

export const UserdataAtom = atom({
    key : "UserdataAtom",
    default : {
        username : "Guest",
        email : "Guest@gmail.com"
    }
})
