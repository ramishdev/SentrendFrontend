import React from 'react'
import { useNavigate } from 'react-router-dom'


const Unauthorized = () => {
    const navigate = useNavigate()

    return(
        <>
            <div className="flex justify-center">
                <img src={require('../assets/Unauthuser.png')} alt="Not Found"/>
            </div>
            <h1 className="text-center text-2xl">Unauthorized Access</h1>
            <p className="forgot-password text-center  mt-2">
                <button className="btn btn-primary btn-block" onClick={() => navigate('/dashboard',{replace : true})}>Go to Home</button>
            </p>
        </>
    );
}
export default Unauthorized