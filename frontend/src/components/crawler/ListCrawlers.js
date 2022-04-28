import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Col, Row} from "react-bootstrap";

import CrawlerDetail from "./CrawlerDetail";

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
      setNotes([])
    }
  }


  return (
    <div>
    
        <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col className="ml-10 border-solid border-r-2">
              <Nav variant="pills" className="flex-column">
              {notes.map((note,index) => (
                <Nav.Item key = {index}>
                  <Nav.Link className = "text-black	text-lg	hover:text-2xl" eventKey={index}>Crawler {index} </Nav.Link>
                </Nav.Item>
              ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
              {notes.map((note,index) => (
                <Tab.Pane eventKey={index} key = {index}>
                  <CrawlerDetail  data = {note}/>
                </Tab.Pane>
              ))}
              </Tab.Content>
            </Col>
          </Row>
          
        </Tab.Container>

    </div>
  )
}

{/* <CrawlerInfo note = {note}/> */}
export default ListCrawlers