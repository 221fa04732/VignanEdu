import React from 'react';
import { useRecoilState } from 'recoil';
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom';

export default function DiscussionPageComponent()
{
    const [lightdarkmode, setLightDarkMode] = useRecoilState(LightDarkModeAtom);

    return(<div className={`pt-5 text-2xl ${lightdarkmode === 1 ? 'bg-stone-900'  : 'bg-white'} ${lightdarkmode === 1 ? 'text-gray-400' : 'text-black'}`}>
          {/* *************************Post a new Discussion****************** */}
          <div className="rounded-3xl mx-16 flex flex-col align-center justify-center">
            <center><h1 className="w-64 text-5xl border-b-2 text-sky-400 font-myfont1">Discussions</h1></center>
            <div className="mt-10 font-myfont1 text-xl">
                <div className='text-blue-400 text-2xl' >Hello Learner !</div>
                Welcome to Discussions, here you can Post your doubts/problems and also you can answer others doughts.
                Make sure you follow the community guidelines and message responsibily.
            </div>
            <div className="relative flex flex-col justify-center items-center">
                <input type="textbox" placeholder="Discuss your problem here....." className={`mt-10 w-full h-80 rounded-2xl p-6 justify-center items-start bg-stone-900 outline-none shadow-[0_5px_5px_5px_rgba(189,189,189,0.9)]  ${lightdarkmode === 1 ? 'bg-stone-900'  : 'bg-white'} ${lightdarkmode === 1 ? 'text-gray-400' : 'text-black'}`} />
                <button className="absolute bottom-5 right-10 w-56 border-2 rounded-2xl border-sky-400">Post</button>
            </div>
        </div>
        {/* **********************************Pre-default Discussions********************************** */}

        <div className="mt-10 w-full h-full flex flex-col justify-start items-center gap-10">
            <h1 className="text-5xl mt-6 mb-9 font-myfont1 hover:text-blue-400">Previous Discussions</h1> 
        </div>

    {/* new discussions */}

        <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="man.png" />
                    </div>
                    <p>Mrityunjay</p> 
                    <p>Kumar</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>500k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>23k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="man-1.png" />
                    </div>
                    <p>Jalla</p> 
                    <p>Lohith</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>240k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>400k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="man-2.png" />
                    </div>
                    <p>Rajeev</p> 
                    <p>Kumar</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>56k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>23k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="man-3.png" />
                    </div>
                    <p>Ahmad</p> 
                    <p>Raza</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>91k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>820k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="woman.png" />
                    </div>
                    <p>Gaytri</p> 
                    <p>Pandit</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>240k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>220k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="woman-1.png" />
                    </div>
                    <p>Ganga</p> 
                    <p>Vyom</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>519k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>52k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="profile.png" />
                    </div>
                    <p>Puneet</p> 
                    <p>Superstar</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>140k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>5k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="boy.png" />
                    </div>
                    <p>Anurag</p> 
                    <p>Ojha</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>37k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>54k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    {/* new discussions */}

    <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
                <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
                    <div className='border-b border-blue-400 pb-1'>
                    <img className='h-8 w-8  ' src="human.png" />
                    </div>
                    <p>Denisha</p> 
                    <p>Vallapu</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-3'>
                        <details class="border-b border-gray-300 py-4 text-base ">
                            <summary class="flex justify-between items-center cursor-pointer">
                                What's the best way to prepare for coding interviews?
                            </summary>
                            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
                        </details>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-1' src="like.png"/></button>
                            <p className='font-myfont1 text-lg mr-3'>50k+</p>
                            <button><img className='h-5 w-5 mr-1' src="up-arrow.png" /></button>
                            <p className='font-myfont1 text-lg'>48k+</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button><img className='h-5 w-5 mr-3' src="up-arrow.png" /></button>
                            <button><img className='h-5 w-5 mr-3' src="down.png" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}