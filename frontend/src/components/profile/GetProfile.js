import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from '../../hooks/axios.js'

const GetProfile = () => {

  let [profiles, setprofiles] = useState([]) 

  let {authTokens , user} = useContext(AuthContext)

  useEffect(() => {
    getprofiles()
  }, [])

  let getprofiles = async () => {
    try{
      let response = await axios('/user/users/' + user.user_id,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
        }
      })
      let data = await response.data
      console.log(data)
      if(response.status === 200){
        setprofiles(data) 
      }
    }
    catch(err){
       console.log(err.message)
    }
  }

   
    return (
        <div>
            <h1>USER</h1>
            <p>ID: {profiles.id}</p>
            <p>USERNAME: {profiles.username}</p>
            <p>EMAIL: {profiles.email}</p>
            <p>TRENDS: {profiles.trend}</p>
        </div>
    )
 
        
  


}
export default React.memo(GetProfile)