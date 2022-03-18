import React from 'react';
import './Navbar.css';
import { Navigate} from 'react-router-dom'

import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {Form,FormControl,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
const MyNavbar = () => {
    function handleSubmit(e) {
        e.preventDefault();    
        console.log('You clicked submit.');
      }
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="#home">Sentrend</Navbar.Brand>
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
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown" align="end">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MyNavbar;