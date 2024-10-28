import React from 'react';
import { useRecoilState } from 'recoil';
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom';

export default function DiscussionPageComponent()
{
    const [lightdarkmode, setLightDarkMode] = useRecoilState(LightDarkModeAtom);

    return(<div className={`w-screen h-screen text-2xl ${lightdarkmode === 1 ? 'text-gray-400' : 'text-black'}    bg-stone-900 p-10 overflow-x-hidden ${lightdarkmode === 1 ? ' bg-stone-900' : 'bg-white'}`}>
        {/* *************************Post a new Discussion****************** */}
        <div className="border-b-2 rounded-3xl">
            <h1 className="text-5xl border-b-2 p-3">Discussions</h1>
            <div className="mt-8">
                Hello Learner ! <br />
                Welcome to Discussions, here you can Post your doubts/problems and also you can answer others doughts.
                Make sure you follow the community guidelines and message responsibily.
            </div>
            <div className="flex flex-col justify-center items-center">
                <input type="textbox" placeholder="Discuss your problem here....." className="mt-10 w-full h-80 rounded-2xl p-6 justify-center items-start" />
                <button className="m-10 w-56 h-10 border-2 rounded-2xl hover:bg-slate-50 hover:text-stone-900">Post</button>
            </div>
        </div>
        {/* **********************************Pre-default Discussions********************************** */}

        <div className="mt-10 w-full h-full flex flex-col justify-start items-center gap-10">
            <h1 className="text-5xl mt-6 mb-9">Previous Discussions</h1>
            
            {/* *************************user-1**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-blue-400 cursor-pointer">
                    <img src="user-blue.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 text-center mt-2 text-xl">Lohith Jalla</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary classNameName="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>  

            {/* *************************user-2**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4 ">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-orange-400 cursor-pointer">
                    <img src="user-orange.jpg" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                    <p className="ml-2 text-center mt-2 text-xl">Mrityunjay Kumar</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            Is it possible to detect IP address of different people logged in just 1 account?
                        </summary>
                        <p className="mt-3 text-xl px-10 overflow-hidden">Possibly. If you are connecting from different networks, such as each of you working from home, then absolutely yes. If you are all on the same network, such as connecting from your own work computer from the same office, or in different offices but your corporate network is "joined" and only has one connection to the internet such as from one office, then you would likely all have the same IP address. Regardless of IP address they would likely be able to see that you are logged in as three simultaneous sessions which would be odd.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-3**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-black-400 cursor-pointer">
                    <img src="user-black.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                    <p className="ml-2 text-center mt-2 text-xl">Anurag ojha</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-4**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-green-400 cursor-pointer">
                    <img src="user-green.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                    <p className="ml-2 text-center mt-2 text-xl">Rajeev roy</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-5**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-purple-400 cursor-pointer">
                    <img src="user-purple.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 text-center mt-2 text-xl">Ahmad Reza</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-6**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-yellow-400 cursor-pointer">
                    <img src="user-yellow.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                    <p className="ml-2 text-center mt-2 text-xl">Nikhil Tripathy</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-7**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-blue-400 cursor-pointer">
                    <img src="user-blue.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 text-center mt-2 text-xl">Manikanta korra</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-8**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-orange-400 cursor-pointer">
                    <img src="user-orange.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 text-center mt-2 text-xl">Nivas anupodu</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p classNameName="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-9**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-black-400 cursor-pointer">
                    <img src="user-black.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                    <p className="ml-2 text-center mt-2 text-xl">Arshak mohomad</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-10**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-green-400 cursor-pointer">
                    <img src="user-green.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 text-center mt-2 text-xl">valli jalla</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-11**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-purple-400 cursor-pointer">
                    <img src="user-purple.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 text-center mt-2 text-xl">Sravanti kumar</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-12**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-yellow-400 cursor-pointer">
                    <img src="user-yellow.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 text-center mt-2 text-xl">Preethi Zintha</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-13**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-blue-400 cursor-pointer">
                    <img src="user-blue.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                        <p className="ml-2 mt-2 text-center text-xl">Ram Pothineni</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>

            {/* *************************user-14**************************** */}
            <div className="w-11/12 h-44 border-2 rounded-3xl flex justify-start items-start p-4">
                {/* ************************user-img***************************** */}
                <div className="w-32 h-full flex flex-col border-r-2 pr-6 border-purple-400 cursor-pointer">
                    <img src="user-purple.png" alt="logo" className="w-32 h-12 rounded-3xl object-contain"/>
                    <p className="mt-2 text-xl text-center">Sizuka Hozeku</p>
                </div>
                {/* ********************user-question***************************** */}
                <div className="m-4 w-full h-full">
                    <details className="py-4 text-3xl ">
                        <summary className="flex justify-between items-center cursor-pointer">
                            What's the best way to prepare for coding interviews?
                        </summary>
                        <p className="mt-3 text-xl px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                    </details>
                </div>
            </div>
        </div>
    </div>)
}