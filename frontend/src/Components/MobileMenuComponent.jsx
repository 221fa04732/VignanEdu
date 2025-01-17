import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"
import { MobileMenuAtom } from "../Atoms/MobileMenuAtom"
import { Link } from 'react-router-dom'


export default function MobileMenuComponent()
{
    const lightdarkmodevalue = useRecoilValue(LightDarkModeAtom)
    const [mobilemenuvalue, setmobilemenuvalue] = useRecoilState(MobileMenuAtom)
    window.addEventListener("resize", function() {
        if(window.innerWidth > 768){
            setmobilemenuvalue(0)
        }
    });

    return(<div className={`p-2 w-full flex flex-col items-center border-b ${lightdarkmodevalue === 1 ? 'border-white' : 'border-gray-400'} ${mobilemenuvalue === 1 ? 'block' : 'hidden'} fixed top-12 z-10 ${lightdarkmodevalue=== 1 ? 'text-gray-400' : 'text-black'} ${lightdarkmodevalue === 1 ? 'bg-stone-900' :'bg-white' }`}>
        
            <Link to={'/HomePage'} className="p-1.5 pl-4 font-medium text-xl font-myfont1">Home</Link>
            <Link to={'/CoursesPage'} className="p-1.5 pl-4 font-medium text-xl font-myfont1">COURSES</Link>
            <Link to={'/AssessmentPage'} className="p-1.5 pl-4 font-medium text-xl font-myfont1">ASSESSMENT</Link>
            <Link to={'/DiscussionPage'} className="p-1.5 pl-4 font-medium text-xl font-myfont1">DISSCUSSION</Link>
            <Link to={'/MorePage'} className="p-1.5 pl-4 font-medium text-xl font-myfont1">MORE</Link>
    
    </div>)
}