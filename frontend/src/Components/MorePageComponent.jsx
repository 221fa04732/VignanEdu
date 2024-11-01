import React from 'react';
import { useRecoilState } from 'recoil';
import { LightDarkModeAtom } from '../Atoms/LightDarkModeAtom';

export default function MorePageComponent()
{
    
    const [lightdarkmodevalue, setlightdarkmodevalue] = useRecoilState(LightDarkModeAtom)   

    const resources = [
      { id: 1, title: "Study Material", description: "Essential topics and guides", icon: "📘" },
      { id: 2, title: "E-Books", description: "Downloadable PDF resources", icon: "📚" },
      { id: 3, title: "Articles", description: "Curated articles for learning", icon: "📰" },
      { id: 4, title: "Reference Links", description: "External resources and links", icon: "🔗" },
    ];

    const careerResources = [
        { id: 1, title: "Job Search", description: "Find job listings and opportunities", icon: "💼" },
        { id: 2, title: "Resume Building", description: "Craft a resume that stands out", icon: "📄" },
        { id: 3, title: "Interview Preparation", description: "Prepare for common interview questions", icon: "🤝" },
        { id: 4, title: "Networking", description: "Connect with industry professionals", icon: "🌐" },
    ];

    const testimonials = [
        {
          name: "John Doe",
          message: "Vignan University provided me with a fantastic learning environment. The faculty is supportive, and the campus is vibrant!",
          image: "man-1.png",
        },
        {
          name: "willy Smith",
          message: "The cultural events at Vignan, like Sankranthi, are amazing! They truly showcase our heritage and bring everyone together.",
          image: "woman.png",
        },
        {
          name: "Rahul Kumar",
          message: "I had a wonderful experience at Vignan. The hands-on learning approach and industry exposure prepared me well for my career.",
          image: "man-2.png",
        },
        {
            name:"Lohith Jalla",
            message :"Vignan University provided me with a fantastic learning environment.I had a wonderful experience at Vignan",
            image: "man-1.png"
        },
        {
            name:"Mrityunjay Kumar",
            message :"Vignan University provided me with a fantastic learning environment.I had a wonderful experience at Vignan",
            image: "man-3.png"
        },
        {
            name:"Gayatri",
            message :"Vignan University provided me with a fantastic learning environment.I had a wonderful experience at Vignan",
            image: "woman-1.png"
        }
      ];
  
    return (
        <div className={`font-myfont1 py-8 ${lightdarkmodevalue === 1 ? 'bg-stone-900'  : 'bg-white'} ${lightdarkmodevalue === 1 ? 'text-gray-400' : 'text-black'}`}>
            <h2 className="text-4xl font-semibold text-center  mb-8  text-blue-500">
                <spam className ={`border-b-2 ${lightdarkmodevalue === 1 ? 'border-white'  : 'border-black'}`}> Events </spam>
                </h2> 
            <div className="flex flex-col justify-center items-center gap-10">
                {/* ****************Mahotsav*****************  */}
                <div className="flex justify-center items-center gap-10 p-10 border-b-2 border-white">
                    <div className="">
                        <video src="vignan-mahotsav.mp4" controls autoPlay muted loop className="rounded-2xl"></video>
                    </div>
                    <div className="w-7/12 flex flex-col justify-center items-center p-5">
                        <div className="m-5">
                            <h1 className="text-3xl">Vignan's Mahotsav</h1>
                        </div>
                        <div className="">
                            Vignan Mahotsav is the annual cultural and technical fest hosted by Vignan's University, attracting students from across the nation. It offers a platform for students to showcase their talents in diverse fields through competitions, workshops, and cultural events, promoting innovation, collaboration, and personal growth in a vibrant and festive atmosphere.
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-10 p-10 border-b-2 border-white">
                    <div className="w-7/12  flex flex-col justify-center items-center p-5">
                        <div className="m-5">
                            <h1 className=" text-3xl">Vignan Schools Independence </h1>
                        </div>
                        <div className="">
                            Independence Day at Vignan Schools is celebrated with great enthusiasm and patriotism. The event includes flag hoisting, cultural performances, and speeches that honor India's freedom fighters and instill a sense of national pride. Students participate in dances, skits, and songs, celebrating the country's heritage and remembering the sacrifices made for independence.
                        </div>
                    </div>
                    <div className="">
                        <video src="vignan-independence.mp4" controls autoPlay muted loop className="rounded-2xl"></video>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-10 p-10">
                    <div className="">
                        <video src="vignan-sankranti.mp4" controls autoPlay muted loop className="rounded-2xl"></video>
                    </div>
                    <div className="w-7/12  flex flex-col justify-center items-center p-5">
                        <div className="m-5">
                            <h1 className=" text-3xl">Sankranthi in Vignan University</h1>
                        </div>
                        <div className="">
                            Sankranthi at Vignan University is celebrated with festive zeal, showcasing the rich cultural heritage of India. The celebrations include traditional activities like rangoli competitions, kite flying, folk dances, and festive foods. Students and faculty come together to enjoy the harvest festival, fostering a sense of unity and cultural pride across the campus.
                        </div>
                    </div>
                </div>
            </div>

            {/* *******************resource library****************** */}
            <h2 className="text-4xl font-semibold text-center  px-4 my-8">Resource Library</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 ll:grid-cols-4 gap-10 mb-16 m-10">
                {resources.map((resource) => (
                    <div key={resource.id} className=" shadow-lg rounded-2xl p-6 transform border-2 border-grey-400 hover:border-blue-400 transition-transform duration-300">
                        <div className="flex items-center text-blue-600 mb-4 text-2xl">
                            <span className="mr-4">{resource.icon}</span>
                            <h3 className="text-xl font-medium text-grey-400">{resource.title}</h3>
                        </div>
                        <p className="">{resource.description}</p>
                        <button className="border-2 p-2 w-48 mt-2 text-xl rounded-2xl hover:bg-slate-50 hover:text-slate-950 transition-colors">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>

            {/* *******************************Careers************************* */}
            <h2 className="text-4xl font-semibold font-myfont1 text-center  mb-8">Career Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 ll:grid-cols-4 gap-10 m-10">
                {careerResources.map((resource) => (
                    <div key={resource.id} className=" shadow-lg rounded-2xl p-6 transform border-2 border-grey-400 hover:border-blue-400 transition-transform duration-300">
                        <div className="flex items-center text-blue-600 mb-4 text-2xl">
                            <span className="mr-4">{resource.icon}</span>
                            <h3 className="text-xl font-medium text-grey-400">{resource.title}</h3>
                        </div>
                        <p className="">{resource.description}</p>
                        <button className="border-2 p-2 w-48 mt-2 text-xl  rounded-2xl hover:bg-slate-50 hover:text-slate-950 transition-colors">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>

            {/* ********************Testimonials***************** */}
            <div className="px-4 py-8">
                <h2 className="text-4xl font-semibold text-center  mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 p-10 gap-10 sm:grid-cols-2 ll:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div className="w-full flex mb-6 border-2 p-5 rounded-2xl hover:border-blue-400" key={index}>
                            <div className="flex-shrink-0">
                                <img src={testimonial.image} className="w-16 h-16 rounded-full mr-4" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-blue-400 font-semibold">{testimonial.name}</p>
                                <p className="">{testimonial.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-center  mb-8">Feedback Form</h2>
            <div className="flex justify-center items-center">
                <div className="w-9/12 border-2 p-10  rounded-2xl">
                    <form className="space-y-4">
                        <div>
                            <label className="block " htmlFor="name">Name</label>
                            <input type="text" id="name" className={`w-full p-2 rounded-2xl border-2 border-gray-400 ${lightdarkmodevalue === 1 ? 'bg-stone-900'  : 'bg-white'}`} required />
                        </div>
                        <div>
                            <label className="block " htmlFor="RegNum">Register Number</label>
                            <input type="text" id="RegNum" className={`w-full p-2 rounded-2xl border-2 border-gray-400 ${lightdarkmodevalue === 1 ? 'bg-stone-900'  : 'bg-white'}`} required />
                        </div>
                        <div>
                            <label className="block " htmlFor="message">Feedback</label>
                            <textarea id="message" className={`w-full p-2 rounded-2xl border-2 border-gray-400 ${lightdarkmodevalue === 1 ? 'bg-stone-900'  : 'bg-white'}`} rows="4" required></textarea>
                        </div>
                        <div className="text-xl ">
                            <label className="block  mb-2">Rating</label>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <input type="radio" name="rating" value={5} className="mr-2" />
                                    <label>Excellent</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="rating" value={4} className="mr-2" />
                                    <label>Good</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="rating" value={3} className="mr-2" />
                                    <label>Average</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="rating" value={2} className="mr-2" />
                                    <label>Poor</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="rating" value={1} className="mr-2" />
                                    <label>Very Poor</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="border-2 p-2 w-48 mt-2 text-xl  rounded-2xl hover:bg-slate-50 hover:text-slate-950 transition-colors">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </div>
);
};
