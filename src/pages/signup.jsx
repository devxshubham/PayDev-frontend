import { Button } from "../components/button";
import { InputBox } from "../components/inputBox";


export const Signup = ()=>{
    const firstName = "";
    const lastName = "";
    const email = "";
    const password = "";

    return <div className="flex flex-col gap-5 border p-5 max-w-[300px]">
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-[30px]">Sign Up</h3>
            <p className="text-center text-gray-600">Enter your information to create an account</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col text-[#808080]  gap-1">
                <h2 className="font-semibold text-black">First Name</h2>
                <InputBox place="Shubham"></InputBox>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Last Name</h2>
                <InputBox place="Dev"></InputBox>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Email</h2>
                <InputBox place="abc@gmail.com"></InputBox>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Password</h2>
                <input className="border outline-none rounded py-1 px-2" type="password" placeholder=""/>
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            
            <Button text="Sign Up"></Button>
            <p className="font-[500]">Already have an account?  <button
                className="underline">Login</button></p>
        </div>
    </div>
}