import StudentLoginPage from "./StudentLoginPage";
import CloseIconComponent from "./CloseIconComponent";
import FacultyLoginPage from "./FacultyLoginPage";
import AdminLoginPage from "./AdminLoginPage";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"
import { LoginPageStatusAtom } from "../Atoms/LoginPageStatusAtom"
import {LoginTypeAtom} from '../Atoms/LoginTypeAtom'

import { useRecoilState, useRecoilValue } from "recoil";

export default function LoginPageComponent()
{

    const [loginpagestatus, setloginpagestatus] = useRecoilState(LoginPageStatusAtom);
    const lightdarkmodevalue = useRecoilValue(LightDarkModeAtom);
    const [loginTypeAtom, setloginTypeAtom] = useRecoilState(LoginTypeAtom)

    return(<div className={`fixed ${loginpagestatus === 0 ? 'hidden' : 'block'}  ${lightdarkmodevalue === 1 ? 'bg-stone-900' : 'bg-white'} text-black z-40 border-2 border-blue-500 w-full h-full flex flex-col items-center justify-center `}>
         <div className="absolute top-0 right-0">
                <CloseIconComponent />
            </div>
        <div className="flex items-center text-gray-500">
            <div className="flex flex-col items-end gap-5">
                <button onClick={()=>{
                    setloginTypeAtom(0)
                }} className="border-l border-t border-b p-2 text-xl pr-10 pl-5 border-blue-500 rounded-tl-2xl rounded-bl-2xl hover:bg-blue-300 w-full">Student</button>
                <button onClick={()=>{
                    setloginTypeAtom(1)
                }} className="border-l border-t border-b p-2 text-xl pr-10 pl-5 border-blue-500 rounded-tl-2xl rounded-bl-2xl hover:bg-blue-300 w-full">Faculty</button>
                <button onClick={()=>{
                    setloginTypeAtom(2)
                }} className="border-l border-t border-b p-2 text-xl pr-10 pl-5 border-blue-500 rounded-tl-2xl rounded-bl-2xl hover:bg-blue-300 w-full ">Admin</button>
            </div>
            <div className={` ${loginTypeAtom === 0 ? 'block' : 'hidden'}`} >
                <StudentLoginPage />
            </div>
            <div className={` ${loginTypeAtom === 1 ? 'block' : 'hidden'}`}>
                <FacultyLoginPage />
            </div>
            <div className={` ${loginTypeAtom === 2 ? 'block' : 'hidden'}`}>
                <AdminLoginPage />
            </div>   
        </div>
        
    </div>)
}