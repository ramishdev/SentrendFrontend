import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'



const Testing = () => {
    const url = 'ws://127.0.0.1:8000/ws/socket-server/'
    const [ws,setWS] = useState(new WebSocket(url))
    const [loading,setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        ws.onopen = () => {
            console.log('WebSocket Connected');
        }
        ws.onmessage = (event) => {
            console.log("WebSocket send the data",event.data)
        }
        ws.onclose = () => {
            console.log("WebSocket disconnect")
        }
        setloading(false)
        return () => ws.close();
    }, [])
    const senddata = () => {
        ws.close();
    }
    return (!ws || loading)?(
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