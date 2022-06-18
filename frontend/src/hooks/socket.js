import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import useAuth from "../hooks/useAuth"
import useWebSocket, { ReadyState } from 'react-use-websocket';

let ws = 0

export const Initws = () => {
    const {authTokens} = useAuth()
    const url = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
    if(ws?.readyState === 1){
        return
    }
    ws = new WebSocket(url)
}

export const getws = () => {
    return ws
}
export const GetHookws = () => {
    if(ws !== 0){
        ws?.close()
    }
    
    const url = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'

    ws = useWebSocket(url, {
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
    return ws
}