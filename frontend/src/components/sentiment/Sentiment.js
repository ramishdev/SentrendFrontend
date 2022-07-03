import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import axios from '../../hooks/axios'
import PieChart from "./PieChart.js";
import TopTweets from "./TopTweets.js";

import PlaceHolder from "../PlaceHolder";

function Sentiment({trendinfo,refresh}) {
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
    return (results && Object.keys(results).length > 0)?(
        <div> 
            <div>
                <h1 className = "text-3xl font-bold" >Sentiment</h1>
                <PieChart results={results}/>
            </div>
            <div className="pt-20 mt-20">
                <h1 className = "text-3xl font-bold" >Top tweets</h1>
                <TopTweets results={results}/>
            </div>
        </div>
    ):
    (
        <>
        </>
    )

}   
export default Sentiment
