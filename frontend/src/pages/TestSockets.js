import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import {Initws,getws} from '../hooks/socket'


const Testing = () => {
    console.log(getws())
    if (getws() === 0 || getws()?.readyState === 3){
        Initws()
        console.log("First Time")
    }
    const [ws,setws] = useState(getws())
    useEffect(() => {
        ws.onopen = () => {
            console.log('WebSocket Connected');
        }
        ws.onmessage = (event) => {
            console.log("WebSocket send the data",event.data.message)
        }
        ws.onclose = () => {
            console.log("WebSocket disconnect")
        }
        // return () => ws.close();
    }, [])

    const senddata = () => {
        ws.close();
    }
    return (!ws)?(
        <><h1>Loading</h1></>
    )
    : (
        <>
            <h1>Testing</h1>
            <Button className="mt-2" variant="outline-primary" size="sm" onClick={senddata}>Submit form</Button>
        </>
    );
    
} 

export default Testing