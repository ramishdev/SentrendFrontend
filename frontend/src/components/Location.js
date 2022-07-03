
import React, { useState, useEffect } from "react";





const Location = () => {


    const [location, setLocation] = useState('Worldwide')


    return(

        <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
        </div>

    )




}
export default Location;