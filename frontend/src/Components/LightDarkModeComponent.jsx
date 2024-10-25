import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"
import { useRecoilValue, useSetRecoilState } from "recoil"

export default function LightDarkModeComponent()
{
    const lightDarkModeValue = useRecoilValue(LightDarkModeAtom)
    const lightDarkModeState = useSetRecoilState(LightDarkModeAtom)

    return(<div className="p-1 flex items-center">

            <button onClick={()=>{
                lightDarkModeState(lightDarkModeValue === 0 ? 1 : 0)
            }} >{lightDarkModeValue ===0 ? <img className="h-5 w-5" src="./light_mode.png"/> : <img className="h-5 w-5"src="/dark_mode.png" /> }</button>
        </div>)
}