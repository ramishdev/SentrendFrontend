import './App.css';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />

      </Router>
    </div>
  )
}


export default App;