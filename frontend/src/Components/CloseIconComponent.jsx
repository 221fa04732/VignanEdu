import { useRecoilState } from "recoil";
import { LoginPageStatusAtom } from "../Atoms/LoginPageStatusAtom";
import { SignupPageStatusAtom } from "../Atoms/SignupPageStatusAtom";
import { HireFacultyAtom } from "../Atoms/HireFacultyAtom";

export default function CloseIconComponent()
{
    const [loginpagestatus , setloginpagestatus] = useRecoilState(LoginPageStatusAtom)
    const [signuppagestatus, setsignpagestatus] = useRecoilState(SignupPageStatusAtom)
    const [hirefaculty, sethirefaculty] = useRecoilState(HireFacultyAtom)

    return (
        <div>
            <button onClick={()=>{
                setloginpagestatus(0)
                setsignpagestatus(0)
                sethirefaculty(0)
            }}><img className="h-10 w-10" src="cross.png"/></button>
        </div>
    )
}