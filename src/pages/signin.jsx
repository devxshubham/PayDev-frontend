import { useRef } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

import { Button } from "../components/button"
import { InputBox } from "../components/inputBox"

export const Signin = ()=>{
    const email = useRef("")
    const password = useRef("")

    const navigate = useNavigate();



    return <div className="flex bg-gray-300 justify-center items-center h-[100dvh]">
        <div className="flex flex-col gap-5 bg-white rounded-lg border p-5 max-w-[300px]">
            <div className="flex flex-col items-center">
                <h3 className="font-bold text-[30px]">Sign Up</h3>
                <p className="text-center text-gray-600">Enter your credentials to access your account</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col text-[#808080]  gap-1">
                    <h2 className="font-semibold text-black">Email</h2>
                    <InputBox onchange={(e)=>{
                        email.current = e.target.value;
                    }} place="abc@gmail.com"></InputBox>
                </div>
                <div className="flex flex-col text-[#808080] gap-1">
                    <h2 className="font-semibold text-black">Password</h2>
                    <InputBox onchange={e=>{
                    password.current = e.target.value;
                }} type={"password"}></InputBox>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button onclick={()=>{
                    console.log(email.current)
                        axios.post('http://localhost:3000/api/v1/user/signin',
                        {
                            email : email.current,
                            password : password.current
                        })
                        .then( (res) => {
                            navigate('/dashboard')
                            localStorage.setItem('token', res.data.token)
                        })
                    }}
                    text="Sign In"></Button>
                <p className="font-[500]">Don't have an account?  <button
                    onClick={() => {
                        navigate('/signup')
                    }}
                    className="underline">Sign Up</button></p>
            </div>
        </div>
    </div>
}