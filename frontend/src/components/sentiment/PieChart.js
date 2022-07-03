import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Doughnut } from 'react-chartjs-2';
//import {Card} from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

ChartJS.register(ArcElement, Tooltip, Legend);




function PieChart({results}) {


    const popover = (data,data2)=> (
        <Popover id="popover-basic">
                <>
                <Popover.Header as="h3">{data2}</Popover.Header>
                <Popover.Body>
                    {data}
                </Popover.Body>
                </>
        </Popover>
    );


    let totalPol = results?.pos_pol_count + results?.neg_pol_count + results?.neu_pol_count

    let totalSub = results?.obj_count + results?.sub_count

    let pos_pol_count = (results?.pos_pol_count /totalPol)*100
    let neg_pol_count = (results?.neg_pol_count /totalPol)*100
    let neu_pol_count = (results?.neu_pol_count /totalPol)*100

    let sub_count = (results?.sub_count/totalSub)*100
    let obj_count = (results?.obj_count/totalSub)*100
   
    const data1 = {
        labels: ['Positive','Negative','Neutral'],
        datasets: [
            {
                label: '# of Votes',
                data: [results?.pos_pol_count, results?.neg_pol_count, results?.neu_pol_count],
                backgroundColor: [
                    'rgba(0, 200, 0, 0.5)',
                    'rgba(255, 99, 132, 1)',
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
            <Row className= "p-5 border-y border-cyan-900">
                <Col className="relative">
                    <h1 className = "text-2xl font-bold" >Polarity</h1>
                    
                    <div className="shadow-2xl rounded-lg ...">
                        <div className="d-flex justify-center p-4">
                            <div style={{ width: '18rem' }}>
                                <Pie data={data1} options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                }}/>
                            </div>
                        </div>
                        <div className="absolute top-10 right-10">
                            <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={popover("An estimate of the emotion contained in the tweet's text","Sentiment")}>
                            <i class="bi bi-question-circle" style={{fontSize: "2rem"}}></i>
                            </OverlayTrigger>
                        </div>
    
                        <div className="d-flex justify-center">
                            <h1 className = "text-2xl text-green-500 px-4">
                                <i class="bi bi-emoji-smile-fill" style={{fontSize: "2rem"}}></i>
                                {pos_pol_count.toPrecision(3)}%
                            </h1>
                            <h1 className = "text-2xl text-pink-500 px-4">
                            <i class="bi bi-emoji-frown-fill" style={{fontSize: "2rem"}}></i>
                                {neg_pol_count.toPrecision(3)}%
                            </h1>
                            <h1 className = "text-2xl text-sky-600 px-4">
                            <i class="bi bi-emoji-neutral-fill" style={{fontSize: "2rem"}}></i>
                                {neu_pol_count.toPrecision(3)}%
                            </h1>
                            {/* <p>Tweet source labels.
                                Tweet source labels help you better understand how a Tweet was posted.
                                This additional information provides context about the Tweet and its author</p> */}
                        </div>
                    </div>
                </Col>
                <Col className =  "relative">
                    <h1 className = "text-2xl font-bold">Subjectivity</h1>
                    <div className="shadow-2xl rounded-lg ...">
                        <div className="d-flex justify-center p-4">
                            <div  style={{ width: '18rem' }}>
                                <Doughnut data={data2} options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                }}/>
                            </div>
                        </div>
                        <div className="absolute top-10 right-10">
                            <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={popover("An objective tweet conveys factual information, whereas a subjective tweet relays an opinion or belief","Opinion")}>
                            <i class="bi bi-question-circle" style={{fontSize: "2rem"}}></i>
                            </OverlayTrigger>
                        </div>
                        <div className="d-flex justify-center">
                            <h1 className = "text-2xl text-pink-500 px-4">
                            <i class="bi bi-signal" style={{fontSize: "2rem"}}></i>
                                {sub_count.toPrecision(3)}%
                            </h1>
                            <h1 className = "text-2xl text-sky-500 px-4">
                            <i class="bi bi-chat-right-quote-fill" style={{fontSize: "2rem"}}></i>
                                {obj_count.toPrecision(3)}%
                            </h1>
                            {/* <p>An objective tweet conveys factual information, whereas a subjective tweet relays an opinion or belief</p> */}
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
