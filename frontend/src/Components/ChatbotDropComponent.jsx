import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ChatbotAtom } from "../Atoms/ChatbotAtom";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";

export default function ChatbotDropComponent()
{

    const [chatbot, setChatbot] = useRecoilState(ChatbotAtom)
    const [lightdarkvalue, setlightdarkmode] = useRecoilState(LightDarkModeAtom)
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <div className={`fixed bottom-12 right-12 m-2 z-50 h-4/5 w-96 ${chatbot === 1 ? 'block' : 'hidden'} ${lightdarkvalue === 1 ? 'bg-stone-800' : 'bg-gray-200'} rounded-xl p-3 border border-blue-400 ${lightdarkvalue===1 ? 'text-gray-400' : 'text-black'}`}>
            <div className="flex items-center justify-center w-full border-b border-blue-400">
                <img src="chatbot.png" className="rounded-full h-10 w-10 mb-2"/>
                <p className="text-blue-400 pl-5 text-xl font-serif">Chatbot</p>
            </div>
            <div className="max-h-96 min-h-96 pt-3">
                <div className="mb-3" id="que"></div>
                <div id="ans" ></div>
            </div>
            <div >
            <form onSubmit={handleSubmit} >
                    
                    <div className={` border ${lightdarkvalue === 1 ?'bg-black': 'bg-white'} ${lightdarkvalue === 0 ? 'text-black' : 'text-white'} flex justify-end p-1`}>
                        <input
                            type="text"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full border-none mt-1 ${lightdarkvalue === 1 ?'bg-black': 'bg-white'} focus:outline-none`}
                        />
                    
                    <button onClick={async()=>{
                        try {
                            const response = await fetch("http://localhost:9000/chatBot", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    question : password
                                }),
                            });
                            const data = await response.json();
                            if (response.ok) {
                               document.getElementById('que').innerHTML = data.questionFound.question;
                               document.getElementById('ans').innerHTML = data.questionFound.ans;
                               
                            } 
                        } 
                        catch (error) {
                            alert("An error occurred");
                        }
                    }} type="submit" className="w-8 h-8 p-2 rounded "><img src="send.png" alt="" /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}