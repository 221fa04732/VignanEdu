import LogoComponent from "./LogoComponent";
import HeaderButtonComponent from "./HeaderButtonComponent";
import SearchBoxComponent from "./SearchBoxComponent";
import NotificationComponent from "./NotificationComponent";
import LightDarkModeComponent from "./LightDarkModeComponent";
import ProfileComponent from "./ProfileComponent";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";
import {MobileMenuAtom} from "../Atoms/MobileMenuAtom"
import MorePageButtonComponent from "./MorePageComponent";

export default function HeaderComponent()
{
    const mobilemenuvalue = useRecoilValue(MobileMenuAtom)
    const mobilemenustate = useSetRecoilState(MobileMenuAtom)
    const LightDarkModeValue = useRecoilValue(LightDarkModeAtom)

    return(<div className={`${LightDarkModeValue === 1 ? 'bg-stone-900' :'bg-white' } fixed w-full h-12 z-10 flex items-center justify-between pl-2.5 pr-2.5 border-b ${LightDarkModeValue === 1 ? 'border-white' : 'border-gray-400'}`}>
        <div className="flex items-center w-0 lg:w-36 fixed lg:static">
            <LogoComponent />   
        </div>
        <div className={`hidden md:flex items-center ${LightDarkModeValue=== 1 ? 'text-gray-400' : 'text-black'}`}>
            <HeaderButtonComponent name= {'HOME'} path={'/HomePage'} />
            <HeaderButtonComponent name={'COURSES'} path={'/CoursesPage'}/>
            <HeaderButtonComponent name={'ASSESSMENT'} path={'/AssessmentPage'}/>
            <HeaderButtonComponent name={'DISSCUSSION'} path={'/DiscussionPage'}/>   
            <HeaderButtonComponent name={'MORE'} path={'/MorePage'}/>
        </div>
        <div className = {`md:hidden`}>
            <button onClick={()=>{
                mobilemenuvalue === 0 ? mobilemenustate(1) : mobilemenustate(0)
            }} >{mobilemenuvalue === 0 ? <img className = {`max-h-8 max-w-8`} src="menu.png" /> : <img className = {`max-h-8 max-w-8`} src="cross.png" />}</button>
        </div>
        <div className="flex items-center">
            <SearchBoxComponent />
            <NotificationComponent />
            <LightDarkModeComponent />
            <ProfileComponent />
        </div>
        
    </div>)
}