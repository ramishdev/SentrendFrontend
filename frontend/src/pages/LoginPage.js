import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  let {loginUser} = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit = {loginUser}>
                <h3>Login</h3>
                <div className="form-group mt-2">
                    <label>Username</label>
                    <input type="text" name = "username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" name = "password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn mt-2 btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Want to register <button className="btn btn-primary btn-block" onClick={() => navigate('/register')}>sign in?</button>
                </p>
            </form>
            {/*<form onSubmit = {loginUser}>
                <input type="text" name = "username" placeholder="Enter Username" />  
                <input type="password" name = "password" placeholder="Enter Password" />   
                <input type="submit" />   
            </form>*/}
        </div>
    </div>
  )
}

export default LoginPage