import React, {useState, useEffect, useContext} from 'react'
import useAuth from "../../hooks/useAuth"
import ListGroup from 'react-bootstrap/ListGroup'
import axios from '../../hooks/axios.js'
import { useNavigate,useLocation } from 'react-router-dom'

function ChangePass(){
    let [profiles, setprofiles] = useState([]) 
    const navigate = useNavigate()

    let {authTokens , user,logoutUser} = useAuth()
    useEffect(() => {
        const controller = new AbortController();
        const UserInfo = async () => {
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
        UserInfo()
        return () => controller?.abort();
    }, [])
    const handleSubmit = async (e) => {
        console.log(e.target.password.value)
        e.preventDefault()
        try{
            await axios('/user/users/'  + user.user_id + '/change_password/', {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                },
                data : JSON.stringify({
                    'new_password': e.target.password.value,
                })
            })
            alert('Done................ Logging Out')
            navigate('/login');
            
        }
        catch(err){
            alert(JSON.stringify(err.response?.data))
            console.log("Hello")
        }
    }

    return(user)?(
        <>
            <h1>Enter New Password</h1>
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    {/* <label>Enter password</label> */}
                    <input type="password" name = "password" style={{width:'20%'}} className="form-control" placeholder="Enter password" />
                    <button type="submit" style={{width:'20%'}} className="form-control btn btn-primary btn-block mt-2">Change Password</button>
                </div>
            </form>
        </>
    ):(<></>)
}
export default ChangePass