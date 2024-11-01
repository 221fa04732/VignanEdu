import { useRecoilState } from "recoil";
import { ProfilePageStatusAtom } from "../Atoms/ProfilePageStatusAtom";
import { UserdataAtom } from "../Atoms/UserdataAtom";
import { LoginStatusAtom } from "../Atoms/LoginStatusAtom";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";
import {LoginTypeAtom} from "../Atoms/LoginTypeAtom";
import { SignupPageStatusAtom } from "../Atoms/SignupPageStatusAtom";
import {HireFacultyAtom} from "../Atoms/HireFacultyAtom";

export default function ProfileDropdownComponent()
{
    const [profilepagestatus, setprofilepagestatus] = useRecoilState(ProfilePageStatusAtom);
    const [lightdarkmodevalue, setlightdarkmodevalue] = useRecoilState(LightDarkModeAtom);
    const [userdata, setuserdata] = useRecoilState(UserdataAtom);
    const [loginstatus, setloginstatus] = useRecoilState(LoginStatusAtom);
    const [logintype, setlogintype] = useRecoilState(LoginTypeAtom);
    const [signuppagestatus, setsignuppagestatus] = useRecoilState(SignupPageStatusAtom);
    const [hirefaculty, sethirefaculty] = useRecoilState(HireFacultyAtom);

    return (<div className = {`w-64 gap-2 border-b  fixed z-30 ${lightdarkmodevalue === 1 ? 'bg-stone-900' : 'bg-white'} ${profilepagestatus === 1 ? 'block' : 'hidden'} right-4 top-14 border border-blue-500 rounded-md pt-5 pb-5 pr-10 pl-10 flex flex-col items-center justify-center ${lightdarkmodevalue=== 1 ? 'text-gray-400' : 'text-black'}`}>
        <button><img className={`max-h-24 max-w-24 pb-2 border-b ${lightdarkmodevalue === 1 ? 'border-white' : 'border-gray-400'}`} src="profile.png" /></button>
        <p className="text-blue-400 font-myfont1 text-xl">{userdata.type}</p>
        <p>{userdata.email}</p>
        <p>{userdata.empid}</p>
        <p className="text-xl font-myfont1 text-blue-500">{userdata.username}</p>
        <div className={`w-full flex items-center justify-between border-b ${lightdarkmodevalue === 1 ? 'border-white' : 'border-gray-400'} ${logintype === 2 ? 'block' : 'hidden'}`}>
            <p>Hire Faculty</p>
            <button onClick={()=>{
                sethirefaculty(1)
                setsignuppagestatus(1)
                setprofilepagestatus(0)
            }}><img className="max-h-5 max-w-5" src="recruitment.png"/></button>
        </div>
        <div className={`w-full flex items-center justify-between border-b ${lightdarkmodevalue === 1 ? 'border-white' : 'border-gray-400'}`}>
            <p>Edit Profile</p>
            <button><img className="max-h-5 max-w-5" src="edit.png"/></button>
        </div>
        <div className={`w-full flex items-center justify-between border-b ${lightdarkmodevalue === 1 ? 'border-white' : 'border-gray-400'}`}>
            <p>Setting</p>
            <button><img className="max-h-5 max-w-5" src="setting.png"/></button>
        </div>
        <div className={`w-full flex items-center justify-between border-b ${lightdarkmodevalue === 1 ? 'border-white' : 'border-gray-400'}`}>
            <p>Logout</p>
            <button onClick={()=>{
                setuserdata({
                    type : "Guest",
                    username : "Random",
                    email : "Random@gmail.com",
                    empid : "12345",
                })
                setloginstatus(0);
                setprofilepagestatus(0);
                setlogintype(0);
            }}><img className="max-h-5 max-w-5" src="logout.png"/></button>
        </div>
    </div>)
}
