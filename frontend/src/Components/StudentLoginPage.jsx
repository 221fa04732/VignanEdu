import { useRecoilState, useRecoilValue } from "recoil"
import { LoginPageStatusAtom } from "../Atoms/LoginPageStatusAtom"
import { SignupPageStatusAtom } from "../Atoms/SignupPageStatusAtom"
import { LoginStatusAtom } from "../Atoms/LoginStatusAtom"
import { UserdataAtom } from "../Atoms/UserdataAtom"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"

import React, { useState } from 'react';

export default function StudentLoginPage()
{
    const [signuppagestatus, setsignuppagestatus] = useRecoilState(SignupPageStatusAtom);
    const [loginpagestatus, setloginpagestatus] = useRecoilState(LoginPageStatusAtom);
    const [loginstatus, setloginstatus] = useRecoilState(LoginStatusAtom);
    const [userdata, setUserdata] = useRecoilState(UserdataAtom);
    const lightdarkmodevalue = useRecoilValue(LightDarkModeAtom);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="p-6 rounded w-myl1 border border-blue-500">
                <form onSubmit={handleSubmit} >
                    <h2 className={`text-2xl mb-4 flex justify-center font-myfont1 underline ${lightdarkmodevalue === 1 ? 'text-gray-400' : 'text-black'}`}>Student Login</h2>
                    <div className="mb-4 ">
                        <label htmlFor="email" className="block text-gray-500 ">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border-2 border-blue-500 rounded mt-1 "
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
                            const response = await fetch("http://localhost:3000/student/login", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: email,
                                    password: password,
                                }),
                            });
                            const data = await response.json(); 
                            alert(data.message);
                            if (response.ok) {
                                setUserdata({
                                    type: "Student",
                                    username: data.userFound.name,
                                    email: data.userFound.email
                                })
                                setEmail('')
                                setPassword('')
                                setloginstatus(1)
                                setloginpagestatus(0)
                            } 
                        } 
                        catch (error) {
                            alert("An error occurred");
                        }
                    }} type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-4">Login</button>
                </form>
                <p className={`${lightdarkmodevalue === 1 ? 'text-gray-400' : 'text-black'}`}>Don't have account ? <button onClick={()=>{
                    setEmail('')
                    setPassword('')
                    setloginpagestatus(0)
                    setsignuppagestatus(1)
                }} className="text-blue-600" >Create One</button></p>
            </div>
        </div>
    )
}