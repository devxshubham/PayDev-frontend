export const Signup = ()=>{
    return <div className="flex flex-col gap-5 border p-5 max-w-[300px]">
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-[30px]">Sign Up</h3>
            <p className="text-center text-gray-600">Enter your information to create an account</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col text-[#808080]  gap-1">
                <h2 className="font-semibold text-black">First Name</h2>
                <input className="border bg-transparent outline-none rounded py-1 px-2" type="text" placeholder="Shubham"/>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Last Name</h2>
                <input className="border outline-none rounded py-1 px-2" type="text" placeholder="Dev"/>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Email</h2>
                <input className="border outline-none rounded py-1 px-2" type="text" placeholder="abc@gmail.com"/>
            </div>
            <div className="flex flex-col text-[#808080] gap-1">
                <h2 className="font-semibold text-black">Password</h2>
                <input className="border outline-none rounded py-1 px-2" type="password" placeholder=""/>
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <button className="py-1 w-full rounded bg-black text-white">Sign Up</button>
            <p className="font-[500]">Already have an account?  <button
                className="underline">Login</button></p>
        </div>
    </div>
}