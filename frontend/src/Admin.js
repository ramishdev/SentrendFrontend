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
import SettingsPage from './pages/SettingsPage'
import NewCrawlerPage from './pages/NewCrawlerPage'

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
                        <Route element={<SettingsPage/>} path = "/settings">
                        </Route>
                        <Route path="/settings/new-crawler" element={<NewCrawlerPage/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}
export default Admin;