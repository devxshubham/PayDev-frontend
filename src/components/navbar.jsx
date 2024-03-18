import { useState, useEffect } from "react";
import axios from 'axios'

export const Navbar = () => {
    const [user, setUser] = useState({
        firstName : ""
    })
    useEffect( ()=>{
        axios.get('http://localhost:3000/api/v1/user/',{
            headers : {
                'Content-Type' : 'multipart/form-data',
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
            })
            .then( (res)=>{
                setUser(res.data)
            })
            .catch( err =>{
                console.log(err);
            })
    },[])
    return <nav className="flex p-5 sticky top-0 left-0 right-0 bg-white border-b-[1.5px] justify-between items-center">
        <div className="font-bold text-[20px]">
            Payments App
        </div>
        <div className="flex items-center gap-3 leading-3">
            <div>Hello, {(user) ? user.firstName : ""}</div>
            <div className="rounded-[100%] p-2 bg-slate-400">{(user) ? user.firstName[0] : ""}</div>
        </div>
    </nav>
}