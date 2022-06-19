import React from "react";
import {TwitterTweetEmbed } from 'react-twitter-embed';

function TopTweets({results}){

    return(results)?(
        <>
            <TwitterTweetEmbed tweetId={results?.top_pos_1} placeholder={'loading'} options={{theme: 'dark' }}/>
        </>
    ):(
        <>
        </>
    )
}

export default TopTweets;