import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'

const NavComponent = () => {
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark" expand="md">
        <Container>
            <Navbar.Brand href="/">
                {/* <h1 className="text-3xl font-bold animate-pulse ">SENTREND</h1>                 */}
                <div className="text-3xl font-bold animate-pulse">
                    SENTREND
                </div>
                <div className="text-sm font-light">
                    Not so good Analytics for Twitter
                </div>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={()=> navigate("/dashboard")}>Dashboard</Nav.Link>
                <Nav.Link onClick={()=> navigate("/login")}>Login</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="http://127.0.0.1:8000/documentation">API</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default NavComponent