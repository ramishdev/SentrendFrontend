



import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeIt from "typeit-react";

const MainComponent = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className="pt-20 px-10">
                        {/* <h1 className = "text-7xl text-sky-800">
                            Monitor your business on real-time dashboard
                        </h1> */}
                        <TypeIt className = "text-7xl text-sky-800">Monitor your business on real-time dashboard</TypeIt>
                        <p className = "text-3xl">
                            Boost your Twitter performance by monitoring key engagement metrics in a dashboard
                        </p>
                    </div>
                </Col>
                <Col>
                    <div >
                        {/* <img
                        
                            src={require("../../assets/landing/logo.PNG")}
                            width="800"
                            height="800"
                            className="d-inline-block align-top rounded-full"
                            alt="logo"
                        /> */}
                    </div>
                </Col>
            </Row>
        </Container>
        
      )
}
export default MainComponent