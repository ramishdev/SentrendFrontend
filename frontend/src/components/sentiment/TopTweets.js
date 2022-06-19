import React from "react";
import {TwitterTweetEmbed } from 'react-twitter-embed';

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

  

    return(1)?(
        <>
            {posList.map((item) => {
                return(
                    <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                )

            })}
            {negList.map((item) => {
                return(
                    <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                )

            })}
            {neuList.map((item) => {
                return(
                    <TwitterTweetEmbed tweetId={item} placeholder={'loading'} options={{theme: 'light', width: '251'}}/>
                )

            })}
        </>
    ):(
        <>
        </>
    )
}

export default TopTweets;