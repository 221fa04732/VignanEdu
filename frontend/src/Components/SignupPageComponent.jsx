import { useRecoilState, useRecoilValue } from "recoil";
import { LoginPageStatusAtom } from "../Atoms/LoginPageStatusAtom"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom";
import { SignupPageStatusAtom } from "../Atoms/SignupPageStatusAtom";
import {HireFacultyAtom} from "../Atoms/HireFacultyAtom";
import CloseIconComponent from "./CloseIconComponent";
import React, { useState } from 'react';

export default function SignupPageComponent() 
{    
    const [loginpagestatus, setloginpagestatus] = useRecoilState(LoginPageStatusAtom);
    const lightdarkmodevalue = useRecoilValue(LightDarkModeAtom);
    const [signuppagestatus, setsignuppagestatus] = useRecoilState(SignupPageStatusAtom);
    const [hirefaculty, sethirefaculty] = useRecoilState(HireFacultyAtom);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();   
    };
    
    return (
        <div className={`fixed ${signuppagestatus === 1 &&  hirefaculty ===0 ? 'block' : 'hidden'}  ${lightdarkmodevalue === 1 ? 'bg-stone-900' : 'bg-white'} text-black z-40 border-2 border-blue-500 w-full h-full flex flex-col items-center justify-center`}>
            <div className="absolute top-0 right-0">
                <CloseIconComponent />
            </div>
            <div className="p-6 rounded w-myl1 border border-blue-500">
                <form onSubmit={handleSubmit}>
                    <h2 className={`text-2xl mb-4 flex justify-center font-myfont1 underline ${lightdarkmodevalue === 1 ? 'text-gray-400' : 'text-black'}`}>Student SignUp</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-500">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border-2 border-blue-500 rounded mt-1"
                            required
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-500">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border-2 border-blue-500 rounded mt-1"
                            required
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-500">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border-2 border-blue-500 rounded mt-1"
                            required
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                    </div>
                    <button onClick={async()=>{
                        try {
                            const response = await fetch("http://localhost:3000/student/signin", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    name: username,
                                    email: email,
                                    password: password,
                                }),
                            });
                            const data = await response.json(); 
                            alert(data.message);
                            if (response.ok) {
                                setUsername('')
                                setEmail('')
                                setPassword('')
                                setsignuppagestatus(0)
                            } 
                        } 
                        catch (error) {
                            alert("An error occurred");
                        }
                    }} type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-4">Sign Up</button>
                </form>
                <p className={`${lightdarkmodevalue === 1 ? 'text-gray-400' : 'text-black'}`}>Already have account ? <button onClick={()=>{
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    setloginpagestatus(1)
                    setsignuppagestatus(0)
                }} className="text-blue-600" >Back to LogIn</button></p>
            </div>
        </div>
    );
}
