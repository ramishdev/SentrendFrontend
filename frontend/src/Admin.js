import React from "react";
// reactstrap components
import Dashboard from "./components/Dashboard"
import DashboardInfo from "./components/DashboardInfo"

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Admin(){
    return(
        <div className="" >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard/>}>
                        <Route path="Trend/:id/*" element={<DashboardInfo/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Admin;