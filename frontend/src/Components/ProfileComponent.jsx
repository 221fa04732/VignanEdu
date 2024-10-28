import { useRecoilState } from "recoil";
import LoginButtonComponent from "./LoginButtonComponent";
import { LoginStatusAtom } from "../Atoms/LoginStatusAtom";
import ProfileIconButtonComponent from "./ProfileIconButtonComponent";

export default function ProfileComponent()
{

    const [loginstatus, setloginstatus] = useRecoilState(LoginStatusAtom);
    return (
        <div>
            {loginstatus === 0 ? <LoginButtonComponent /> : <ProfileIconButtonComponent />}
        </div>
    )
}