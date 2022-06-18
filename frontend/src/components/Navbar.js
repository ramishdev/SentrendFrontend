import React from 'react';
import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap/'
import useAuth from "../hooks/useAuth"
//import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

const MyNavbar = () => {
    //const navigate = useNavigate()
    let {user} = useAuth()
    let {logoutUser} = useAuth()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();    
        navigate("/search")
        console.log('You clicked submit.');
        //navigate('/products')
      }

    return (user)?(
        <div>
            <Navbar collapseOnSelect expand="lg" bg = 'dark' variant = 'dark'>
                <Container fluid>
                <Navbar.Brand href="/">Sentrend</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-end">
                    <Button onClick={(e) => handleSubmit(e)} variant="outline-success" >Search</Button>
                    <Nav >
                        <NavDropdown title={<i className="bi bi-person-fill" />} id="collasible-nav-dropdown" align="end">
                            <NavDropdown.Item onClick={()=> navigate("/testing")}>Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=> navigate("/settings")}>Settings</NavDropdown.Item>
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
                    <Navbar.Collapse className="justify-end">
                        <Nav>
                            <NavDropdown title={<i className="bi bi-person-fill" />} id="collasible-nav-dropdown" align="end">
                                <NavDropdown.Item onClick={() => navigate("/login")}>
                                    Login
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/testing")}>
                                    Register
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default MyNavbar;