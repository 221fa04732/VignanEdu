import { useRecoilState } from "recoil"
import { NotificationAtom } from "../Atoms/NotificationAtom"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"
import {LoginStatusAtom} from "../Atoms/LoginStatusAtom"
import {LoginTypeAtom} from "../Atoms/LoginTypeAtom"

export default function NotificationDropdownComponent()
{
    const [notification, setnotification] = useRecoilState(NotificationAtom)
    const [lightdarkmodevalue, setlightdarkmodevalue] = useRecoilState(LightDarkModeAtom)
    const [loginstatus, setloginstatus] = useRecoilState(LoginStatusAtom)
    const [logintype, setlogintype] = useRecoilState(LoginTypeAtom)

    return(<div className={`${loginstatus === 0 ? 'hidden' : 'block'} fixed h-96 w-1/4 ${notification === 1 ? 'block' : 'hidden'} z-10 ${lightdarkmodevalue === 1 ? 'bg-stone-900' : 'bg-white'} right-4 top-14 border border-blue-500 rounded-md ${lightdarkmodevalue=== 1 ? 'text-gray-400' : 'text-black'} p-3`}>
        <div className={`flex items-center`}>
            <div className={`border-b border-blue-500 ml-16 mr-16 font-myfont1 text-xl `}>NOTIFICATION</div>
            <button className={`max-h-7 max-w-7 absolute right-3 ${loginstatus === 1 && (logintype === 1 || logintype === 2) ? 'block' : 'hidden'}`}> <img src="add.png" /> </button>
        </div>
        <div className="pt-5 ">
        <ul className="list-disc pl-5">
            <li className="pb-2">Biweekly Contest 142 and Weekly Contest 421 are approaching <button className="text-blue-400">join here!</button></li>
            <li className="pb-2">Completed a daily challenge for October VignanEdu Challenge 2024 <button className="text-blue-400">view</button></li>
            <li className="pb-2">Biweekly Contest 142 and Weekly Contest 421 are approaching <button className="text-blue-400">join here!</button></li>
            <li className="pb-2">Welcome to Biweekly Contest 142! Feel free to share and post your contest experience here! can also view the rankings for the contest here. Links to the individual problems are included... </li>
        </ul>
        </div>

    </div>)
}