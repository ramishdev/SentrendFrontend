import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Col, Row} from "react-bootstrap";
import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import GetProfile from './GetProfile'

const Profile = () => {

    let {authTokens} = useContext(AuthContext)

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Edit Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Change Password</Nav.Link>
                    </Nav.Item>
                 
                </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <GetProfile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            I am
                        </Tab.Pane>
                       
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )       
}

export default Profile
