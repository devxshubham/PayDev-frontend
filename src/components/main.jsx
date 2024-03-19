import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Main = () => {
    const navigate = useNavigate();

    const [users, setUsers ] = useState([]);
    const [filter, setFilter ] = useState("")
    useEffect( ()=> {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
            },{
                headers : {
                    'Content-Type' : 'multipart/form-data',
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( res => {
                setUsers(res.data.users);
            })
            .catch( err =>{
                console.log(err);
            })
        },[filter]);

    const[sender, setSender] = useState("");
    useEffect( ()=> {
        axios.get('http://localhost:3000/api/v1/account/balance',{
            headers : {
                'Content-Type' : 'multipart/form-data',
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
            })
            .then( (res)=>{
                setSender(res.data)
            })
            .catch( err =>{
                console.log(err);
            })
        },[]);
    

    return <main className="flex flex-col gap-4 p-5">
        <div className="font-bold text-[16px]">
            Your Balance : {sender.balance}
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <div className="font-bold">Users</div>
                <input onChange={(e)=>{
                    setFilter(e.target.value);
                }} className="border w-[100%] p-1 rounded outline-none" type="text" placeholder="Search users..."/>
            </div>
            <div>
                {users.map( user => {
                    return <div key={user._id} className="flex justify-between m-2 items-center leading-5">
                        <div className="flex items-center gap-2">
                            <div className="p-2 w-9 h-9 rounded-full text-center leading-4 bg-slate-300">{user.firstName[0]}</div>
                            <div className="font-semibold">
                                {user.firstName} {user.lastName}
                            </div>
                        </div>
                        <button onClick={()=>{
                            navigate(`/send?_id=${user._id}&name=${user.firstName}`)
                        }} className="py-1 px-2 bg-black text-white rounded">Send Money</button>
                    </div>
                })}
            </div>
        </div>
    </main>
}