import React,{useState, useEffect} from 'react';
import WordCloud from 'react-d3-cloud';
import axios from '../hooks/axios.js'
import { useOutletContext } from "react-router-dom";

import {Button} from 'react-bootstrap/'


import PlaceHolder from "./PlaceHolder";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


const fontSize = (word) => word.value / 10;
const rotate = (word) => (word.value % 90) - 45;


function TopicsCloud({trend}){

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


    const [results, setResults] = useState()
    const [refresh, setrefresh] = useState(false)
    const [isloading,setloading] = useState(false);
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
            // console.log(data?.data)
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
    },[trend,refresh])
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
            await axios.get(trend?.url +"reset_cache_topics/", {
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal
            });
            setrefresh(!refresh)           
        }
        catch(err){
            console.error(err.message);
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
        <div>
            <Row className = "p-5 border-y border-cyan-900">
                <Col className = "relative">

                    <h1 className = "py-5 text-4xl font-bold" >Topics</h1>
              

                    <Button className="absolute top-5 right-5 active:animate-spin" variant="" onClick={fetch}>
                        <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={popover("Topic modeling is an unsupervised machine learning technique that takes a lot of resources and time to compute. To ensure performance, instead of updating the topics continously, they will only be updated if this button is clicked","Refresh Topics")}>
                            <i className="bi bi-arrow-clockwise" style={{fontSize: "3rem"}}></i>
                        </OverlayTrigger>
                    </Button>

                    {(results && Object.keys(results).length > 0)?(
                    <div className="p-4 shadow-2xl rounded-lg relative" style={{width:'60rem'}}>
                        <WordCloud
                            data={newData(results)}
                            fontSize={fontSize}
                            rotate={0}
                            padding={2}
                        />
                    
                    </div>

                
            ):(<></>)}

                
                </Col>
            </Row> 

        </div>
    ):
    (
        <>
            
        </>
    )
}
export default React.memo(TopicsCloud)