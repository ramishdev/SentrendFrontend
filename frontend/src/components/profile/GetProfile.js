import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from '../../hooks/axios.js'
import PlaceHolder from '../PlaceHolder'
import Form from 'react-bootstrap/Form';

const GetProfile = () => {

  let [profiles, setprofiles] = useState([]) 
  const [isloading,setloading] = useState(false);

  let {authTokens , user} = useContext(AuthContext)

  useEffect(() => {
    getprofiles()
  }, [])

  let getprofiles = async () => {
    setloading(true)
    try{
      let response = await axios('/user/users/' + user.user_id,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
        }
      })
      let data = await response.data
      // console.log(data)
      if(response.status === 200){
        setprofiles(data) 
      }
    }
    catch(err){
       console.log(err.message)
    }
    setloading(false)
  }
  const handleSubmitname = async (e) => {
    e.preventDefault()
    setloading(true)
    try{
        await axios('/user/users/'  + user.user_id + '/', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            data : JSON.stringify({
                'username': e.target.username.value,
            })
        })
        const list = profiles
        list['username'] = e.target.username.value
        // console.log(list)
        setprofiles(list);   
    }
    catch(err){
        alert(JSON.stringify(err.response?.data))
    }
    setloading(false)
  }
  const handleSubmitemail = async (e) => {
    e.preventDefault()
    setloading(true)
    try{
        await axios('/user/users/'  + user.user_id + '/', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            data : JSON.stringify({
                'email': e.target.email.value,
            })
        })
        const list = profiles
        list['email'] = e.target.email.value
        setprofiles(list);   
    }
    catch(err){
        console.error(err)
        alert(JSON.stringify(err.response?.data))
    }
    setloading(false)
  }
  if(isloading){
    return (
        <div className="d-flex justify-center">
            <PlaceHolder/>
        </div>
    );
  }
  return (
      <div>
          
          <h1>USER</h1>
          <p>ID: {profiles.id}</p>
          <form onSubmit = {handleSubmitname} className="d-flex">
                  <input type="input" name = "username" style={{width:'20%'}} className="form-control" placeholder={profiles.username} />
                  <div className="pl-2">
                    <button type="submit" className="form-control btn btn-primary btn-block">Change Name</button>
                  </div>
          </form>
          <form onSubmit = {handleSubmitemail} className="d-flex pt-2 pb-1">
                  <input type="email" name = "email" style={{width:'20%'}} className="form-control" placeholder={profiles.email} />
                  <div className="pl-2">
                    <button type="submit" className="form-control btn btn-primary btn-block">Change Email</button>
                  </div>
          </form>
          <p>TIER: {profiles.tier}</p>
      </div>
  )

        
  


}
export default GetProfile