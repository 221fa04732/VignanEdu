
import React from 'react';
import { useRecoilState } from 'recoil';
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom';
import Disscussion from '../Components/Disscussion'
import DisscussionQuestion from '../Components/DisscussionQuestion'
export default function DiscussionPageComponent()

{
    return(<div className={`w-full p-10 `}>
        <Disscussion />
        <DisscussionQuestion />
      </div>)
}