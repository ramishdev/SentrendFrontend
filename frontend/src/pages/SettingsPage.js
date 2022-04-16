import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Col, Row} from "react-bootstrap";
import Crawler from '../components/crawler/crawler'
import Profile from '../components/profile/Profile'

const SettingsPage = () => {


    const navigate = useNavigate()
    
    return (
        <div >
            <Nav.Item>
                <Nav.Link href="/">Back</Nav.Link>
            </Nav.Item>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >

            
                <Tab eventKey="profile" title="Profile">
                    <Profile/>
                </Tab>
                <Tab eventKey="crawler" title="Crawler">
                    <Crawler/>
                </Tab>
                <Tab eventKey="privacy" title="Privacy" >
                    <p> Privacy </p>
                </Tab>
            </Tabs>  
                 
        </div>
    )










}









export default SettingsPage


