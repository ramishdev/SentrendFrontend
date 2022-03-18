import React from 'react';
import './Navbar.css';
//import {useNavigate} from 'react-router-dom'

import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {Form,FormControl,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
const MyNavbar = () => {
    //const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();    
        console.log('You clicked submit.');
        //navigate('/products')
      }
    return(
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
        
        </div>
    );
}
export default MyNavbar;