import { useRecoilState } from 'recoil'
import { useSetRecoilState } from 'recoil'
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom'

export default function ChapterWiseComponent()
{
    const [lightdarkvalue, setlightdarkmode] = useRecoilState(LightDarkModeAtom)  

    return (<div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} grid grid-cols-1 p-10 gap-8 xl:grid-cols-4 lg:grid-cols-2`}>
    
    
    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>


    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

    <div className={`${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        <div className={`border-b-2 border-l-2 border-gray-400 hover:border-blue-500 rounded-xl p-5 flex flex-col justify-center items-center`}>
            <div className={`h-32 overflow-hidden rounded`}>
                <img className={`object-contain`} src='C:\Users\hp\OneDrive\Desktop\VignanEdu\frontend\public\chapter-01.png'  />
            </div>
            <button className="bg-blue-500 text-black p-2 rounded mt-2 pl-5 pr-5">Start Chapter</button>
        </div>
    </div>

</div>) }