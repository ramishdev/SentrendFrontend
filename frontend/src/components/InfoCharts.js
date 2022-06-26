import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import axios from '../hooks/axios.js'
import BarChart from "./BarChart"
import RadarChart from "./RadarChart"

import PlaceHolder from "./PlaceHolder";

function InfoCharts({trendinfo,refresh}) {
    const [results, setResults] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchdata = async () => {
            setloading(true)
            try{
                console.log(trendinfo?.name)
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
                setResults({})
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
    }, [trendinfo,refresh])
    

    if(loading){
        return (
            <PlaceHolder/>
        );
    }

    return(results && Object.keys(results).length > 0)?
    (

        <div>
            <Row>
                <RadarChart info={results?.public}/>

            </Row>
            <Row className="pt-20 mt-20 ">
                <BarChart source={results?.source}/>
            </Row>
        </div>
            
    ):
    (
        <>

        </>
    )
}
export default InfoCharts
