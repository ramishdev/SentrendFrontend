import React from "react";

import Row from 'react-bootstrap/Row'

import BarChart from "../BarChart"
import RadarChart from "../RadarChart"


function InfoCharts({results}) {

    return(results && Object.keys(results).length > 0)?
    (

        <div>
            <Row className = "p-5 border-b border-cyan-900">
                <RadarChart info={results?.public}/>

            </Row>
            <Row className = "p-5 border-b border-cyan-900">
                <BarChart source={results?.source}/>
            </Row>
        </div>
            
    ):
    (
        <>

        </>
    )
}
export default InfoCharts
