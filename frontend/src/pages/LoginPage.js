import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import '../css/login.css'

const LoginPage = () => {

  let {loginUser} = useContext(AuthContext)

  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit = {loginUser}>
                <h3>Login In</h3>
                <div className="form-group mt-2">
                    <label>Username</label>
                    <input type="text" name = "username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" name = "password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn mt-2 btn-primary btn-block">Submit</button>
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