import React from "react"
import { Badge, Button, Card, Row } from "react-bootstrap"
import Lottie from 'react-lottie';
import * as animationData from '../../images/qrScanner.json'
import * as scanningData from '../../images/scanning.json'
import * as linkReaderImage from '../../images/linkreader.png'
import * as revealImage from '../../images/reveal.png'
import * as featherFrenzyImage from '../../images/featherfrenzy.png'
import * as hpSmartImage from '../../images/hpsmart.jpg'

export default class ProjectsSection extends React.Component {
    render() {
        const scanningOptions = {
            loop: true,
            autoplay: true, 
            animationData: scanningData.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
      return <section>
        <h3 className="centered">Projects I have worked on</h3>
        <Row className="justify-content-center">
            <Card style={{ margin: '10px', width: '18rem', textAlign: 'center', borderRadius: '1.5rem' }}>
            <a href="https://lottiefiles.com/579-scan-qr-code-success" >
                <Lottie options={defaultOptions}
                                height={140}
                                width={140}/>
                                </a>
                <Card.Body>
                    <Card.Title>Verify</Card.Title>
                    <Card.Text>
                    Worked on Verify, the web app designed for mobile devices to scan Secure QR Codes.
                    </Card.Text>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">Rails</Badge>
                    <br/>
                    <br/>
                    <Button className="buttons" variant="primary" href="https://verify.linkcreationstudio.com">Visit</Button>
                </Card.Body>
            </Card>
            <Card style={{ margin: '10px', width: '18rem', textAlign: 'center', borderRadius: '1.5rem' }}>
                <Card.Img src={linkReaderImage} style={{    width: '130px', marginTop: '10px', marginRight: 'auto', marginLeft: 'auto'}} />
                <Card.Body>
                    <Card.Title>LinkReader</Card.Title>
                    <Card.Text>
                    Worked on LinkReader, the Android and iOS app designed to scan Link enabled content.
                    </Card.Text>
                    <Badge variant="secondary">Objective-C</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <br/>
                    <br/>
                    <Button className="buttons" variant="primary" href="https://mylinks.linkcreationstudio.com/app">Visit</Button>
                </Card.Body>
            </Card>
            <Card style={{ margin: '10px', width: '18rem', textAlign: 'center', borderRadius: '1.5rem' }}>
                <Card.Img src={revealImage} style={{ width: '90%', marginTop: '40px', marginBottom: '10px', marginRight: 'auto', marginLeft: 'auto'}} />
                <Card.Body>
                    <Card.Title>HP Reveal</Card.Title>
                    <Card.Text>
                    Worked on Reveal, the platform enabling smart packaging for anti-counterfeiting, tracking, and engaging customer experiences. 
                    </Card.Text>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">Rails</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <br/>
                    <br/>
                    <Button className="buttons" variant="primary" href="https://www.linkcreationstudio.com/">Visit</Button>
                </Card.Body>
            </Card>

            <Card style={{ margin: '10px', width: '18rem', textAlign: 'center', borderRadius: '1.5rem' }}>
                <Card.Img src={hpSmartImage} style={{ width: '130px', marginTop: '10px', marginRight: 'auto', marginLeft: 'auto'}} />
                <Card.Body>
                    <Card.Title>SmartTasks</Card.Title>
                    <Card.Text>
                    Worked on the front and back end to enable SmartTasks for the HP SmartApp and the HP JetAdvantage Capture app.
                    </Card.Text>
                    <Badge variant="secondary">Spring</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">Android</Badge>
                    <Badge variant="secondary">Xamarin</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <br/>
                    <br/>
                    <Button className="buttons" variant="primary" href="https://www.youtube.com/watch?v=T-jJy7hBS18">Visit</Button>
                </Card.Body>
            </Card>

            <Card style={{ margin: '10px', width: '18rem', textAlign: 'center', borderRadius: '1.5rem' }}>
                <a href="https://lottiefiles.com/9185-scanner" >
                    <Lottie options={scanningOptions}
                                height={140}
                                width={200}/>
                </a>
                <Card.Body>
                    <Card.Title>PageLift</Card.Title>
                    <Card.Text>
                    Worked on PageLift, the C++ library that enables document detection, capture, and intelligent enhancement. Integrated into HP Smart and JetAdvantage Capture.
                    </Card.Text>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Android</Badge>
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">Xamarin</Badge>
                    <br/>
                    <br/>
                    <Button className="buttons" variant="primary" href="https://play.google.com/store/apps/details?id=com.hp.printercontrol">Visit</Button>
                </Card.Body>
            </Card>


            <Card style={{ margin: '10px', width: '18rem', textAlign: 'center', borderRadius: '1.5rem' }}>
                <Card.Img src={featherFrenzyImage} style={{    width: '130px', marginTop: '10px', marginRight: 'auto', marginLeft: 'auto'}} />
                <Card.Body>
                    <Card.Title>Feather Frenzy</Card.Title>
                    <Card.Text>
                    Made this Android game with two of my friends in college as a side project. Game is inspired by a mini game from Super Mario 64 for the Nintendo DS.
                    </Card.Text>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Android</Badge>
                    <br/>
                    <br/>
                    <Button className="buttons" variant="primary" href="https://play.google.com/store/apps/details?id=com.chasm.featherfrenzy">Visit</Button>
                </Card.Body>
            </Card>
        </Row>
      </section>
    }
  }