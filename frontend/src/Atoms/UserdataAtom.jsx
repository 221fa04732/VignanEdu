import {atom} from 'recoil';

export const UserdataAtom = atom({
    key : "UserdataAtom",
    default : {
        type : "Guest",
        username : "Random",
        email : "Random@gmail.com",
        empid : "12345",
    }
})
