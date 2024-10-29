import { useRecoilValue } from "recoil";
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";
import CourseCardComponent from "./CoursesCardComponent";

export default function CoursesPageComponent()
{
    const lightDarkModeValue = useRecoilValue(LightDarkModeAtom)
    return(<div className={`${lightDarkModeValue === 1 ? 'bg-stone-900' : 'bg-white'} grid grid-cols-1 p-10 gap-8 xl:grid-cols-4 lg:grid-cols-2`}>
            <CourseCardComponent
                coursepic={"ai.jpg"}
                coursename={"Artificial Intelligence"}
                handy={"Advance Course"}
                rating={"3.1"}
                instructor={"Dr. TR Rajesh"}/>

                <CourseCardComponent
                coursepic={"c++.jpg"}
                coursename={"Programming in C++"}
                handy={"Basic Course"}
                rating={"5.5"}
                instructor={"Dr. G Balu"}/>

                <CourseCardComponent
                coursepic={"cn.jpg"}
                coursename={"Computer Networks"}
                handy={"Intermediate Course"}
                rating={"4.8"}
                instructor={"Dr. Maniknandan"}/>

                <CourseCardComponent
                coursepic={"dsa.jpg"}
                coursename={"Data Structures"}
                handy={"Basic Course"}
                rating={"4.5"}
                instructor={"Dr. G Balu"}/>


                <CourseCardComponent
                coursepic={"datascience.jpg"}
                coursename={"Data Science"}
                handy={"Advance Course"}
                rating={"3.1"}
                instructor={"Dr. Puneet Superstar"}/>

                <CourseCardComponent
                coursepic={"ml.jpg"}
                coursename={"Machine Learning"}
                handy={"Intermediate Course"}
                rating={"3.0"}
                instructor={"Dr. Saurabh Mandal"}/>

                <CourseCardComponent
                coursepic={"web.webp"}
                coursename={"Web Development"}
                handy={"Advance Course"}
                rating={"5.0"}
                instructor={"Shery Khandwal"}/>

                <CourseCardComponent
                coursepic={"mongo.jpg"}
                coursename={"MongoDB"}
                handy={"Advance Course"}
                rating={"2.1"}
                instructor={"Dr. Nagashwer Rao  "}/>

                <CourseCardComponent
                coursepic={"frontend.jpg"}
                coursename={"Frontend Development"}
                handy={"Basic Course"}
                rating={"4.8"}
                instructor={"Shery Khandwal"}/>

                <CourseCardComponent
                coursepic={"backend.png"}
                coursename={"Backend Development"}
                handy={"Advance Course"}
                rating={"3.7"}
                instructor={"Shery Khandwal"}/>
        
        </div>)
}