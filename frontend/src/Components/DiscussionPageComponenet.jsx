
import React from 'react';
import { useRecoilState } from 'recoil';
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom';
import Disscussion from '../Components/Disscussion'
import DisscussionQuestion from '../Components/DisscussionQuestion'


export default function DiscussionPageComponent(){

  const [lightdarkmode, setLightDarkMode] = useRecoilState(LightDarkModeAtom);

  return(<div className={`w-full p-10 ${lightdarkmode === 1 ? 'bg-stone-900 text-gray-400' : 'bg-white text-black'}`}>
      <Disscussion />
      <DisscussionQuestion />
    </div>)
}