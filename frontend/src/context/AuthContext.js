import React,{ createContext, useState, useEffect,useCallback } from 'react'
import jwt_decode from "jwt-decode";

import { useNavigate,useLocation } from 'react-router-dom'

import axios from '../hooks/axios.js'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {


    let [authTokens,setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user,setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let [loading,setLoading] = useState(true)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.pathname || "/dashboard";



    let registerUser = async (e) => {

        e.preventDefault()
        try{
            let response = await axios('/user/users/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                data : JSON.stringify({
                    'username' : e.target.username.value,
                    'email':e.target.email.value,
                    'password': e.target.password.value})
            })
            const data = await response.data

            if(response.status === 201){
                alert('user created, you can now login')
                navigate('/login');
            }
            else{
                alert(JSON.stringify(data))
            }
        }
        catch(err){
            console.log(e.target.username.value)
            console.error(err.message);
            logoutUser()
            alert(JSON.stringify(err.response?.data))
        }

    }

    let loginUser = async(e) => {

        e.preventDefault()
        try {
            let response = await axios('/user/token/' , {
                method: 'POST',
                headers : {'Content-Type': 'application/json'},
                data : JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
            })

            let data = await response.data
            console.log('data: ', data)

            if (response.status === 200){

                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
                
                navigate('/dashboard',{replace : true})
            }
            else{
                alert('Something went wrong')
            }
        }
        catch(err){
            console.error(err.message);
            alert('Something went wrong')
        }
    }

    let logoutUser = async() => {

        setAuthTokens(null)
        setUser(null)

        localStorage.removeItem('authTokens')

        navigate(from)
    }

    let updateToken = async ()=> {

        console.log("updated token called")
        console.log(authTokens)
        try{
            let response = await axios('/user/token/refresh/' , {
                method: 'POST',
                headers : {'Content-Type': 'application/json'},
                data : JSON.stringify({'refresh': authTokens?.refresh})
            })
            
            let data = await response.data
            if(response.status === 200){

                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
            }
            else{
                logoutUser()
            }
        }
        catch(err){
            console.error(err.message);
            logoutUser()
        }
        if(loading){
            setLoading(false)
        }
    }


    const contextData = React.useMemo(() => ({
        user, authTokens,loginUser,logoutUser,registerUser
    }), [user,authTokens]);

    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)

        return ()=> clearInterval(interval)

    }, [authTokens, loading])





    return (

        <AuthContext.Provider value = {contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}