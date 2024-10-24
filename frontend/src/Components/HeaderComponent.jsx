import LogoComponent from "./LogoComponent";
import HeaderButtonComponent from "./HeaderButtonComponent";
import SearchBoxComponent from "./SearchBoxComponent";
import NotificationComponent from "./NotificationComponent";
import LightDarkModeComponent from "./LightDarkModeComponent";
import ProfileComponent from "./ProfileComponent";

export default function HeaderComponent()
{
    return(<div className="bg-green-500 fixed w-full h-12 z-10 flex items-center justify-between pl-2.5 pr-2.5 ">
        <div className="flex items-center w-0 lg:w-36 fixed lg:static">
            <LogoComponent />   
        </div>
        <div className="flex items-center">
            <HeaderButtonComponent name= {'HOME'} path={'/HomePage'} />
            <HeaderButtonComponent name={'COURSES'} path={'/CoursesPage'}/>
            <HeaderButtonComponent name={'ASSESSMENT'} path={'/AssessmentPage'}/>
            <HeaderButtonComponent name={'DISSCUSSION'} path={'/DiscussionPage'}/>   
            <HeaderButtonComponent name={'MORE'} path={'/MorePage'}/>
        </div>
        <div className="flex items-center">
            <SearchBoxComponent />
            <NotificationComponent />
            <LightDarkModeComponent />
            <ProfileComponent />
        </div>
        
    </div>)
}