import React,{useState} from 'react';
import Sidebar from "./Sidebar"
//import Sidebar from "./Sidebar-old"

import MyNavbar from './Navbar'
import {Outlet} from 'react-router-dom'
//import { createContext } from 'react'

//export const trendContext = createContext()

const Dashboard = () => {
    const [data,setdata] = useState();
    const [pad,setpad] = useState(true);
    /*if(isloading) {
        return <h1>Loading</h1>;
    }*/
    /*let contextData = {
        data : data,
        setdata: setdata,npm
    }*/
    return (
            <div className="flex" >
                <Sidebar setdata={setdata} setpad={setpad}/>
                <div style={{height:'100%',width:'100vw'}} className={` ${ pad ? "visible sm:invisible sm:pl-72" : "pl-20 "} `}>
                    <MyNavbar/>
                    <Outlet context={data}/>
                </div>
            </div>
    );
}
export default Dashboard;
