import React from 'react'
//import { useNavigate } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DoughnutChart from "./DoughnutChart"
import RadarChart from "./RadarChart"
import InfoCharts from "./InfoCharts"

import PieChart from './PieChart'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useOutletContext } from "react-router-dom";

const TabsInterface = () => {
    //const navigate = useNavigate()
    const trendinfo = useOutletContext()    
    return (
        <>
            <Tabs defaultActiveKey="sentiment" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="sentiment" title="Sentiment">         
                    <div>
                        <Container>
                            <Row className="p-10 d-flex justify-center">
                                <Col>
                                    <h1 className = "text-5xl">
                                        {trendinfo?.name}
                                    </h1>
                                </Col>
                            </Row>
                            <Row className="p-10 d-flex justify-center">

                                <PieChart/>
                            </Row>

                            <Row className="p-10 d-flex justify-center">
                                <InfoCharts/>
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