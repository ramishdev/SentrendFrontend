import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import ListGroup from 'react-bootstrap/ListGroup'


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
      <div>
        <p>Id = {note.id}</p>
        <p>Consumer key = {note.consumer_key}</p>
        <p>Consumer secret = {note.consumer_secret}</p>
        <p>Access token = {note.access_token}</p>
        <p>Access token secret = {note.access_token_secret}</p>
        <p>Bearer token = {note.bearer_token}</p>
      </div>
      
    )
  }

  return (
    <div>
        <p>your crawlers</p>
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