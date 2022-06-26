import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import axios from '../hooks/axios.js'
import PlaceHolder from "./PlaceHolder";
import {Button} from 'react-bootstrap/'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import { IconContext } from "react-icons";

import { BsFillAlarmFill} from "react-icons/bs";


function TrendRanking({trendinfo,refresh}) {

    const popover = (
        <Popover id="popover-basic">
                <>
                <Popover.Header as="h3">Stream Crawler is Running</Popover.Header>
                <Popover.Body>
                    Your data is being crawled
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

    return(results && Object.keys(results).length > 0)?
    (

        <Container>
            <Row  className="border-y border-cyan-900">
                <Col>
                <div>
                    <h1 className="text-8xl text-sky-500">
                        {results?.tweet_count}
                    </h1>
                    <div>
                    <h1 className="text-sm">
                        TOTAL TWEETS
                    </h1>
                    <IconContext.Provider value={{size: '4em',className:"pr-2" }}>
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                            <Button>
                                <BsFillAlarmFill/>
                            </Button>
                        </OverlayTrigger>
                        </IconContext.Provider>
                        
                    </div>

                </div>
                </Col>
                <Col>
                    <h1 className="text-xl">

                        everything goes so fast
                    </h1>
                </Col>

            </Row>
            <Row>
                <h1>sadas</h1>
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
