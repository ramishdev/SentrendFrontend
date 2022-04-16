import React from 'react';

import { useOutletContext } from "react-router-dom";
import DoughnutChart from "./DoughnutChart"
const DashboardInfo = () => {
    //const trendinfo = useOutletContext()

    return (
        <div>
            <div className="d-flex justify-content-center">
                <DoughnutChart/>
            </div>
        </div>
    );
}

export default DashboardInfo;