import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Doughnut } from 'react-chartjs-2';
//import {Card} from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useOutletContext } from "react-router-dom";
import axios from '../hooks/axios.js'

ChartJS.register(ArcElement, Tooltip, Legend);




function PieChart() {
    const trendinfo = useOutletContext()
    const [results, setResults] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchdata = async () => {
            setloading(true)
            try{
                const response = await axios.get(trendinfo?.url + 'sentiment/', {
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
        else{
            setResults({})
        }
        return () => controller?.abort();
    }, [trendinfo])
    
    const data1 = {
        labels: ['Positive','Negative','Neutral'],
        datasets: [
            {
                label: '# of Votes',
                data: [results?.pos_pol_count, results?.neg_pol_count, results?.neu_pol_count],
                backgroundColor: [
                    'rgba(255, 214, 98, 1.00)',
                    'rgba(233, 75, 60, 1.00)',
                    'rgba(0, 83, 156, 1.00)'
                ],
                borderWidth: 2,
            }
        ]
    };
    const data2 = {
        labels: ['Positive','Negative','Neutral'],
        datasets: [
            {
                label: '# of Votes',
                data: [results?.pos_sub_count, results?.neg_sub_count, results?.neu_sub_count],
                backgroundColor: [
                    'rgba(255, 214, 98, 1.00)',
                    'rgba(233, 75, 60, 1.00)',
                    'rgba(0, 83, 156, 1.00)'
                ],
                borderWidth: 2,
            }
        ]
    };

    if(loading){
        return (
            <div >
                <h2>Loading</h2>
            </div>
        );
    }
    return (results && Object.keys(results).length > 0)?
    ( 
        <div>
            <Row>
                <Col >
                    <h1 >Trend Polarity</h1>
                    <div className="border border-sky-500 inline-block ..." style={{ width: '15rem' }}>
                        <Pie data={data1} options={{
                            responsive: true,
                            maintainAspectRatio: true,
                        }}/>
                    </div>
                </Col>
                <Col>
                    <h1>Trend Subjectivity</h1>
                    <div className="border border-sky-500 w-60">
                        <Pie data={data2} options={{
                            responsive: true,
                            maintainAspectRatio: true,
                        }}/>
                    </div>
                </Col>
            </Row>
        </div>
    ):
    (
        <div>
            
        </div>
    )
}
export default PieChart;
