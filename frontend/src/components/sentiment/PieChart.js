import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Doughnut } from 'react-chartjs-2';
//import {Card} from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

ChartJS.register(ArcElement, Tooltip, Legend);




function PieChart({results}) {
   
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
        <>
            
        </>
    )
}
export default PieChart;
