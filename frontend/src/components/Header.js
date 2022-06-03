import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const Header = () => {

  return (
    <div>
        <Link to = "/">Home</Link>
        <Link to = "/login">Home</Link>


    </div>
  )
}

export default Header