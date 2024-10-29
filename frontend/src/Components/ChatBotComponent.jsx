import React from 'react'
import { useRecoilState } from 'recoil'
import { ChatbotAtom } from '../Atoms/ChatbotAtom'

export default function ChatBotComponent()
{
    const [chatbot, setChatbot] = useRecoilState(ChatbotAtom)

    return(
        <div className="fixed bottom-0 right-0 m-2 z-10">
            <button onClick={()=>{
                chatbot === 0 ? setChatbot(1) : setChatbot(0)
            }}>
                <img src="/chatbot.png" className="rounded-full h-12 w-12" />
            </button>
        </div>
    )
}