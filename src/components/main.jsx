export const Main = () => {
    return <main className="flex flex-col gap-4 p-5">
        <div className="font-bold text-[16px]">
            Your Balance : 5000
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <div className="font-bold">Users</div>
                <input className="border w-[100%] p-1 rounded outline-none" type="text" placeholder="Search users..."/>
            </div>
            <div>
                <div className="flex justify-between items-center leading-5">
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-slate-300">U1</div>
                        <div className="font-semibold">
                            User 1
                        </div>
                    </div>
                    <button className="py-1 px-2 bg-black text-white rounded">Send Money</button>
                </div>
            </div>
        </div>
    </main>
}