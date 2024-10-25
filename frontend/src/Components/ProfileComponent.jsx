import { useEffect } from "react"
import { ProfileButtonAtom } from "../Atoms/ProfileButtonAtom"
import { useRecoilValue, useSetRecoilState } from "recoil"

export default function ProfileComponent()
{
    const profileButtonState = useSetRecoilState(ProfileButtonAtom)
    const profileButtonValue = useRecoilValue(ProfileButtonAtom)

    return(<div className="p-1 flex items-center">
        {profileButtonValue === 0 ? <button className="text-gray-500 pl-2 pr-2 border-2 border-blue-500   rounded-lg"
        >LogIn</button> : <button><img className="h-6 w-6" src="profile.png" /></button>}
    </div>)
}