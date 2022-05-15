import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
 
import axios from '../hooks/axios.js'

const HomePage = () => {

  let [notes, setNotes] = useState([]) 

  let {authTokens, logoutUser} = useContext(AuthContext)

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await axios('/crawler/crawlers',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })

    let data = await response.data

    if(response.status === 200){
      setNotes(data) 
    }
    else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
  }

  return (
    <div>
        <p>you are logged to the homepage</p>
        <ul>
            {notes.map(note => (
              <li key = {note.id}>{JSON.stringify(note)}</li>
            ))}
        </ul>

    </div>
  )
}

export default HomePage