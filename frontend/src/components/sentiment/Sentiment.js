import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import axios from '../../hooks/axios'
import PieChart from "./PieChart.js";
import TopTweets from "./TopTweets.js";

function Sentiment({trendinfo}) {
    const [results, setResults] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setResults({})
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

    if(loading){
        return (
            <>
                <h2>Loading</h2>
            </>
        );
    }
    return (results && Object.keys(results).length > 0)?(
        <> 
            <PieChart results={results}/>
            <TopTweets results={results}/>
        </>
    ):
    (
        <>
            
        </>
    )

}   
export default Sentiment
