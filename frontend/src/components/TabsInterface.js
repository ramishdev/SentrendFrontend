import React from 'react'
//import { useNavigate } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DoughnutChart from "./DoughnutChart"
import RadarChart from "./RadarChart"
import BarChart from "./BarChart"

import PieChart from './PieChart'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TabsInterface = () => {
    //const navigate = useNavigate()    
    return (
        <>
            <Tabs defaultActiveKey="sentiment" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="sentiment" title="Sentiment">         
                    <div>
                        <Container className="p-10 d-flex justify-center">
                            <Row xs="auto">
                                <Col>
                                    <PieChart/>
                                </Col>
                                <Col>
                                    <BarChart/>
                                </Col>
                            </Row>
                            <Row>
                                
                            </Row>
                        </Container>
                       
                    </div>
                </Tab>
                <Tab eventKey="rankings" title="Rankings">
                </Tab>
                <Tab eventKey="topic analysis" title="Topic Analysis">
                </Tab>
            </Tabs>  
        </>
    )

}
export default TabsInterface