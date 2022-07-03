import React,{useCallback} from 'react';
import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap/'
import useAuth from "../hooks/useAuth"
//import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import useSock from '../hooks/useSock'
const MyNavbar = () => {
    //const navigate = useNavigate()
    const {ws} = useSock()
    let {user} = useAuth()
    let {logoutUser} = useAuth()
    const navigate = useNavigate()

    const popover = (
        <Popover id="popover-basic">
            {(ws?.readyState === 1)?(
                <>
                <Popover.Header as="h3">Stream Crawler is Running</Popover.Header>
                <Popover.Body>
                    Your data is being crawled
                </Popover.Body>
                </>
                ):(
                <>
                <Popover.Header as="h3">{(ws.readyState===3 || ws === 3)?("Stream Crawler Stopped"):("Stream Crawler Stoping")}</Popover.Header>
                <Popover.Body>
                    Done Crawling your data
                </Popover.Body>
                </>
                )
            }
            
        </Popover>
    );
    function handleSubmit(e) {
        e.preventDefault();    
        navigate("/search")
        // console.log('You clicked submit.');
    }

    return (user)?(
        <>
            <Navbar collapseOnSelect expand="lg" bg = 'dark' variant = 'dark'>
                <Container fluid>
                <Navbar.Brand onClick={()=> navigate("/")}>SENTREND</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-end">
                    {(ws!== -1)?(
                        <div  className="pr-2">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Button variant="success">Status</Button>
                        </OverlayTrigger>
                        </div>
                    ):(<></>)}
                    <Button onClick={(e) => handleSubmit(e)} variant="outline-success" >Search</Button>
                    <Nav>
                        <NavDropdown title={<i className="bi bi-person-fill" />} id="collasible-nav-dropdown" align="end">
                            {/* <NavDropdown.Item onClick={()=> navigate("/profile")}>Profile</NavDropdown.Item> */}
                            <NavDropdown.Item onClick={()=> navigate("/settings")}>Settings</NavDropdown.Item>
                            {/* <NavDropdown.Item onClick={()=> navigate("/testing")}>Test Socket</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    ):(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand onClick={()=> navigate("/")}>Sentrend</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-end">
                        {/* {console.log(ws)} */}
                        {(ws!==-1)?(
                            <div className="pr-2">
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <Button variant="success">Status</Button>
                                </OverlayTrigger>
                            </div>
                        ):(<></>)}
                        <Nav>
                            <NavDropdown title={<i className="bi bi-person-fill" />} id="collasible-nav-dropdown" align="end">
                                <NavDropdown.Item onClick={() => navigate("/login")}>
                                    Login
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/register")}>
                                    Register
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item onClick={() => navigate("/testing")}>
                                    Test Socket
                                </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default React.memo(MyNavbar);