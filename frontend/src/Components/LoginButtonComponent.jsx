import { useRecoilValue,useRecoilState } from "recoil";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";
import { LoginPageStatusAtom } from "../Atoms/LoginPageStatusAtom";

export default function LoginButtonComponent()
{

    const lightdarkmodevalue = useRecoilValue(LightDarkModeAtom);
    const [loginpagestatus, setloginpagestatus] = useRecoilState(LoginPageStatusAtom);

    return(<div className="p-1 flex items-center">
        <button onClick={()=>{
            setloginpagestatus(1);
        }} className={`pl-2 pr-2 border-2 border-blue-500  rounded-lg font-medium font-myfont1 ${ lightdarkmodevalue===1 ? 'bg-gray-500' && 'text-gray-400' : 'bg-white'} max-w-max`}
        >LogIn</button>
    </div>)
}