import React, {useContext} from "react"
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'




const RegisterPage = () => {

    let {registerUser} = useContext(AuthContext)
    const navigate = useNavigate()
    
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit = {registerUser}>
                        <h3>Sign Up</h3>
                        
                        <div className="form-group">
                            <label>Enter Username</label>
                            <input type="text" name = "username" className="form-control" placeholder="Enter Username" />
                        </div>
                        <div className="form-group mt-2">
                            <label>Enter Email address</label>
                            <input type="email" name = "email" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="form-group mt-2">
                            <label>Enter Password</label>
                            <input type="password" name = "password" className="form-control" placeholder="Enter Password" />
                        </div>
                        <button type="submit" className="form-control btn btn-primary btn-block mt-2">Sign Up</button>
                        <p className="forgot-password text-right  mt-2">
                            Already registered <button className="btn btn-primary btn-block" onClick={() => navigate('/login')}>sign in?</button>
                        </p>
                </form>
          {/*<form onSubmit = {registerUser}>
              <input type="text" name = "username" placeholder="Enter Username" />  
              <input type="text" name = "email" placeholder="Enter Email" />  
              <input type="password" name = "password" placeholder="Enter Password" />   
              <input type="submit" />   
          </form>*/}
          </div>
      </div>
    )
  }
  export default RegisterPage
