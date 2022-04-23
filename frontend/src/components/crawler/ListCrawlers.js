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
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Crawler ID:{note.id}</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
      </div>
    )
  }


  return (
    <div>
        <h1>your crawlers</h1>
        <ol class="list-group list-group-numbered">
            {notes.map((note,index) => (
                <li class="list-group-item" key = {note.id}>
                    <CrawlerInfo note = {note}/>
                </li>
            ))}
         </ol>
    </div>
  )
}


export default ListCrawlers