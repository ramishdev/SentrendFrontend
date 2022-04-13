import React/*,{useState,useEffect}*/  from 'react';
//import Sidebar from "./Sidebar"
import { useParams } from 'react-router-dom'

//import useAuth from "../hooks/useAuth"


const DashboardInfo = () => {
    const { id } = useParams()
    //For debuging purpose
    /*let [notes, setNotes] = useState([]) 

    let {authTokens, logoutUser} = useAuth()

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('http://127.0.0.1:8000/crawler/crawlers',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
        }
        })

        let data = await response.json()

        if(response.status === 200){
        setNotes(data) 
        }
        else if(response.statusText === 'Unauthorized'){
        logoutUser()
        }
    }*/

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h2>{id}</h2>
                {console.log(id)}
            </div>
            {/*
            <div className="d-flex justify-content-center">
                <ul>
                    {notes.map(note => (
                    <li key = {note.id}>{JSON.stringify(note.url)}</li>
                    ))}
                </ul>
            </div>*/}
        </div>
    );
}

export default DashboardInfo;