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
import { PolarArea } from 'react-chartjs-2';

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
    let options = {}

    
    let numOfSources =  Object.keys(source).length
    if(source){

        options = {
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
              },
            },
          };

        data = {
            labels: Object.keys(source),
            datasets: [
              {
                label: 'No of tweets',
                data: Object.values(source) ,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
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
            <div className="border border-sky-500 w-fit"  style={{ width:'60rem'}}>
                <Bar data={data} options={options}/>
            </div>
        </>
            
    ):
    (
        <>

        </>
    )
}
export default BarChart
