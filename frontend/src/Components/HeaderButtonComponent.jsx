import React from 'react';
import { useSetRecoilState } from 'recoil'; 
import { HeaderButtonPathAtom } from '../Atoms/HeaderButtonPathAtom';

export default function HeaderButtonComponent({name, path})
{
    const changePath = useSetRecoilState(HeaderButtonPathAtom);
    return(<div className="p-1.5 pl-4 font-medium text-xl font-myfont1">
            <button onClick={()=>{
                changePath(path);
                ScrollTop()
            }}>{name}</button>
        </div>)
}

function ScrollTop()
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}