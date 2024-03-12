import { useRef } from "react";

import { Button } from "../components/button";
import { InputBox } from "../components/inputBox";


export const Signup = ()=>{
    const firstName = useRef("");
    const lastName = useRef("");
    const email = useRef("");
    const password = useRef("");

    return <div className="flex justify-center items-center bg-gray-400 h-[100vh]">
        <div className="flex bg-white rounded-lg flex-col gap-5 border p-5 max-w-[300px]">
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-[30px]">Sign Up</h3>
            <p className="text-center text-gray-600">Enter your information to create an account</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col text-[#808080]  gap-1">
                <h2 className="font-semibold text-black">First Name</h2>
                <InputBox onChange={ e => {
                    firstName.current = e.target.value ;
                }} place="Shubham"></InputBox>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Last Name</h2>
                <InputBox onChange={ e => {
                    lastName.current = e.target.value ;
                }} place="Dev"></InputBox>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Email</h2>
                <InputBox onChange={ e => {
                    email.current = e.target.value ;
                }} place="abc@gmail.com"></InputBox>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Password</h2>
                <InputBox onChange={ e => {
                    password.current = e.target.value ;
                }} type={"password"} place={""}></InputBox>
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            
            <Button onClick={()=>{
                    console.log(firstName.current)
                    console.log(lastName.current)
                    console.log(email.current)
                    console.log(password.current)
                }} text="Sign Up"></Button>
            <p className="font-[500]">Already have an account?  <button
                className="underline">Login</button></p>
        </div>
    </div>
    </div>
}