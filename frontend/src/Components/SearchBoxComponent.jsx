import { useRecoilValue } from "recoil";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";

export default function SearchBoxComponent()
{
    const lightDarkModeValue = useRecoilValue(LightDarkModeAtom)
    return(<div className="p-1 flex items-center">
        <form className="max-w-md mx-auto">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className={`block w-full pl-10 p-0.5 ps-10 text-sm  border-2 border-blue-500 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${lightDarkModeValue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightDarkModeValue === 1 ? 'text-gray-400' : 'text-black'}`}    placeholder="Search items" required />
                
            </div>
        </form>
    </div>)
}