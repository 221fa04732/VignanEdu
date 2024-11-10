import React from 'react'
import { useRecoilState } from 'recoil'
import { ChatbotAtom } from '../Atoms/ChatbotAtom'
import {LoginStatusAtom} from '../Atoms/LoginStatusAtom'
import {FloatNotificationAtom} from '../Atoms/FloatNotificationAtom'

export default function ChatBotComponent()
{
    const [chatbot, setChatbot] = useRecoilState(ChatbotAtom)
    const [loginStatus, setLoginStatus] = useRecoilState(LoginStatusAtom)
    const [floatNotification, setFloatNotification] = useRecoilState(FloatNotificationAtom)

    return(
        <div className="fixed bottom-0 right-0 m-2 z-10">
            <button onClick={()=>{
                {(chatbot === 0 && loginStatus === 1)? setChatbot(1) : setChatbot(0)}
                {if(loginStatus === 0 ) {setFloatNotification({
                    message: 'Please login to use the chatbot',
                    colour: 1,
                    show: true
                })}}

            }}>
                <img src="/chatbot.png" className="rounded-full h-12 w-12" />
            </button>
        </div>
    )
}