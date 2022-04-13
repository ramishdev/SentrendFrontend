import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
 

const CrawlerPage = () => {

  let [crawlers, setCrawlers] = useState([]) 

  let {authTokens, logoutUser} = useContext(AuthContext)

  useEffect(() => {
    getCrawlers()
  }, [])

  let getCrawlers = async () => {
    let response = await fetch('http://127.0.0.1:8000/crawler/crawlers',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })

    let data = await response.json()

    if(response.status === 200){
      setCrawlers(data) 
    }
    else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
  }

  return (
    <div>
        <p>you are logged to the homepage</p>

        <ul>
            {crawlers.map(crawler => (
              <li key = {crawler.id}>{JSON.stringify(crawler)}</li>
            ))}
        </ul>

    </div>
  )
}

export default HomePage