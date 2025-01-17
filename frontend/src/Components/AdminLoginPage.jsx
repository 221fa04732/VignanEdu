import { useRecoilState, useRecoilValue } from "recoil"
import { LoginPageStatusAtom } from "../Atoms/LoginPageStatusAtom"
import { LoginStatusAtom } from "../Atoms/LoginStatusAtom"
import { UserdataAtom } from "../Atoms/UserdataAtom"
import { LightDarkModeAtom } from "../Atoms/LightDarkModeAtom"
import {FloatNotificationAtom} from '../Atoms/FloatNotificationAtom';

import React, { useState } from 'react';

export default function StudentLoginPage()
{
    const [loginpagestatus, setloginpagestatus] = useRecoilState(LoginPageStatusAtom);
    const [loginstatus, setloginstatus] = useRecoilState(LoginStatusAtom);
    const [userdata, setUserdata] = useRecoilState(UserdataAtom);
    const lightdarkmodevalue = useRecoilValue(LightDarkModeAtom);
    const [floatNotification, setFloatNotification] = useRecoilState(FloatNotificationAtom)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setotp] = useState('');
    const [secrete, setsecrete] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="p-6 rounded  w-myl1 border border-blue-500">
                <form onSubmit={handleSubmit} >
                    <h2 className={`text-2xl mb-4 flex justify-center font-myfont1 underline ${lightdarkmodevalue === 1 ? 'text-gray-400' : 'text-black'}`}>Admin Login</h2>
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
                    <div className="mb-4">
                        <label htmlFor="secrete" className="block text-gray-500">Secrete Pin</label>
                        <input
                            type="text"
                            id="secrete"
                            value={secrete}
                            onChange={(e) => setsecrete(e.target.value)}
                            className="w-full p-2 border-2 border-blue-500 rounded mt-1"
                            required
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-gray-500">OTP</label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setotp(e.target.value)}
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
                            const response = await fetch("https://vignanedu-qnil.onrender.com/admin/login", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: email,
                                    password: password,
                                    secrete: secrete,
                                    otp: otp
                                }),
                            });
                            const data = await response.json(); 
                            if (response.ok) {
                                setUserdata({
                                    type: "Admin",
                                    email: data.userFound.email
                                })
                                setEmail('')
                                setPassword('')
                                setsecrete('')
                                setotp('')
                                setloginstatus(1)
                                setloginpagestatus(0)
                                setFloatNotification({
                                    message: data.message,
                                    colour: 0,
                                    show: true
                                })
                            } 
                            else {
                                setFloatNotification({
                                    message: data.message,
                                    colour: 1,
                                    show: true
                                })
                            }
                        } 
                        catch (error) {
                            setFloatNotification({
                                message: "Server Error",
                                colour: 1,
                                show: true
                            })
                        }
                    }} type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-4">Login</button>
                </form>
            </div>
        </div>
    )
}