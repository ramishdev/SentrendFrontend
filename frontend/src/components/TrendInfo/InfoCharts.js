import React from "react";

import Row from 'react-bootstrap/Row'

import BarChart from "../BarChart"
import RadarChart from "../RadarChart"


function InfoCharts({results}) {

    return(results && Object.keys(results).length > 0)?
    (

        <div>
            <Row>
                <RadarChart info={results?.public}/>

            </Row>
            <Row className="pt-20 mt-20 ">
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
