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
                <div className="text-3xl font-bold">
                    SENTREND
                </div>
                <div className="text-sm font-light">
                    Analytics for Twitter
                </div>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={()=> navigate("/dashboard")}>Dashboard</Nav.Link>
                <Nav.Link onClick={()=> navigate("/login")}>Login</Nav.Link>
                <Nav.Link onClick={()=> navigate("/register")}>Register</Nav.Link>
                <Nav.Link href="http://127.0.0.1:8000/documentation">API</Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default NavComponent