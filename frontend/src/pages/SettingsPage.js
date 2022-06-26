import React from 'react'
import {Button} from 'react-bootstrap/'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Crawler from '../components/crawler/crawler'
import Profile from '../components/profile/Profile'
import { NavLink } from 'react-router-dom'


const SettingsPage = () => {

    
    return (
        <>
            
            <NavLink to={'/dashboard'} style={{  textDecoration: 'none' ,color:'black'}} className="pl-2"><i class="bi bi-arrow-left-circle" style={{fontSize: "2rem"}}></i></NavLink>
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
        </>
    )

}

export default SettingsPage


