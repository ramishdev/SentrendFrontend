import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Col, Row} from "react-bootstrap";

import CrawlerDetail from "./CrawlerDetail";

import '../../css/listcrawler.css';
import axios from '../../hooks/axios.js'

const ListCrawlers = () => {

  let [crawlerList, setcrawlerList] = useState([])
  // console.log(crawlerList)

  const refreshData = React.useMemo(() => ({
    crawlerList,setcrawlerList
  }), [crawlerList]);

  let {authTokens} = useContext(AuthContext)

  useEffect(() => {
    let getcrawlerList = async () => {
      try{
        let response = await axios('/crawler/crawlers',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
          }
        })
        let data = await response.data
  
        if(response.status === 200){
          setcrawlerList(data) 
        }
        else if(response.statusText === 'Unauthorized'){
          setcrawlerList([])
        }
      }
      catch(err){
        console.log(err.message)
        setcrawlerList([])
      }
    }
    getcrawlerList()
  }, [])



  return (
    <div>
      <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col className="ml-10 border-solid border-r-4 border-indigo-500 ">
            <Nav variant="pills" className="flex-column">
            {crawlerList.map((note,index) => (
              <Nav.Item key = {index}>
                <Nav.Link className = "text-black	text-lg	hover:text-2xl" eventKey={index}>Crawler {index} </Nav.Link>
              </Nav.Item>
            ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
            {crawlerList.map((note,index) => (
              <Tab.Pane eventKey={index} key = {index}>
                <CrawlerDetail  data = {note} idx = {index} item = {refreshData}/>
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