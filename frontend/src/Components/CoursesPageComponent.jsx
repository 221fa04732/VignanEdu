import { useRecoilValue } from "recoil";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";

export default function CoursesPageComponent()
{
    const lightDarkModeValue = useRecoilValue(LightDarkModeAtom)
    return(<div className={`h-screen ${lightDarkModeValue === 1 ? 'bg-stone-900' : 'bg-white'}`}>
            CoursesPage
        </div>)
}