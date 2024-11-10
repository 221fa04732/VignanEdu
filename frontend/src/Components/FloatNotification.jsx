import {FloatNotificationAtom} from '../Atoms/FloatNotificationAtom';
import {useRecoilState} from 'recoil';
import { useRef, useEffect } from 'react';

export default function FloatNotification(props)
{
    const [floatNotification, setFloatNotification] = useRecoilState(FloatNotificationAtom);
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Clear any existing timeout when the notification changes
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // If there is a new notification to show, set a timeout to hide it after 20 seconds
        if (floatNotification.show) {
            timeoutRef.current = setTimeout(() => {
                setFloatNotification({
                    message: '',
                    colour: '',
                    show: false
                });
            }, 10000);
        }

        // Clear the timeout when the component unmounts or notification changes
        return () => clearTimeout(timeoutRef.current);
    }, [floatNotification, setFloatNotification]);

    return(<div className={`${floatNotification.show ? 'block animate-slideUp' : 'hidden'} fixed ${floatNotification.colour === 0 ? 'bg-green-600' : 'bg-red-700'} z-50 flex justify-center items-center gap-6 rounded p-2 bottom-5 left-5`}>
        <spam className="font-serif">{floatNotification.message}</spam>
        <button><img className="h-6 w-6" src="remove.png"/></button>
    </div>)
}