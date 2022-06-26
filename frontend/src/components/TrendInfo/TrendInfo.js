import React, { useState, useEffect } from "react";


import axios from '../../hooks/axios.js'

import TrendRanking from "./Ranking.js";

import PlaceHolder from "../PlaceHolder";
import InfoCharts from './InfoCharts'

function TrendInfo({trendinfo,refresh}) {
    const [results, setResults] = useState({});
    const [results2, setResults2] = useState({});

    const [loading, setloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchdata = async () => {
            setloading(true)
            try{
                const response1 = await axios.get(trendinfo?.url + 'rankings/', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    signal: controller.signal
                });
                if(response1?.status === 200){
                    setResults2(response1?.data)
                }
                const response2 = await axios.get(trendinfo?.url + 'get_stats/', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    signal: controller.signal
                });
                if(response2?.status === 200){
                    setResults(response2?.data)
                }
            }
            catch(err){
                console.error(err.message);
                setResults({})
                setResults2({})
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
            <TrendRanking results={results2} info={results.user}/>
            <InfoCharts results={results}/>
        </>

            
    ):
    (
        <>

        </>
    )
}
export default TrendInfo
