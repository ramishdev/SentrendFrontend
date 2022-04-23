import React,{useState} from 'react';
import Sidebar from "./Sidebar"
//import Sidebar from "./Sidebar-old"

import MyNavbar from './Navbar'
import {Outlet} from 'react-router-dom'
//import { createContext } from 'react'

//export const trendContext = createContext()

const Dashboard = () => {
    const [data,setdata] = useState();
    /*if(isloading) {
        return <h1>Loading</h1>;
    }*/
    /*let contextData = {
        data : data,
        setdata: setdata,npm
    }*/
    return (
            <div className="d-flex" >
                <div className="h-100 d-flex">
                    <Sidebar setdata={setdata}/>
                </div>
                <div style={{height:'100%',width:'100vw'}}>
                    <MyNavbar/>
                    <div>
                        <Outlet context={data}/>
                    </div>
                </div>
            </div>
    );
}
export default Dashboard;
