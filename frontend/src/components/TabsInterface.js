import React from 'react'
//import { useNavigate } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DoughnutChart from "./DoughnutChart"
import RadarChart from "./RadarChart"
import PieChart from './PieChart'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TabsInterface = () => {
    //const navigate = useNavigate()    
    return (
        <div>
            <Tabs defaultActiveKey="sentiment" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="sentiment" title="Sentiment">         
                    <div>
                        <Container className="p-10">
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <PieChart/>
                                </Col>
                                <Col className="d-flex justify-content-center">
                                    <RadarChart/>
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
        </div>
    )

}
export default TabsInterface