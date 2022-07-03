import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeIt from "typeit-react";
import Typewriter from "typewriter-effect";


const MainComponent = () => {

    return (
        <Container fluid = "true">
            <Row>
                <Col xs={7} className = "">
                    <div className="p-40">

                        <h1 className = "text-7xl text-sky-800">
                            Monitor your business and brand by analyzing 
                        </h1>
                        <Typewriter
                                options={{
                                    // strings: ['Hello', 'World'],
                                    delay:75,
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "text-7xl text-green-400",
                                    cursorClassName:"text-7xl"
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('<strong>metrics</strong>')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2000)
                                    .deleteChars(7)
                                    .typeString('<strong >sentiment</strong>')
                                    .pauseFor(2000)
                                    .deleteChars(9)
                                    .typeString('<strong>topics</strong>')
                                    .pauseFor(2000)
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                                }}
                            />
                        <p className = "text-2xl">
                            Boost your Twitter performance by monitoring key engagement metrics in a dashboard
                        </p>
                    </div>
                </Col>
                <Col className = "pt-20 d-flex justify-content-end">
                    {/* <div >
                        <img
                            src={require("../../assets/landing/main-screen.png")}
                            width="1200px"
                            height="1200px"
                            className="bg-left"
                            alt="logo"
                        />
                    </div> */}
                    <div className = "bg-cover bg-no-repeat bg-right"   style={{backgroundImage: "url(/main-screen-lq.png)",   width:'600px',height:'700px'}}></div>
                </Col>
            </Row>
        </Container>
        
      )
}
export default MainComponent