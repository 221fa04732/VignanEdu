import { useRecoilState } from "recoil"
import { NotificationAtom } from "../Atoms/NotificationAtom"


export default function NotificationComponent()
{
    const [notification, setnotification] = useRecoilState(NotificationAtom)

    return(<div className="flex items-center p-1 ">
            <button onClick={()=>{
                notification === 1 ? setnotification(0) : setnotification(1)
            }}> <img className="max-h-5 max-w-5" src="notifications.png" /> </button>
        </div>)
}