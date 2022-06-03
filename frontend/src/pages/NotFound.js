import React from 'react'

const ErrorPage = () => {
    return(
        <>
            <div className="flex justify-center">
                <img src={require('../assets/NotFound.png')} alt="Not Found"/>
            </div>
            <h1 className="text-center text-2xl">404 Page not Found</h1>
        </>
    );
}
export default ErrorPage