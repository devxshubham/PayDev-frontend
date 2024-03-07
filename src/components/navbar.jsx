export const Navbar = () => {
    return <nav className="flex p-5 sticky top-0 left-0 right-0 bg-white border-b-[1.5px] justify-between items-center">
        <div className="font-bold text-[20px]">
            Payments App
        </div>
        <div className="flex items-center gap-3 leading-3">
            <div>Hello, User</div>
            <div className="rounded-[100%] p-2 bg-slate-400">U</div>
        </div>
    </nav>
}