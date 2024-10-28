import { useRecoilState } from "recoil"
import { NotificationAtom } from "../Atoms/NotificationAtom"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"

export default function NotificationDropdownComponent()
{
    const [notification, setnotification] = useRecoilState(NotificationAtom)
    const [lightdarkmodevalue, setlightdarkmodevalue] = useRecoilState(LightDarkModeAtom)

    return(<div className={`fixed h-96 w-96 ${notification === 1 ? 'block' : 'hidden'} z-10 ${lightdarkmodevalue === 1 ? 'bg-stone-900' : 'bg-white'} right-4 top-14 border border-blue-500 rounded-md ${lightdarkmodevalue=== 1 ? 'text-gray-400' : 'text-black'} p-3 overflow-hidden`}>
        <div className={`flex items-center justify-center border-b border-blue-500 ml-16 mr-16 font-serif text-xl `}>NOTIFICATION</div>
        <div className="pt-5 ">
        <ul className="list-disc pl-5">
            <li className="pb-2">Biweekly Contest 142 and Weekly Contest 421 are approaching <button className="text-blue-400">join here!</button></li>
            <li className="pb-2">Completed a daily challenge for October VignanEdu Challenge 2024 <button className="text-blue-400">view</button></li>
            <li className="pb-2">Biweekly Contest 142 and Weekly Contest 421 are approaching <button className="text-blue-400">join here!</button></li>
            <li className="pb-2">Welcome to Biweekly Contest 142! Feel free to share and post your contest experience here! can also view the rankings for the contest here. Links to the individual problems are included... </li>
            <li className="pb-2">Welcome to Biweekly <a className="text-blue-400" href="">Contest 142!</a> Feel free to share and post your contest experience here! can also view the rankings for the contest here. Links to the individual problems are included... </li>
        </ul>
        </div>

    </div>)
}