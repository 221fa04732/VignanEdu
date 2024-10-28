import { useRecoilState } from "recoil";
import { ProfilePageStatusAtom } from "../Atoms/ProfilePageStatusAtom";

export default function ProfileIconButtonComponent()
{
    const [profilepagestatus, setprofilepagestatus] = useRecoilState(ProfilePageStatusAtom);

    return (
        <div className={`flex items-center p-1`}>
            <button onClick={()=>{
                profilepagestatus===0?setprofilepagestatus(1) : setprofilepagestatus(0);
            }}><img className={`max-h-5 max-w-5`} src="profile.png"/></button>
        </div>
    )
}