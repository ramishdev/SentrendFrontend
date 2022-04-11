import React,{useState,useEffect} from 'react';
import './Navbar.css';
//import {useNavigate} from 'react-router-dom'

import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {Form,FormControl,Button} from 'react-bootstrap/'
import { NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
const MyNavbar = () => {
    //const navigate = useNavigate()
    const islogged = false
    function handleSubmit(e) {
        e.preventDefault();    
        console.log('You clicked submit.');
        //navigate('/products')
      }
    return (islogged)?(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                <Navbar.Brand href="/">Sentrend</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button onClick={(e) => handleSubmit(e)} variant="outline-success" >Search</Button>
                    </Form>
                    <Nav className="mx-auto" >
                        <NavDropdown title={<i className="bi bi-person-fill" />} id="collasible-nav-dropdown" align="end">
                            <NavLink to={"/Profile"}>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            
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
                            <NavLink to={"/Login"}>
                                Login
                            </NavLink>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default MyNavbar;