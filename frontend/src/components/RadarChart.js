import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
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
    console.log(info)
    return(info)?
    (
        <>
            <h1 className = "text-2xl text-pink-600" >Trend Info</h1>
            {/* <div className="shadow-2xl rounded-lg ..."  style={{ width: '50rem'}}>
                <div className="d-flex">
                  <div className="" style={{ width: '30rem'}}>
                      <Radar data={data} options={{
                          responsive: true,
                          maintainAspectRatio: true,
                      }}/>
                  </div>
                      <div className = "pt-20"style={{ width: '10rem'}}>
                          <h1 className = "text-2xl text-pink-600">
                              Public Metrics
                          </h1>
                          <p>Metrics' totals that are available for anyone to access on Twitter, such as number of likes and number of Retweets</p>
                    </div>
                </div>
            </div> */}
            <Container>
              <Row className="shadow-2xl rounded-lg ..." > 
                <Col xs={8}>
                    <div className="" style={{ width: '30rem'}}>
                        <Radar data={data} options={{
                            responsive: true,
                            maintainAspectRatio: true,
                        }}/>
                  </div>
                </Col>
                <Col>
                    <div>
                          <h1 className = "text-2xl text-pink-600 pt-20">
                              Public Metrics
                          </h1>
                          <p>Metrics' totals that are available for anyone to access on Twitter, such as number of likes and number of Retweets</p>
                    </div>
                </Col>
              </Row>
            </Container>
            
        </>
            
    ):
    (
        <div>

        </div>
    )
}
export default RadarChart
