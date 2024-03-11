import { Button } from "../components/button"

export const Signin = ()=>{
    return <div className="flex bg-gray-500 justify-center items-center h-[100dvh]">
        <div className="flex flex-col gap-5 bg-white rounded-lg border p-5 max-w-[300px]">
            <div className="flex flex-col items-center">
                <h3 className="font-bold text-[30px]">Sign Up</h3>
                <p className="text-center text-gray-600">Enter your credentials to access your account</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col text-[#808080]  gap-1">
                    <h2 className="font-semibold text-black">Email</h2>
                    <InputBox place="abc@gmail.com"></InputBox>
                </div>
                <div className="flex flex-col text-[#808080] gap-1">
                    <h2 className="font-semibold text-black">Password</h2>
                    <input className="border outline-none rounded py-1 px-2" type="password" placeholder=""/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button text="Sign In"></Button>
                <p className="font-[500]">Don't have an account?  <button
                    className="underline">Sign Up</button></p>
            </div>
        </div>
    </div>
}