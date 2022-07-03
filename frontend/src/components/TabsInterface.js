import React,{useEffect,useState} from 'react'
//import { useNavigate } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import DoughnutChart from "./DoughnutChart"
// import RadarChart from "./RadarChart"
import Manage from "./Manage"
import Sentiment from './sentiment/Sentiment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useOutletContext } from "react-router-dom";
import useSock from '../hooks/useSock'
import TopicsCloud from './Topics'

import TrendInfo from './TrendInfo/TrendInfo'
import '../css/tabs.css'

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
            let D = JSON.parse(JSON.parse(event?.data)?.message)
            console.log("WebSocket send the data",D)
            if(D?.text === "Disconnected"){
                ws.close()
            }
            else{
                if(trendinfo && D.query.includes(trendinfo?.name)){
                    dorefresh(D.elapsed)
                }
            }
        }
        ws.onclose = () => {
            console.log("WebSocket disconnect")
            setws(3)
        }
        // if(refresh === 0 && ws.readyState === 1){
        //     ws.send(trendinfo?.id)
        // }
        // return () => ws.close()
    }, [ws,trendinfo])
    // console.log(refresh)
    return (
        <>
            <Tabs defaultActiveKey="rankings" id="uncontrolled-tab-example" fill className="mb-3" >
            
                <Tab eventKey="sentiment" title="Sentiment" >         
                    <div>
                        <Container>
                            <Row className="p-10">
                                <Col>
                                    {(trendinfo)?(
                                        <div className = "d-flex">
                                            <h1 className = "pr-4 text-5xl text-cyan-600 font-bold">
                                                {trendinfo?.name}
                                            </h1>
                                            <a href = {"https://twitter.com/search?q=" + trendinfo?.name} style = {{color: "deepskyblue"}}>
                                                <i className="bi bi-twitter" style={{fontSize: "2rem"}}></i>
                                            </a>
                                        </div>
                                    ):(
                                        <>
                                        <h1 className = "text-3xl font-bold">
                                            Select a trend from Sidebar
                                        </h1>
                                        </>
                                    )}
                                    
                                </Col>
                            </Row>
                            <Row className="p-10 d-flex justify-center">
                                <Sentiment trendinfo={trendinfo} refresh={refresh}/>
                            </Row>
                        </Container>
                    </div>
                </Tab>

                <Tab eventKey="rankings" title="Rankings">

                    <Row className="p-10">
                        <Col>
                            {(trendinfo)?(
                                <div className = "d-flex">
                                    <h1 className = "pr-4 text-5xl text-cyan-600 font-bold">
                                        {trendinfo?.name}
                                    </h1>
                                    <a href = {"https://twitter.com/search?q=" + trendinfo?.name} style = {{color: "deepskyblue"}}>
                                        <i className="bi bi-twitter" style={{fontSize: "2rem"}}></i>
                                    </a>
                                </div>
                            ):(
                                <>
                                <h1 className = "text-3xl font-bold">
                                    Select a trend from Sidebar
                                </h1>
                                </>
                            )}
                        </Col>
                    </Row>
                    <Row className="p-10 d-flex justify-center">
                        <TrendInfo trendinfo={trendinfo} refresh={refresh}/>
                    </Row>
                    {/* <Row className="p-10 d-flex justify-center">
                        <InfoCharts trendinfo={trendinfo} refresh={refresh}/>
                    </Row> */}
                </Tab>
                
                <Tab eventKey="topic analysis" title="Topic Analysis">
                    <Container>
                    <Row className="p-10">
                        <Col>
                            {(trendinfo)?(
                                <div className = "d-flex">
                                    <h1 className = "pr-4 text-5xl text-cyan-600 font-bold">
                                        {trendinfo?.name}
                                    </h1>
                                    <a href = {"https://twitter.com/search?q=" + trendinfo?.name} style = {{color: "deepskyblue"}}>
                                        <i className="bi bi-twitter" style={{fontSize: "2rem"}}></i>
                                    </a>
                                </div>
                            ):(
                                <>
                                <h1 className = "text-3xl font-bold">
                                    Select a trend from Sidebar
                                </h1>
                                </>
                            )}
                            
                        </Col>
                    </Row>

                        <Row className="p-10 d-flex justify-center">
                            <TopicsCloud trend={trendinfo}/>
                        </Row>
                    </Container>
                </Tab>
                {/* <Tab eventKey="manage" title="Manage">
                    <Container>
                        <Row className="p-10 flex-end">
                          <h1>Manage this</h1>  
                        </Row>
                    </Container>
                </Tab> */}
            </Tabs>  
        </>
    )

}
export default TabsInterface