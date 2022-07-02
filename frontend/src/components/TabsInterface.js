import React,{useEffect,useState} from 'react'
//import { useNavigate } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import DoughnutChart from "./DoughnutChart"
// import RadarChart from "./RadarChart"

import Sentiment from './sentiment/Sentiment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useOutletContext } from "react-router-dom";
import useSock from '../hooks/useSock'
import TopicsCloud from './Topics'

import TrendInfo from './TrendInfo/TrendInfo'

const TabsInterface = () => {
    //const navigate = useNavigate()
    const trendinfo = useOutletContext()   
    const [refresh,dorefresh] = useState(0) 
    const {ws,setws} = useSock()
    useEffect(() => {
        if(ws === -1 || ws === 3){
            return 
        }
        ws.onopen = () => {
            console.log('WebSocket Connected');
        }
        ws.onmessage = (event) => {            
            console.log("WebSocket send the data",event.data)
            dorefresh(event.data)
        }
        ws.onclose = () => {
            console.log("WebSocket disconnect")
            setws(3)
        }
        if(refresh === 0 && ws.readyState === 1){
            ws.send("trendinfo?.id")
        }
        // return () => ws.close()
    }, [ws])
    console.log(refresh)
    return (
        <>
            <Tabs defaultActiveKey="rankings" id="uncontrolled-tab-example" className="mb-3" >
            <Tab eventKey="rankings" title="Rankings">

                    <Row className="p-10 d-flex justify-center">
                                <Col>
                                    <h1 className = "text-5xl">
                                        {trendinfo?.name}
                                    </h1>
                                </Col>
                            </Row>
                    <Row className="p-10 d-flex justify-center">
                        <TrendInfo trendinfo={trendinfo} refresh={refresh}/>
                    </Row>
                    {/* <Row className="p-10 d-flex justify-center">
                        <InfoCharts trendinfo={trendinfo} refresh={refresh}/>
                    </Row> */}
                </Tab>
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
                                <Sentiment trendinfo={trendinfo} refresh={refresh}/>
                            </Row>
                        </Container>
                    </div>
                </Tab>
                
                <Tab eventKey="topic analysis" title="Topic Analysis">
                    <Container>
                        <Row className="p-10 d-flex justify-center">
                            <TopicsCloud trend={trendinfo}/>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="manage" title="Manage">
                    <Container>
                        <Row className="p-10 flex-end">
                          <h1>Manage this</h1>  
                        </Row>
                    </Container>
                </Tab>
            </Tabs>  
        </>
    )

}
export default TabsInterface