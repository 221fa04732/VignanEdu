import {useRecoilState} from 'recoil'
import {DisscussionQuestionAtom} from '../Atoms/DisscussionQuestionAtom'
import { useEffect } from 'react'
import axios from 'axios'
import DisplayQuestion from './DisplayQuestion'

export default function DisscussionQuestion()
{

    const [disscussion, setDisscussion] = useRecoilState(DisscussionQuestionAtom)

   

    useEffect(()=>{  

        

        setInterval(async()=>{
            const response = await axios.get('http://localhost:1000/get-disscussion')

            setDisscussion(response.data)

            
        },1000)
    },[disscussion])

    return (
        <div className='pt-10'>
            <div className='flex items-center justify-center'>
                PREVIOUS DISSCUSSION    
            </div>
            <div>
            {disscussion.disscussion.map((item, index) => (
                <div key={index}>
                    <DisplayQuestion item = {item}/>
                </div>
            ))}
        </div>
        </div>
        
    );
}