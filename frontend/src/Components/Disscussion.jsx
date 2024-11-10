import { useState } from "react"
import {FloatNotificationAtom} from '../Atoms/FloatNotificationAtom';
import { useRecoilState } from "recoil";

export default function Disscussion()
{

    const [floatnotification, setfloatnotification] = useRecoilState(FloatNotificationAtom);
    const [question, setQuestion] = useState('')

    async function handlesubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:1000/create-disscussion', {
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
        <form onSubmit={handlesubmit} className="w-full flex flex-col items-center justify-center gap-2">
            <textarea 
                className="border-2 border-black w-full rounded p-2 h-32"
                placeholder="Create a new disscussion "
                type="text"
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false" ></textarea>
            <button className="bg-blue-700 p-1 pl-4 pr-4 rounded" type="submit">subbmit</button>
        </form>
    </div>)
}