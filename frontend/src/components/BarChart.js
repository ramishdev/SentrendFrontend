import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import axios from '../hooks/axios.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



function BarChart({source}) {

    let data= {}
    if(source){

        data = {
            labels: Object.keys(source),
            datasets: [
              {
                label: 'No of tweets',
                data: Object.values(source) ,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
        };

    }

    // const data = {
        
    //     labels: results? Object.keys(results?.source) : ['a','b','c'],
    //     datasets: [
    //       {
    //         label: 'No of tweets',
    //         data:Object.values(results?.source) ,
    //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //         borderColor: 'rgba(255, 99, 132, 1)',
    //         borderWidth: 1,
    //       },
    //     ],
    // };


    return(source)?
    (

        <>
            <h1>Trend Sources</h1>
            <div className="border border-sky-500 w-fit"  style={{ height: '30rem'}}>
                <Bar data={data} options={{
                    responsive: true,
                    maintainAspectRatio: true,
                }}/>
            </div>
        </>
            
    ):
    (
        <>

        </>
    )
}
export default BarChart
