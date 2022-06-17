import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";


import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';


import { Radar } from 'react-chartjs-2';


import axios from '../hooks/axios.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



function RadarChart({info}) {

    let data = {}
    if(info){
        data = {
            labels: Object.keys(info),
            datasets: [
              {
                label: 'No of tweets',
                data: Object.values(info) ,
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

    return(info)?
    (
        <>
            <h1>Trend Info</h1>
            <div className="border border-sky-500 inline-block " style={{ width: '25rem'}}>
                <Radar data={data} options={{
                    responsive: true,
                    maintainAspectRatio: true,
                }}/>
            </div>
        </>
            
    ):
    (
        <div>

        </div>
    )
}
export default RadarChart
