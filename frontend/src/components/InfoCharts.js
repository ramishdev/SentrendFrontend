import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import axios from '../hooks/axios.js'
import BarChart from "./BarChart"
import RadarChart from "./RadarChart"



function InfoCharts() {
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
        else{
            setResults({})
        }
        return () => controller?.abort();
    }, [trendinfo])
    

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
            <Row>
                <Col>
                    <RadarChart info={results?.public}/>
                </Col>
                <Col>
                    <BarChart source={results?.source}/>
                </Col>
            </Row>
        </div>
            
    ):
    (
        <>

        </>
    )
}
export default InfoCharts;
