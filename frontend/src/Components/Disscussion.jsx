import { useState } from "react"
import {FloatNotificationAtom} from '../Atoms/FloatNotificationAtom';
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";
import { useRecoilState } from "recoil";
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Disscussion()
{

    const [floatnotification, setfloatnotification] = useRecoilState(FloatNotificationAtom);
    const [lightdarkmode, setLightDarkMode] = useRecoilState(LightDarkModeAtom);
    const [question, setQuestion] = useState('')

    async function handlesubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('https://vignanedu-qnil.onrender.com/create/disscussion', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: question
                })
            });
    
            if (response.status === 200) {
                setfloatnotification({
                    message: 'Discussion created',
                    colour: 0,
                    show: true
                });
                setQuestion(''); 
            } else {
                setfloatnotification({
                    message: 'Failed to create discussion',
                    colour: 1,
                    show: true
                });
            }
        } catch (error) {
            setfloatnotification({
                message: 'Server Error',
                colour: 1,
                show: true
            });
        }
    }
    

    return(<div className="w-full flex flex-col items-center justify-center gap-2">
        <div>DISSCUSSION</div>
        <form onSubmit={handlesubmit} className=" flex flex-col justify-between gap-2 border border-blue-400 rounded-xl w-11/12 p-3 h-52">
            <textarea 
                className={`h-44 focus:outline-none resize-none ${lightdarkmode === 1 ? 'bg-stone-900 text-gray-400' : 'bg-white text-black'}`}
                placeholder="Create a new disscussion "
                type="text"
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}     
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false" ></textarea>
                <button className="flex justify-end" type="submit">
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Post
                    </Button>
                </button>
        </form>
    </div>)
}