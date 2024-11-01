import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ChatbotAtom } from "../Atoms/ChatbotAtom";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";
import { LoginStatusAtom } from "../Atoms/LoginStatusAtom";

export default function ChatbotDropComponent()
{

    const [chatbot, setChatbot] = useRecoilState(ChatbotAtom)
    const [lightdarkvalue, setlightdarkmode] = useRecoilState(LightDarkModeAtom)
    const [loginstatus, setloginstatus] = useRecoilState(LoginStatusAtom)
    const [question, setquestion] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <div className={`fixed bottom-12 right-12 m-2 z-50 h-4/5 w-96 ${chatbot === 1 && loginstatus=== 1 ? 'block' : 'hidden'} ${lightdarkvalue === 1 ? 'bg-stone-800' : 'bg-gray-200'} rounded-xl p-3 border border-blue-400 ${lightdarkvalue===1 ? 'text-gray-400' : 'text-black'}`}>
            <div className="flex items-center justify-center w-full border-b border-blue-400">
                <img src="chatbot.png" className="rounded-full h-10 w-10 mb-2"/>
                <p className="text-blue-400 pl-5 text-xl font-myfont1">Chatbot</p>
            </div>
            <div className="h-5/6 overflow-hidden ">
                <div className="p-2 pl-5 pr-5">
                    <div id="ans" ></div>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} >
                        
                        <div className={` border ${lightdarkvalue === 1 ?'bg-black': 'bg-white'} ${lightdarkvalue === 0 ? 'text-black' : 'text-white'} flex justify-end pl-2`}>
                            <input
                                type="text"
                                id="question"
                                value={question}
                                onChange={(e) => setquestion(e.target.value)}
                                className={`w-full border-none mt-1 ${lightdarkvalue === 1 ?'bg-black': 'bg-white'} focus:outline-none`}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"  />
                        
                        <button onClick={async()=>{
                            try {
                                const response = await fetch("http://localhost:3000/chatbot/chat", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        question : question,
                                        model : "Phind Instant"
                                    }),
                                });
                                const data = await response.json();
                                console.log(data)
                                if (response.ok) {
                                document.getElementById('ans').innerHTML = data.answer;
                                
                                } 
                            } 
                            catch (error) {
                                alert("An error occurred");
                            }
                        }} type="submit" className="w-8 h-8 p-2 rounded"><img src="send.png" alt="" /></button>
                        </div>
                    </form>
                </div>
        </div>
    )
}