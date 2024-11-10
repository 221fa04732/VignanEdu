import {useRecoilState} from 'recoil'
import {DisscussionQuestionAtom} from '../Atoms/DisscussionQuestionAtom'
import { useEffect } from 'react'
import axios from 'axios'
import DisplayQuestion from './DisplayQuestion'

export default function DisscussionQuestion()
{

    const [disscussion, setDisscussion] = useRecoilState(DisscussionQuestionAtom)

   

    // useEffect(()=>{

        

    //     setInterval(async()=>{
    //         const response = await axios.get('http://localhost:1000/get-disscussion')

    //         setDisscussion(response.data)

            
    //     },1000)
    // },[disscussion])

    console.log(disscussion.disscussion[0])

    return (
        <div>
            {disscussion.disscussion.map((item, index) => (
                <div key={index}>
                    <DisplayQuestion item = {item}/>
                </div>
            ))}
        </div>
    );
}