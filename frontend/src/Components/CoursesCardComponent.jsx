import { useRecoilState } from 'recoil'
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom'

export default function CourseCardComponent(props)
{
    const [lightdarkvalue, setlightdarkmode] = useRecoilState(LightDarkModeAtom)  


    return (<div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src={props.coursepic} alt="courseimg"  />
            </div>
            <div className={` text-xl font-serif p-2  border w-full m-1 mb-0 ${lightdarkvalue === 1 ? 'border-white' : 'border-black'} rounded`}>{props.coursename}</div>
            <div className={`border w-full p-2 ${lightdarkvalue === 1 ? 'border-white' : 'border-black'} rounded`}>
                <div className="flex items-center justify-between w-full">
                    <div>{props.handy}</div>
                    <div className="flex items-center justify-center gap-2 border border-red-600 p-0.3 pl-1 pr-1 rounded">
                        <div><img className="max-h-4 max-w-4" src='star.png'/></div>
                        <div>{props.rating}</div>
                    </div>
                </div>
                <div>Instructure : {props.instructor}</div>
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Course</button>
        </div>
    </div>)
}