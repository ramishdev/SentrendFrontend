import React,{useState} from 'react';
import Sidebar from "./Sidebar"
import MyNavbar from './Navbar'
import {Outlet} from 'react-router-dom'
const Dashboard = () => {
    const [isloading,setloading] = useState(false);
    if(isloading === true) {
        return <h1>Loading</h1>;
    }
    return (
        <div className="d-flex" style={{height: '100vh',overflow: 'auto'}} >
            <div className="">
                <Sidebar setloading={setloading}/>
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