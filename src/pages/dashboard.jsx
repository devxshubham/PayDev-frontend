import { useState, useEffect } from "react";
import axios from 'axios'
import { Navbar } from "../components/navbar"
import { Main } from "../components/main"


export const Dashboard = ()=>{
    
    return <div>
        <Navbar ></Navbar>
        <Main ></Main>
    </div>
    
}