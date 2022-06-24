import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Doughnut } from 'react-chartjs-2';
//import {Card} from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
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
        labels: ['Subjective','Objective'],
        datasets: [
            {
                label: '# of Votes',
                data: [results?.sub_count, results?.obj_count],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
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
                        <Doughnut data={data2} options={{
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
