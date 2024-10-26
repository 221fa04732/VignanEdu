import React from 'react';
import { useSetRecoilState } from 'recoil'; 
import { HeaderButtonPathAtom } from '../Atoms/HeaderButtonPathAtom';

export default function HeaderButtonComponent({name, path})
{
    const changePath = useSetRecoilState(HeaderButtonPathAtom);
    return(<div className="p-1.5 font-medium text-xl font-serif">
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