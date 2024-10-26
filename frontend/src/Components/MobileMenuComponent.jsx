import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"
import { MobileMenuAtom } from "../Atoms/MobileMenuAtom"
import HeaderButtonComponent from "./HeaderButtonComponent";


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
        
            <HeaderButtonComponent name= {'HOME'} path={'/HomePage'} />
            <HeaderButtonComponent name={'COURSES'} path={'/CoursesPage'}/>
            <HeaderButtonComponent name={'ASSESSMENT'} path={'/AssessmentPage'}/>
            <HeaderButtonComponent name={'DISSCUSSION'} path={'/DiscussionPage'}/>   
            <HeaderButtonComponent name={'MORE'} path={'/MorePage'}/>
    
    </div>)
}