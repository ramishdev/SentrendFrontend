import React,{useState, useEffect} from 'react';
import WordCloud from 'react-d3-cloud';
import axios from '../hooks/axios.js'
import { useOutletContext } from "react-router-dom";

import {Button} from 'react-bootstrap/'


import PlaceHolder from "./PlaceHolder";

const fontSize = (word) => word.value / 10;
const rotate = (word) => (word.value % 90) - 45;


function TopicsCloud({trend}){
    const [results, setResults] = useState()
    const [isloading,setloading] = useState(false);
    console.log(trend)
    useEffect(() => {
        const controller = new AbortController();
        const fetchTopics = async () => {
          setloading(true);
          setResults()
          try{
            const data = await axios.get(trend?.url +"topics/", {
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal
            });
            console.log(data?.data)
            setResults(data?.data)            
          }
          catch(err){
            console.error(err.message);
            setResults({})
          }
          setloading(false);
        }
        if(trend){
             fetchTopics();
        }
        return () => controller?.abort();
    },[trend])
    const newData = (data) => { 
        return(
            data.map((item) => ({
            text: item.text,
            value: item.value*100
            }))
        )
    };
    const fetchTopics = async () => {
        setloading(true);
        setResults()
        const controller = new AbortController();
        try{
        const data = await axios.get(trend?.url +"topics/", {
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        });
        console.log(data?.data)
        setResults(data?.data)            
        }
        catch(err){
        console.error(err.message);
        setResults({})
        }
        setloading(false);
        return () => controller?.abort();
    }
    const fetch = async () => {
        await fetchTopics()
    }
    if(isloading){
        return(
            <div className="d-flex justify-center">
                <PlaceHolder/>
            </div>
        )
    }
    return (trend)?(
        <> 
        
            <Button variant="outline-primary" onClick={fetch}>Get Topics</Button>
            {(results && Object.keys(results).length > 0)?(
            <div className="shadow-2xl rounded-lg ... " style={{width:'60rem'}}>
                <WordCloud
                    data={newData(results)}
                    fontSize={fontSize}
                    rotate={0}
                    padding={2}
                />
            </div>
            ):(<></>)}
        </>
    ):
    (
        <>
            
        </>
    )
}
export default React.memo(TopicsCloud)