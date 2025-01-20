import { useRecoilState } from 'recoil';
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom'


export default function Loading()
{
    const [lightmode, setLightmode] = useRecoilState(LightDarkModeAtom)

    return(<div className={`${lightmode === 1 ? "bg-stone-900" : "bg-white"} h-screen flex justify-center items-center flex-col sm:flex-row`}>
                <div className="w-12 h-12 border-4 border-white border-t-red-500 rounded-full animate-spin mr-5"></div>
            <div className="flex items-center">
                <p className="font-bold text-lg">Loading...</p>
            </div>
        </div>
    );
};