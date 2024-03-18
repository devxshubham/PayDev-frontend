

export const SendMoney= () =>{
    return <div className="flex h-[100dvh] justify-center bg-gray-300 items-center">
        <div className="flex flex-col gap-12 box-shadow bg-white p-9 rounded-md w-[400px]">
            <div className="text-center text-[30px] font-bold">
                Send Money
            </div>
            <div className="flex flex-col justify-center gap-4">
                <div className="flex leading-3 gap-4 items-center">
                    <div className="rounded-[100%] p-4 bg-green-400">S</div>
                    <div className="font-semibold text-[20px]">
                        Friend's Name
                    </div>
                </div>
                <div>
                    Amount (in Rupees)
                </div>
                <div>
                    <input className="w-full border p-2 rounded outline-none items-start" type="text"  placeholder="Enter amount"/>
                </div>
                <button className="w-full p-2 text-white rounded bg-green-400">Send</button>
            </div>
        </div>
    </div>
}