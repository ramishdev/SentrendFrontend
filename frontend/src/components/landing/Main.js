import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeIt from "typeit-react";
import Typewriter from "typewriter-effect";

const MainComponent = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className="pt-20 px-10">

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
                <Col>
                    <div >
                        <img 
                            src={require("../../assets/landing/main-screen.png")}
                            width="800"
                            height="800"
                            className="d-inline-block align-top pt-20"
                            alt="logo"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        
      )
}
export default MainComponent