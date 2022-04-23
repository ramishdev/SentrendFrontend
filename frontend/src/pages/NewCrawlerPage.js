import React, {useContext} from "react"
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


import PostCrawler from "../components/crawler/PostCrawler"


const NewCrawlerPage = () => {

    
    return (
        <div>
            <h1>SET UP YOUR CRWALER</h1>
            <PostCrawler/>
        </div>
    )
  }
  export default NewCrawlerPage
