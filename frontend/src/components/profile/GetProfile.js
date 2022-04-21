import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import ListGroup from 'react-bootstrap/ListGroup'

const GetProfile = () => {

  let [notes, setNotes] = useState([]) 

  let {authTokens , user} = useContext(AuthContext)

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/users/' + user.user_id,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })

    let data = await response.json()
    console.log(data)
    if(response.status === 200){
      setNotes(data) 
    }
    else{
        
    
        }
    }

   
    return (
        <div>
            <h1>USER</h1>
            <p>ID: {notes.id}</p>
            <p>USERNAME: {notes.username}</p>
            <p>EMAIL: {notes.email}</p>
            <p>TRENDS: {notes.trend}</p>
        </div>
    )
 
        
  


}
export default GetProfile