import React from 'react';
import { useRecoilState } from 'recoil';
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom';

export default function HomePage() 
{

  const [lightdarkmode, setLightDarkMode] = useRecoilState(LightDarkModeAtom);

  return (<div className={`h-full w-full flex flex-col content-center items-center font-myfont1 ${lightdarkmode === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkmode === 1 ? 'text-gray-400' : 'text-black'} `}>
    <div className="flex content-start items-start">
      <p className="mt-1 text-3xl ">Learn what Matters <br /> <span className="text-5xl">Start Your <span className="text-6xl text-sky-400 border-b-2  border-sky-400 cursor-pointer font-medium">Learning</span>  Journey with </span><span className="text-5xl font-medium text-sky-400 border-b-2  border-sky-400 cursor-pointer">VignanEdu</span> .</p>
    </div>

    <div className=' w-5/6 h-full grid grid-cols-1 place-items-center'>
        <video className={`rounded-2xl w-5/6 mb-16 h-3/4 object-cover -m-2 ${lightdarkmode === 1 ? 'border-0' : 'border-2 border-blue-500'}`} src="vignan.mp4" controls autoPlay muted loop></video>
        <div className="p-5 mt-5 w-full flex flex-col justify-start border-l-2 border-b-2 rounded-2xl hover:border-blue-400 pl-5">
          <div>
            <div className='mb-5 flex items-center'>
              <p className=' text-2xl'>Vignan</p>
              <p className='text-blue-500 text-2xl'>Edu</p>
            </div>
            <p>This learning website for Vignan is designed to offer a comprehensive educational platform tailored to meet the needs of students, faculty, and alumni. It provides a centralized hub for accessing resources, course materials, and interactive learning tools that align with Vignan’s mission of fostering knowledge and skill development.With features like personalized learning paths, 24/7 access to study materials, and direct interaction with mentors, the platform aims to create an engaging, accessible, and efficient learning environment</p>
          </div>
        </div>
    </div>
          {/* *************************About Hackathon*********************** */}
    <div className="mt-20 w-5/6 h-60  flex content-center items-center gap-10  border-b-2 border-l-2 border-gray-200 hover:border-b-2 hover:border-l-2 rounded-2xl hover:border-blue-400 ">
        {/* **********************Hackathon Image****************************** */}
      <div className="w-60 m-6 ">
        <img src="Hackathon.jpg" alt="Hacathon" className='w-96 h-44 object-cover rounded-xl' />
      </div>
      {/* ************************Hackathon description************************ */}
      <div className="w-9/12 flex flex-col content-top items-center  font-myfont1">
        <h1 className="text-3xl">Vignan's Mega 48-hr Hackathon is here!</h1>
          <p className="m-2 text-xl text-center">Oct-28 to Oct-29 <br /> </p>
          <button className={'border-2 p-2 w-48 mt-2 text-xl rounded-2xl hover:border-blue-400'}>Register</button>
      </div>
    </div>

    {/* ************************** About Community************************* */}
    <p className="mt-16 text-5xl md:text-3xl sm:text-2xl font-myfont1">Connect with Our <span className="text-6xl text-sky-400 w-5/6">Community</span></p>
    <div className="m-8 w-10/12 border-b-2  border-l-2 border-gray-300 hover:border-b-2 hover:border-l-2 rounded-2xl hover:border-blue-400 grid grid-cols-1 gap-6 p-6 xl:grid-cols-4 md:grid-cols-2">
        {/* div-2 */}
        <div className="flex justify-center items-center rounded-2xl text-center text-5xl  cursor-pointer">
          <div className=" rounded-2xl font-medium w-10/12 h-28 flex justify-center items-center border-2 border-sky-400 text-foreground">
          <p className="text-3xl">20000+ <br /><span className="text-3xl">Students</span></p>
          </div>
        </div>
        {/* div-3 */}
        <div className="flex justify-center items-center rounded-2xl text-center  text-5xl cursor-pointer">
          <div className=" rounded-2xl font-medium w-10/12 h-28 flex justify-center items-center border-2 border-sky-400  text-foreground">
          <p className="text-3xl">10000+ <br /><span className="text-3xl">Aluminies</span></p>
          </div>
        </div>
        {/* div-1 */}
        <div className="flex justify-center items-center rounded-2xl text-center text-5xl   cursor-pointer">
          <div className="rounded-2xl font-medium w-10/12 h-28 flex justify-center items-center border-2  border-sky-400 text-foreground">
            <p className="text-3xl font-myfont1">5000+ <br /><span className="text-3xl ">Management</span></p>
          </div>
        </div>
        {/* div-4 */}
        <div className="flex justify-center items-center rounded-2xl text-center text-5xl cursor-pointer">
          <div className="rounded-2xl font-medium w-10/12 h-28 flex justify-center items-center border-2 border-sky-400 text-foreground ">
          <p className="text-3xl">72nd <br /><span className="text-3xl ">NIRF-rank</span></p>
          </div>
        </div>
      </div>
        {/* *****************Compare to others********************* */}
      <div class="m-10 w-5/6 text-foreground hover:border-blue-400  rounded-2xl p-8  border-l-2 border-b-2" >
        <h1 class="text-3xl font-bold mb-4 "><span className="text-5xl text-sky-400  cursor-pointer">VignanEdu </span>Advantages: Your Competitive Edge</h1>
        <p class="mb-6 ">Explore the unique benefits that set VignanEdu apart, giving you the competitive edge in your coding endeavors.</p>
      
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
        <div class="relative">
            <img aria-hidden="true" alt="Graph comparing VignanEdu and Other" src="graph-1.png" class="w-6/12/12" />
          </div>

          <ul class="list-disc list-inside mb-8 mt-10 px-5">
            <li class="flex items-center">
              <span class="text-green-500 mr-2">✔</span>
              <span>Structured + problem solving based</span>
            </li>
            <li class="flex items-center">
              <span class="text-green-500 mr-2">✔</span>
              <span>Fastest 1:1 doubt support</span>
            </li>
            <li class="flex items-center">
              <span class="text-green-500 mr-2">✔</span>
              <span>Integrated prep platform</span>
            </li>
            <li class="flex items-center">
              <span class="text-green-500 mr-2">✔</span>
              <span>Profile highlighted on naukri</span>
            </li>
          </ul>

        </div>
    </div>

    {/* *************************FAQ**************************** */}

    <div class="m-16 mx-auto py-10 px-5  border-l-2 border-b-2 rounded-2xl  border-gray-300 hover:border-blue-400 w-5/6">
        <h2 class="text-5xl font-bold mb-6 text-blue-400">Frequently Asked Questions</h2>
        <details class="border-b border-gray-300 py-4 text-xl ">
            <summary class="flex justify-between items-center cursor-pointer">
                What's the best way to prepare for coding interviews?
            </summary>
            <p class="mt-3  text-base px-10">Start with understanding the basics, practice consistently on coding platforms, and focus on problem-solving skills.</p>
        </details>

        <details class="border-b border-gray-300  py-4 text-xl curser-pointer">
            <summary class="flex justify-between items-center cursor-pointer">
                How should I approach system design interview questions?
            </summary>
            <p class="mt-3 text-base px-10">Learn the basics of system architecture, scalability, and distributed systems. Practice designing simple systems and gradually work on complex ones.</p>
        </details>

        <details class="border-b border-gray-300 py-4 text-xl curser-pointer">
            <summary class="flex justify-between items-center cursor-pointer">
                Are the DS sheet questions enough for interview preparation?
            </summary>
            <p class="mt-3 text-base px-10">The DS sheet is a great start, but supplementing it with additional problem-solving and mock interviews is recommended.</p>
        </details>

        <details class="border-b border-gray-300  py-4 text-xl curser-pointer">
            <summary class="flex justify-between items-center cursor-pointer">
                How do I get the most out of your website or VignanEdu community?
            </summary>
            <p class="mt-3 text-base px-10">Engage in discussions, participate in challenges, and consistently review resources to enhance your learning experience.</p>
        </details>

        <details class="border-b border-gray-300  py-4 text-xl curser-pointer">
            <summary class="flex justify-between items-center cursor-pointer">
                What are the essential things to cover in core coding subjects?
            </summary>
            <p class="mt-3 text-base px-10">Focus on data structures, algorithms, complexity analysis, and basic design principles for core coding proficiency.</p>
        </details>

        <details class="border-b border-gray-300  py-4 text-xl curser-pointer">
            <summary class="flex justify-between items-center cursor-pointer">
                Do you offer any mentorship or career guidance programs?
            </summary>
            <p class="mt-3 text-base px-10">Yes, we offer mentorship programs and career guidance tailored to help you succeed in your career path.</p>
        </details>
    </div>  

  </div>)    
}
