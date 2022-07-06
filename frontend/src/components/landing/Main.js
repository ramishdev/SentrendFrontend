import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeIt from "typeit-react";
import Typewriter from "typewriter-effect";


const MainComponent = () => {

    return (
        <Container fluid = "true">
            <Row className = "">
                <Col className = "">
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
                        <p className = "text-xl">
                            Boost your Twitter performance by monitoring key engagement metrics in a dashboard
                        </p>
                    </div>
                </Col>
                <Col className = "pt-40 d-flex justify-content-center">
                    {/* <div >
                        <img
                            src={require("../../assets/landing/main-screen.png")}
                            width="1200px"
                            height="1200px"
                            className="bg-left"
                            alt="logo"
                        />
                    </div> */}
                    <div className = "bg-contain bg-no-repeat"   style={{backgroundImage: "url(/test3.png)",   width:'700px',height:'700px'}}></div>
                </Col>
            </Row>

            <Row className = "pb-20">
                <Col className = "d-flex justify-center">
                        <h1 className = "text-5xl text-black">
                           Our Features 
                        </h1>
                </Col>
            </Row>
            <Row className = "pb-20"> 
                <Col className="">
                        <h1 className = "text-3xl text-sky-800  d-flex justify-center">
                           Sentiment Analysis 
                        </h1>
                </Col>
                <Col>
                        <h1 className = "text-3xl text-sky-800 d-flex justify-center">
                           Metrics Analysis 
                        </h1>
                        {/* <img
                            src={require("../../assets/landing/topics.png")}
                            width="500px"
                            height="500px"
                            className="d-flex justify-center"
                            alt="logo"
                        /> */}
                </Col>
                <Col className = "">
                        <h1 className = "text-3xl text-sky-800 d-flex justify-center">
                           Topic Analysis 
                        </h1>
                        {/* <img
                            src={require("../../assets/landing/topics.png")}
                            width="400px"
                            height="400px"
                            className="d-flex justify-center"
                            alt="logo"
                        /> */}
                </Col>
            </Row>
            <Row className = "pb-20"> 
                <Col className="">
                        <img
                            src={require("../../assets/landing/sentiment.jpg")}
                            width="800px"
                            height="800px"
                            className="d-flex justify-content-center"
                            alt="logo"
                        />
                </Col>
                <Col className = "">
                        <img
                            src={require("../../assets/landing/metrics-nobg.png")}
                            width="500px"
                            height="500px"
                            className="d-flex justify-content-center"
                            alt="logo"
                        />
                </Col>
                <Col className = "">
                        <img
                            src={require("../../assets/landing/topics.png")}
                            width="500px"
                            height="500px"
                            className="d-flex justify-center"
                            alt="logo"
                        />
                </Col>
            </Row>
        </Container>
        
      )
}
export default MainComponent