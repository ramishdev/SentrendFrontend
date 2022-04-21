import React from 'react';

import { useOutletContext } from "react-router-dom";
import DoughnutChart from "./DoughnutChart"

import TabsInterface from "./TabsInterface"
const DashboardInfo = () => {
    //const trendinfo = useOutletContext()

    return (
        <div>
            <div>
                <TabsInterface/>
            </div>
          
        </div>
    );
}

export default DashboardInfo;