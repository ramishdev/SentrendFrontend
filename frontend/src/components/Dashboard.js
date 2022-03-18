import React from 'react';
import Sidebar from "./Sidebar"
import MyNavbar from './Navbar'
import {Outlet} from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className="d-flex" style={{height: '100vh',overflow: 'auto'}} >
            <div className="">
                <Sidebar/>
            </div>
            <div style={{height:'100%',width:'100vw'}}>
                <MyNavbar/>
                <div>
                    <Outlet/>
                </div>
            </div>
            
            
        </div>
    );
}

export default Dashboard;