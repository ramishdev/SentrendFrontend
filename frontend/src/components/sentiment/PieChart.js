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
                    'rgba(0, 200, 0, 0.5)',
                    'rgba(233, 75, 60, 1.00)',
                    'rgba(54, 162, 235, 1)',
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
                    <h1 className = "text-2xl text-sky-600" >Trend Polarity</h1>
                    <div className="shadow-2xl rounded-lg ...">
                        <div className="d-flex">
                            <div style={{ width: '20rem' }}>
                                <Pie data={data1} options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                }}/>
                            </div>
                            <div >
                                <h1 className = "text-2xl text-sky-600">
                                    Sentiment
                                </h1>
                                <p>Tweet source labels.
                                    Tweet source labels help you better understand how a Tweet was posted.
                                    This additional information provides context about the Tweet and its author</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h1 className = "text-2xl text-pink-600">Trend Subjectivity</h1>
                    <div className="shadow-2xl rounded-lg ...">
                        <div className="d-flex">
                            <div  style={{ width: '20rem' }}>
                                <Doughnut data={data2} options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                }}/>
                            </div>
                            <div >
                                <h1 className = "text-2xl text-pink-600">
                                    Subjectivity
                                </h1>
                                <p>An objective tweet conveys factual information, whereas a subjective tweet relays an opinion or belief</p>
                            </div>
                        </div>
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
