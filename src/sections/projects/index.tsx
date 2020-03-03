import React, { Component } from 'react';
import { Row, Badge, Button, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './index.scss';
// import Lottie from 'react-lottie';

export default class Projects extends Component<{}, {}> {
  // render will know everything!
  render() {
    return (
      // <section id="projects">
      //   <Container id="projects-column">
      //     <div id="projects-blurb">
      //       <h2>Projects</h2>
      //     </div>
      //   </Container>
      // </section>

      <section id="projects">
        <Container id="projects-container">
          <div id="pinner">
            <div id="projects-blurb">
              <br />
              <br />
              <h2>Projects</h2>
              <br />
              <br />
              <Row className="justify-content-center">
                <Card>
                  {/* <a href="https://lottiefiles.com/579-scan-qr-code-success" >
        <Lottie options={defaultOptions}
                        height={140}
                        width={140}/>
                        </a> */}
                  <CardBody>
                    <CardTitle>Verify</CardTitle>
                    <CardText>
                      Worked on Verify, the web app designed for mobile devices to scan Secure QR Codes.
                    </CardText>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">Rails</Badge>
                    <br />
                    <br />
                    <Button className="buttons" variant="primary" href="https://verify.linkcreationstudio.com">
                      Visit
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  {/* <CardImg src={linkReaderImage} style={{    width: '130px', marginTop: '10px', marginRight: 'auto', marginLeft: 'auto'}} /> */}
                  <CardBody>
                    <CardTitle>LinkReader</CardTitle>
                    <CardText>
                      Worked on LinkReader, the Android and iOS app designed to scan Link enabled content.
                    </CardText>
                    <Badge variant="secondary">Objective-C</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <br />
                    <br />
                    <Button className="buttons" variant="primary" href="https://mylinks.linkcreationstudio.com/app">
                      Visit
                    </Button>
                  </CardBody>
                </Card>
                <Card>
                  {/* <CardImg src={revealImage} style={{ width: '90%', marginTop: '40px', marginBottom: '10px', marginRight: 'auto', marginLeft: 'auto'}} /> */}
                  <CardBody>
                    <CardTitle>HP Reveal</CardTitle>
                    <CardText>
                      Worked on Reveal, the platform enabling smart packaging for anti-counterfeiting, tracking, and
                      engaging customer experiences.
                    </CardText>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">Rails</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <br />
                    <br />
                    <Button className="buttons" variant="primary" href="https://www.linkcreationstudio.com/">
                      Visit
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  {/* <CardImg src={hpSmartImage} style={{ width: '130px', marginTop: '10px', marginRight: 'auto', marginLeft: 'auto'}} /> */}
                  <CardBody>
                    <CardTitle>SmartTasks</CardTitle>
                    <CardText>
                      Worked on the front and back end to enable SmartTasks for the HP SmartApp and the HP JetAdvantage
                      Capture app.
                    </CardText>
                    <Badge variant="secondary">Spring</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">Android</Badge>
                    <Badge variant="secondary">Xamarin</Badge>
                    <br />
                    <br />
                    <Button className="buttons" variant="primary" href="https://www.youtube.com/watch?v=T-jJy7hBS18">
                      Visit
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  {/* <a href="https://lottiefiles.com/9185-scanner" >
            <Lottie options={scanningOptions}
                        height={140}
                        width={200}/>
        </a> */}
                  <CardBody>
                    <CardTitle>PageLift</CardTitle>
                    <CardText>
                      Worked on PageLift, the C++ library that enables document detection, capture, and intelligent
                      enhancement. Integrated into HP Smart and JetAdvantage Capture.
                    </CardText>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Android</Badge>
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">Xamarin</Badge>
                    <br />
                    <br />
                    <Button
                      className="buttons"
                      variant="primary"
                      href="https://play.google.com/store/apps/details?id=com.hp.printercontrol"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>

                <Card>
                  {/* <CardImg src={featherFrenzyImage} style={{    width: '130px', marginTop: '10px', marginRight: 'auto', marginLeft: 'auto'}} /> */}
                  <CardBody>
                    <CardTitle>Feather Frenzy</CardTitle>
                    <CardText>
                      Made this Android game with two of my friends in college as a side project. Game is inspired by a
                      mini game from Super Mario 64 for the Nintendo DS.
                    </CardText>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Android</Badge>
                    <br />
                    <br />
                    <Button
                      className="buttons"
                      variant="primary"
                      href="https://play.google.com/store/apps/details?id=com.chasm.featherfrenzy"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
