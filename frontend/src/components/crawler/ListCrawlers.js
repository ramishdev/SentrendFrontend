import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import ListGroup from 'react-bootstrap/ListGroup'
// import Dropdown from 'react-bootstrap/Dropdown'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Button from 'react-bootstrap/Button'

import '../../css/listcrawler.css';

const ListCrawlers = () => {

  let [notes, setNotes] = useState([]) 

  let {authTokens, logoutUser} = useContext(AuthContext)

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/crawler/crawlers',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })

    let data = await response.json()

    if(response.status === 200){
      setNotes(data) 
    }
    else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
  }

  const CrawlerInfo = ({note}) => {
    return (
      <div className = "crawler-info">
        <p>{note.access_token}</p>
      </div>
      
    )
  }

  return (
    <div>
        <h1>your crawlers</h1>
        <ListGroup>
            {notes.map((note,index) => (
                <ListGroup.Item key = {note.id}>
                    <CrawlerInfo note = {note}/>
                </ListGroup.Item>
            ))}
            
        </ListGroup>

    </div>
  )
}


export default ListCrawlers