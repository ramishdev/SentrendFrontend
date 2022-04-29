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


const axios = require('axios').default;

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



function RadarChart() {

    let data = {}
    const trendinfo = useOutletContext()
    const [results, setResults] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchdata = async () => {
            setloading(true)
            try{
                console.log(trendinfo?.trend_name)
                const response = await axios.get(trendinfo?.url + 'get_stats/', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    signal: controller.signal
                });
                if(response?.status === 200){
                    setResults(response?.data)
                }
            }
            catch(err){
                console.error(err.message);
                if(err.response.status === 400){
                    setResults({})
                }
                if(err.response.status === 404){
                    setResults({})
                }
            }
            setloading(false)

        }
        if(trendinfo){
            fetchdata();
        }
        return () => controller?.abort();
    }, [trendinfo])

    console.log(results)

    if(results.source){

        data = {
        
            labels: Object.keys(results.source),
            datasets: [
              {
                label: 'No of tweets',
                data: Object.values(results.source) ,
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


    if(loading){
        return (
            <div >
                <h2>Loading</h2>
            </div>
        );
    }

  return(results && Object.keys(results).length > 0)?
  (

        <div>
            <h1>Trend Sources</h1>
            <div className="border border-sky-500 inline-block " style={{ width: '25rem'}}>
                <Radar data={data} options={{
                    responsive: true,
                    maintainAspectRatio: true,
                }}/>
            </div>

        </div>
        

  ):
  (
      <div>

      </div>
  )
}
export default RadarChart
