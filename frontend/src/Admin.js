import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// reactstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



import Dashboard from "./components/Dashboard"
import DashboardInfo from "./components/DashboardInfo"
import {AuthProvider} from "./context/AuthContext"
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function Admin(){
    return(
        <div className="" >
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}>
                            <Route path="/" element={<DashboardInfo/>}/>
                        </Route>
                        <Route element={<LoginPage/>} path = "/login"/>
                        <Route element={<RegisterPage/>} path = "/register"/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}
export default Admin;