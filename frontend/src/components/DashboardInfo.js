import React  from 'react';

//import useAuth from "../hooks/useAuth"
import { useOutletContext } from "react-router-dom";

const DashboardInfo = () => {
    const data = useOutletContext()
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
                <h2>{data && JSON.stringify(data.url)}</h2>
                {console.log(data)}
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