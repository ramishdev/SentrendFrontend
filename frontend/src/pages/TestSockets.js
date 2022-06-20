import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'

import useSock from '../hooks/useSock'

const Testing = () => {
    const {ws,Initws} = useSock();
    console.log(ws)
    

    useEffect(() => {
        if (ws === -1 || ws?.readyState === 3){
            Initws()
            console.log("First Time")
        }
        console.log(ws)
        if(ws === -1){
            return 
        }
        ws.onopen = () => {
            console.log('WebSocket Connected');
        }
        ws.onmessage = (event) => {
            
            console.log("WebSocket send the data",event.data)
        }
        ws.onclose = () => {
            console.log("WebSocket disconnect")
        }
        //return () => ws.close();
    }, [ws])

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