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
            const response = await axios.get('https://vignanedu-qnil.onrender.com/get/disscussion')

            setDisscussion(response.data)

            
        },10000)
    },[])

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