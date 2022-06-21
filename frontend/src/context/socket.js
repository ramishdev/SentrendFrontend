import React,{ createContext, useState, useEffect } from 'react'

import useWebSocket, { ReadyState } from 'react-use-websocket';
import useAuth from "../hooks/useAuth"

const SocketContext = createContext()

export default SocketContext;

export const Socket = ({children}) => {
    const {authTokens} = useAuth()
    let [ws,setws] = useState(-1)
    const Initws = () => {
        const url = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
        setws(()=>(new WebSocket(url)))
    }
    const getws = () => {
        return ws
    }
    const GetHookws = () => {
        const url = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
        const wshook = useWebSocket(url, {
            onOpen: () => console.log('WebSocket Connected'),
            onMessage: (event) => {
                console.log("WebSocket send the data",event.data)
            },
            onClose: () => {
                console.log("WebSocket disconnect")
            },
            //Will attempt to reconnect on all close events, such as server shutting down
            shouldReconnect: (closeEvent) => false,
        });
        return wshook
    }

    const contextData = React.useMemo(() => ({
        ws,getws,Initws
    }), [ws]);
    return (

        <SocketContext.Provider value = {contextData}>
            {children}
        </SocketContext.Provider>
    )
    

}