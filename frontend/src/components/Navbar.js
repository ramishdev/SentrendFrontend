import React from 'react';
import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap/'
import { NavLink } from 'react-router-dom'
import useAuth from "../hooks/useAuth"
import './Navbar.css';
//import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavbar = () => {
    //const navigate = useNavigate()
    let {user} = useAuth()
    let {logoutUser} = useAuth()
    
    function handleSubmit(e) {
        e.preventDefault();    
        console.log('You clicked submit.');
        //navigate('/products')
      }
    return (user)?(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                <Navbar.Brand href="/">Sentrend</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                        
                    <Button onClick={(e) => handleSubmit(e)} variant="outline-success" >Search</Button>
                    <Nav className="mx-auto" >
                        <NavDropdown title={<i className="bi bi-person-fill" />} id="collasible-nav-dropdown" align="end">
                            <NavLink to={"/Profile"}>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Item >Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </div>
    ):(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                <Navbar.Brand href="/">Sentrend</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" >
                        <NavDropdown title={<i className="bi bi-person-fill" />} id="collasible-nav-dropdown" align="end">
                            <NavDropdown.Item ><NavLink to={"/login"}>
                                Login
                            </NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to={"/register"}>
                                Register
                            </NavLink></NavDropdown.Item>
                            
                            
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default MyNavbar;