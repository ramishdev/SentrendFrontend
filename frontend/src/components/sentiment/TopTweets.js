import React from "react";
import {TwitterTweetEmbed } from 'react-twitter-embed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TopTweets({results}){

    console.log(results);

    let list = []
    // results.map((result) => {console.log(result)})

    let posList = [results.top_pos_1,results.top_pos_2,results.top_pos_3]
    let negList = [results.top_neg_1,results.top_neg_2,results.top_neg_3]
    let neuList = [results.top_neu_1,results.top_neu_2,results.top_neu_3]

    posList = posList.filter(function(value, index, arr){ 
        return value !== "None";
    });
    negList = negList.filter(function(value, index, arr){ 
        return value !== "None";
    });
    neuList = neuList.filter(function(value, index, arr){ 
        return value !== "None";
    });
    
    // list  = Object.values(results)
    // list  = list.slice(8)
    // posList = list.slice(0,3)
    // let negList = list.slice(3,6)
    // let neuList = list.slice(6,9)
    // posList = new Set(posList)
    // negList = new Set(negList)
    // neuList = new Set(neuList)

    // posList = Array.from(posList)
    // negList = Array.from(negList)
    // neuList = Array.from(neuList)


  

    return(results && Object.keys(results).length > 0)?(
        <>
        <h1 className = "text-4xl">
            Top Tweets
        </h1>
            <Container>    
                <Row className="p-10 d-flex justify-center">
                    {posList.length > 0 &&
                        <h1 className = "text-2xl text-emerald-400">
                            Positive Tweets
                        </h1>  
                    }
                    {posList.length === 0 &&
                        <h1>
                            No Positive Tweets found
                        </h1>  
                    } 
                    {posList.map((item,idx) => {
                        return(
                            <Col key={idx}>
                                <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="p-10 d-flex justify-center">
                    {negList.length > 0 &&
                        <h1 className = "text-2xl text-rose-400	">
                            Negative Tweets
                        </h1>
                    }     
                    {negList.length === 0 &&
                        <h1>
                            No Negative Tweets found
                        </h1>
                    }     
                    {negList.map((item,idx) => {
                        return(
                            <Col key={idx}>
                                <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="p-10 d-flex justify-center">
                    {neuList.length > 0 &&
                        <h1 className = "text-2xl text-sky-500	">
                        Neutral Tweets
                        </h1>  
                    }        
                    {neuList.length === 0 &&
                        <h1 >
                        No Neutral Tweets found
                        </h1>  
                    }        
                    {neuList.map((item,idx) => {
                        return(
                            <Col key={idx}>
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