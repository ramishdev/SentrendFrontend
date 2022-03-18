import React from 'react';
import Sidebar from "./Sidebar"
import { Routes,Route,useParams } from 'react-router-dom'
const Hello= ()=> {
    return(
        <div>
            <h2>Hello</h2>
        </div>
    );
}
const DashboardInfo = () => {
    const { id } = useParams()
    return (
        <div className="d-flex justify-content-center">
            <h2>{id}</h2>
            {console.log(id)}
        </div>
    );
}

export default DashboardInfo;