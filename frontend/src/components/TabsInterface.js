import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Col, Row} from "react-bootstrap";
import Crawler from './crawler/crawler'
import Profile from './profile/Profile'
import DoughnutChart from "./DoughnutChart"

const TabsInterface = () => {


    const navigate = useNavigate()
    
    return (
        <div >
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="sentiment" title="Sentiment">
                    <DoughnutChart/>
                </Tab>
                <Tab eventKey="rankings" title="Rankings">
                </Tab>
                <Tab eventKey="topic analysis" title="Topic Analysis">
                </Tab>
            </Tabs>  
        </div>
    )

}
export default TabsInterface