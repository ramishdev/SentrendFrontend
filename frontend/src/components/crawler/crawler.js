import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import { Col, Row} from "react-bootstrap";

import ListCrawlers from './ListCrawlers';
import PostCrawler from './PostCrawler';
import { useNavigate } from 'react-router-dom'

const Crawler = () => {

    const navigate = useNavigate()

    return (

        <div className="">
            <div className="flex justify-content-center">
                <button type="button"  className="btn btn-outline-success" onClick={() => navigate('/settings/new-crawler')}>New Crawler</button>
            </div>
            <ListCrawlers/>
        </div>

        // <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        //     <Row>
        //         <Col sm={3}>
        //         <Nav variant="pills" className="flex-column">
        //             <Nav.Item>
        //                 <Nav.Link eventKey="first">Your Crawlers</Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item>
        //                 <Nav.Link eventKey="second">New Crawler</Nav.Link>
        //             </Nav.Item>
        //         </Nav>
        //         </Col>
        //         <Col sm={9}>
        //             <Tab.Content>
        //                 <Tab.Pane eventKey="first">
        //                     <ListCrawlers/>
        //                 </Tab.Pane>
        //                 <Tab.Pane eventKey="second">
        //                     <PostCrawler/>
        //                 </Tab.Pane>
        //             </Tab.Content>
        //         </Col>
        //     </Row>
        // </Tab.Container>
    )       
}

export default Crawler

