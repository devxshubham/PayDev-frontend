export const Signup = ()=>{
    return <div className="border p-5 max-w-[300px]">
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-[30px]">Sign Up</h3>
            <p className="text-center text-gray-600">Enter your information to create an account</p>
        </div>
        <div>
            <div className="flex flex-col">
                <h2 className="font-semibold">First Name</h2>
                <input type="text" placeholder="Shubham"/>
            </div>
            <div>
                <h2>Last Name</h2>
                <input type="text" placeholder="Dev"/>
            </div>
            <div>
                <h2>Email</h2>
                <input type="text" placeholder="abc@gmail.com"/>
            </div>
            <div>
                <h2>Password</h2>
                <input type="password" placeholder=""/>
            </div>
        </div>
        <div>
            <button>Sign Up</button>
            <p>Already have an account? <a href="/">Login</a></p>
        </div>
    </div>
}