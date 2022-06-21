



import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typewriter from 'typewriter-effect';

const MainComponent = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className="pt-20 px-10 static...">
                        <Typewriter
                                options={{
                                    // strings: ['Hello', 'World'],
                                    delay:75,
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "text-7xl text-sky-800",
                                    cursorClassName:"text-7xl text-sky-800"
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('Monitor your business and brand by analyzing <strong><span style="color: #27ae60; font-size: 100px">metrics</span></strong>')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2000)
                                    .deleteChars(7)
                                    .typeString('<strong ><span style="color: #27ae60; font-size: 100px">sentiment</span></strong>')
                                    .pauseFor(2000)
                                    .deleteChars(9)
                                    .typeString('<strong><span style="color: #27ae60; font-size: 100px">topics</span></strong>')
                                    .pauseFor(2000)
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                                    
                                }}
                                
                            />
                   
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

