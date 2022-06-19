import React from "react";
import {TwitterTweetEmbed } from 'react-twitter-embed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TopTweets({results}){

    console.log(results);

    let list = []
    // results.map((result) => {console.log(result)})

    list  = Object.values(results)
    list  = list.slice(8)
    let posList = list.slice(0,3)
    let negList = list.slice(3,6)
    let neuList = list.slice(6,9)
    posList = new Set(posList)
    negList = new Set(negList)
    neuList = new Set(neuList)

    posList = Array.from(posList)
    negList = Array.from(negList)
    neuList = Array.from(neuList)

  

    return(results)?(
        <>
            <Container>    
                <Row className="p-10 d-flex justify-center">        
                    {posList.map((item) => {
                        return(
                            <Col>
                                <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="p-10 d-flex justify-center">        
                    {negList.map((item) => {
                        return(
                            <Col>
                                <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="p-10 d-flex justify-center">        
                    {neuList.map((item) => {
                        return(
                            <Col>
                                <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    ):(
        <>
        </>
    )
}

export default TopTweets;