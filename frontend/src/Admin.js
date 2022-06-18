import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// reactstrap components
import 'bootstrap-icons/font/bootstrap-icons.css';



import Dashboard from "./components/Dashboard"
import DashboardInfo from "./components/DashboardInfo"
import {AuthProvider} from "./context/AuthContext"
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SettingsPage from './pages/SettingsPage'
import NewCrawlerPage from './pages/NewCrawlerPage'
import SearchPage from './pages/SearchPage'
import PrivateRoute from './utils/PrivateRoute'
import Error from './pages/NotFound'
import Unauthorized from './pages/Unauth'

import LandingPage from './pages/LandingPage'
import Testing from './pages/TestSockets'

function Admin(){
    return(
        <div className="" >
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}>
                            <Route path="/dashboard" element={<DashboardInfo/>}/>
                        </Route>
                        <Route path = "/login" element={<LoginPage/>}/>
                        <Route path = "/register" element={<RegisterPage/>}/>
                        <Route path = "/settings" element={<PrivateRoute><SettingsPage/></PrivateRoute>}/>
                        <Route path = "/settings/new-crawler" element={<PrivateRoute><NewCrawlerPage/></PrivateRoute>}/>
                        <Route path = "/search" element={<PrivateRoute><SearchPage/></PrivateRoute>}/>
                        <Route path = "/Unauthorized" element={<Unauthorized/>}/>
                        <Route path = "/Testing" element={<Testing/>}/>
                        <Route path = "*" element={<Error/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}
export default Admin;