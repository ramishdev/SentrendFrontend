import React, { useState, useEffect } from "react";


import axios from '../../hooks/axios.js'

import TrendRanking from "./Ranking.js";

import PlaceHolder from "../PlaceHolder";
import InfoCharts from './InfoCharts'

function TrendInfo({trendinfo,refresh}) {
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
            <div className="d-flex justify-center">
                <PlaceHolder/>
            </div>
        );
    }

    return(results && Object.keys(results).length > 0)?
    (
        <>
            <TrendRanking trendinfo={trendinfo} info={results} results={refresh}/>
            <InfoCharts results={results}/>
        </>

            
    ):
    (
        <>

        </>
    )
}
export default TrendInfo
