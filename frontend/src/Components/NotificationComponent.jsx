import { useRecoilState } from "recoil"
import { NotificationAtom } from "../Atoms/NotificationAtom"
import {FloatNotificationAtom} from '../Atoms/FloatNotificationAtom'
import {LoginStatusAtom} from '../Atoms/LoginStatusAtom'


export default function NotificationComponent()
{
    const [notification, setnotification] = useRecoilState(NotificationAtom)
    const [floatNotification, setFloatNotification] = useRecoilState(FloatNotificationAtom)
    const [loginStatus, setLoginStatus] = useRecoilState(LoginStatusAtom)

    return(<div className="flex items-center p-1 ">
            <button onClick={()=>{
                {notification === 0 && loginStatus === 1 ? setnotification(1) : setnotification(0)}
                {if(loginStatus === 0 ) 
                    {
                        setFloatNotification({
                            message: 'Please login to see notification',
                            colour: 1,
                            show: true
                        })
                    }
                }
            }}> <img className="max-h-5 max-w-5" src="notifications.png" /> </button>
        </div>)
}