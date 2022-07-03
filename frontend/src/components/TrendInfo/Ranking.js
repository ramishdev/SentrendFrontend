import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge';

function TrendRanking({results,info}) {

    const popover = (data)=> (
        <Popover id="popover-basic">
                <>
                {/* <Popover.Header as="h3">Total count of tweets used for results</Popover.Header> */}
                <Popover.Body>
                    {data}
                </Popover.Body>
                </>
        </Popover>
    );

    
    // console.log(results)
    // console.log(info)

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
                            <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover("Number of Tweets used for this analysis")}>
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
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover("Number of unique users who tweeted on this trend")}>
                        <i className="bi bi-people" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{results?.unique_contributers}</h1>
                        <h1 className = "text-sm">Original Contributors</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover("Average number of followers per user")}>
                        <i className="bi bi-bar-chart-fill" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{info?.user?.avg_followers}</h1>
                        <h1 className = "text-sm">Followers/contributor</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover("Average number of tweets per user")}>
                        <i className="bi bi-chat-left-text" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{(results?.tweet_count / results?.unique_contributers).toPrecision(3)}</h1>
                        <h1 className = "text-sm">Tweets/contributor</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={popover("Maximum followers among users")}>
                        <i className="bi bi-person-hearts" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{info?.user?.max_followers}</h1>
                        <h1 className = "text-sm">Max followers</h1>
                    </div>
                </Col>
            </Row>


            <Row  className="p-5 border-b border-cyan-900">
                <Col>
                    <div className=" text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover("Total number of like counts")}>
                        <i className="bi bi-person-heart" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{info?.public?.like_count}</h1>
                        <h1 className = "text-sm">Total Likes</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover("Total number of retweet counts")}>
                        <i className="bi bi-send" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{info?.public?.retweet_count}</h1>
                        <h1 className = "text-sm">Total Retweets</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover("Total number of reply counts")}>
                        <i className="bi bi-reply-fill" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{info?.public?.reply_count}</h1>
                        <h1 className = "text-sm">Total Replies</h1>
                    </div>
                </Col>
                <Col>
                    <div className="text-center">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={popover("Minimum followers among users")}>
                        <i className="bi bi-person-dash" style={{fontSize: "4rem"}}></i>
                    </OverlayTrigger>
                    </div>
                    <div className="text-center">
                        <h1 className = "text-2xl text-emerald-300">{info?.user?.min_followers}</h1>
                        <h1 className = "text-sm">Min followers</h1>
                    </div>
                </Col>
            </Row>
            <Row className="p-5 border-b border-cyan-900">
                
                <Col>
                    <h1 className = "text-2xl text-pink-500">Top Contributors</h1>
                    <ListGroup  variant="flush">

                        {
                        Object.entries(results?.top_contributers).map((key,index) => {

                            return(
                                // <ListGroup.Item>
                                //     <h1>{key[0]}</h1>
                                //     <h1 className = "">
                                //         {key[1]}
                                //     </h1>
                                // </ListGroup.Item>
                                <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start hover:underline"
                              >
                                <div className="ms-2 me-auto">
                                  <a href= {"https://twitter.com/" + String(key[0])} className="fw-bold " style = {{textDecoration: "none", color: "black"}}>{key[0]}</a>
                                </div>
                                <Badge bg="info">
                                    {key[1]}
                                </Badge>
                              </ListGroup.Item>
                            )
                        })}
                        
                    </ListGroup>
                </Col>
                <Col>
                    <h1 className = "text-2xl text-pink-500">Top Influencers</h1>
                    <ListGroup  variant="flush">
                        {
                        Object.entries(results?.top_followers).map((key,index) => {

                            return(
                                <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start hover:underline"
                              >
                                <div className="ms-2 me-auto">
                                  <a href= {"https://twitter.com/" + String(key[0])}  style = {{textDecoration: "none", color: "black"}} className="hover:text-sky-500 fw-bold">{key[0]}</a>
                                  {/* <i class="bi bi-arrow-up-right-square"></i> */}
                                </div>
                                <Badge bg="info">
                                    {key[1]}
                                </Badge>
                              </ListGroup.Item>
                            )
                        })}
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
            
    ):
    (
        <>
        </>
    )
}
export default TrendRanking
