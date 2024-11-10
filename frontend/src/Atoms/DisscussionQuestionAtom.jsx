
import {atom} from  'recoil';

export const DisscussionQuestionAtom = atom({
    key: 'DisscussionQuestionAtom',
    default: {disscussion : [{question : 'random question', answers : [{answer : 'random answer'}]}]}
})