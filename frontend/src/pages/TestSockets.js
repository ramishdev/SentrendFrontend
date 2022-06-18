import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'



const Testing = () => {
    const url = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
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