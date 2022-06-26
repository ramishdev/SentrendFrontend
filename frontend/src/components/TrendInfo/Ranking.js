import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import axios from '../../hooks/axios.js'
import PlaceHolder from "../PlaceHolder";
import {Button} from 'react-bootstrap/'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import { IconContext } from "react-icons";

import { BsFillAlarmFill} from "react-icons/bs";


function TrendRanking({trendinfo,info,refresh}) {

    const popover = (
        <Popover id="popover-basic">
                <>
                {/* <Popover.Header as="h3">Total count of tweets used for results</Popover.Header> */}
                <Popover.Body>
                    Total count of tweets used for results
                </Popover.Body>
                </>
        </Popover>
    );

    const [results, setResults] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchdata = async () => {
            setloading(true)
            try{
                console.log(trendinfo?.name)
                const response = await axios.get(trendinfo?.url + 'rankings/', {
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


    console.log(results)

    console.log(info)

    return(results && Object.keys(results).length > 0)?
    (

        <Container>
            <Row  className="p-5 border-y border-cyan-900">
                <Col className = "d-flex justify-center">
                    <div>   
                        <h1 className="font-black text-8xl text-emerald-300">
                            {results?.tweet_count}
                        </h1>
                        <div className="d-flex">
                            <h1 className="text-sm pt-3">
                                TOTAL TWEETS
                            </h1>
                            <div className="pl-1">
                            <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                                <i className="bi bi-question-circle" style={{fontSize: "2rem"}}></i>
                            </OverlayTrigger>
                            </div>
                            
                        </div>

                    </div>
                </Col>

            </Row>
            <Row  className="p-5 border-b border-cyan-900">
                <Col>
                    <div className=" text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                        <i className="bi bi-people" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{results?.unique_contributers}</h1>
                        <h1 className = "text-sm">Original Contributers</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                       
                        <i className="bi bi-bar-chart" style={{fontSize: "4rem"}}></i>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{info?.avg_followers}</h1>
                        <h1 className = "text-sm">Followers/contributor</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                       
                        <i className="bi bi-chat-left-text" style={{fontSize: "4rem"}}></i>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{(results?.tweet_count / results?.unique_contributers).toPrecision(3)}</h1>
                        <h1 className = "text-sm">Tweets/contributor</h1>
                    </div>
                </Col>
            </Row>
        </Container>
            
    ):
    (
        <>
             <h1>sdadasdsa</h1>
        </>
    )
}
export default TrendRanking
