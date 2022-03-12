import React from 'react';
import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {Form,FormControl,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
const MyNavbar = () => {
    const SearchBar = (e) => {
        e.preventDefault();
    };
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container className="d-flex">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-left">
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown" align="end">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default MyNavbar;