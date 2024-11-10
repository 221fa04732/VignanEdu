import {atom} from 'recoil';

export const FloatNotificationAtom = atom({
    key: 'FloatNotificationAtom',
    default: {
        message: '',
        colour: 0,
        show: false
    }
})