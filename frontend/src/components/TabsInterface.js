import React from 'react'
//import { useNavigate } from 'react-router-dom'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import DoughnutChart from "./DoughnutChart"

const TabsInterface = () => {


    //const navigate = useNavigate()
    
    return (
        <div >
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="sentiment" title="Sentiment">
                    <div className="d-flex justify-content-center">
                        <DoughnutChart/>
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