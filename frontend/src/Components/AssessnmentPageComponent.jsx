import Assessment01 from './Assessment01'
import Assessment2 from './Assessment2'
import Assessment3 from './Assessment3'
import Assessment4 from './Assessment4'
import Assessment5 from './Assessment5'
import Assessment6 from './Assessment6'
import Assessment7 from './Assessment7'
import Assessment8 from './Assessment8'
import Assessment9 from './Assessment9'
import Assessment10 from './Assessment10'
import {LightDarkModeAtom} from '../Atoms/LightDarkModeAtom'
import { useRecoilState } from 'recoil';
import { LoginTypeAtom } from '../Atoms/LoginTypeAtom';



export default function AssessnmentPageComponent ()
{

  const [lightdarkmode, setlightdarkmode] = useRecoilState(LightDarkModeAtom)
  const [logintype, setlogintype] = useRecoilState(LoginTypeAtom)


  return(<div className={`${lightdarkmode === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkmode === 1 ? 'text-gray-400' : 'text-black'}`}>
    <div className='pt-5  text-5xl font-quick font-medium flex text-blue-500 items-center justify-center'>
        Assessment
    </div>
    <div className={`w-11/12 grid grid-cols-1 xl:grid-cols-2 place-self-center`}>
        <Assessment01 />
        <Assessment2 />
        <Assessment3 />
        <Assessment4 />
        <Assessment5 />
        <Assessment6 />
        <Assessment7 />
        <Assessment8 />
        <Assessment9 />
        <Assessment10 />
    </div>
    <div className={`w-full flex  justify-center pb-10 ${logintype===1 || logintype===2 ? 'block' : 'hidden'}`}>
      <div className='border-2 border-blue-400 rounded w-11/12 flex justify-between p-5'>
      <div className='text-2xl'>Add Assessment</div>
      <button><img className='h-8 w-8' src="add.png"/></button>
      </div>
    </div>
  </div>
  )


};