import { useEffect } from "react"
import { ProfileButtonAtom } from "../Atoms/ProfileButtonAtom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"

export default function ProfileComponent()
{
    const lightdarkmodevalue = useRecoilValue(LightDarkModeAtom)
    const profileButtonState = useSetRecoilState(ProfileButtonAtom)
    const profileButtonValue = useRecoilValue(ProfileButtonAtom)

    return(<div className="p-1 flex items-center">
        {profileButtonValue === 0 ? <button className={`pl-2 pr-2 border-2 border-blue-500  rounded-lg font-medium font-serif ${ lightdarkmodevalue===1 ? 'bg-gray-500' && 'text-gray-400' : 'bg-white'} max-w-max`}
        >LogIn</button> : <button><img className="h-6 w-6" src="profile.png" /></button>}
    </div>)
}